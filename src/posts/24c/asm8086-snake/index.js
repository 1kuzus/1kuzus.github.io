import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>变量设置</X.H1>
            <X.P>在数据段中使用以下变量：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                datasg segment
                    addri9 db 0,0,0,0            ;存放原9号中断的中断向量
                    seed   db 0adh               ;随机数种子
                    rand   db 0                  ;随机数
                    apple  db 44h                ;果实位置，初始设为44h
                    dir    db 0                  ;方向，0:up 1:right 2:left 3:down
                    dirbuf db 0
                    snake  db 4ah,49h,48h,47h    ;蛇尾 --- 蛇头
                           db 256 dup(0)
                datasg ends
                `}
            />
            <X.H1>前置技术</X.H1>
            <X.P>在汇编实现贪吃蛇通常需要解决以下几个技术：</X.P>
            <X.H2>延时函数</X.H2>
            <X.P>在汇编中延时函数可以通过执行空循环来实现：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                ;;;;延迟一段时间
                delay:    
                          push  cx
                          mov   cx,7h                            ;增大此值可以减慢蛇的移动速度（间隔）
                d1:       push  cx
                          mov   cx,0ffffh
                d2:       loop  d2
                          pop   cx
                          loop  d1
                          pop   cx
                          ret
                `}
            />
            <X.P>
                虽然这种方法不能精确控制延迟多少秒/毫秒，但可以通过调节外层循环的次数（内层也可以）来相对地控制延迟时间。（一层循环最大执行次数是`ffffh`，仍然太快，因此需要两层循环）
            </X.P>
            <X.H2>随机数</X.H2>
            <X.P>使用平方取中法实现一个简单的伪随机序列，随机种子预先写死在代码中：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                ;;;;平方取中随机数
                ;输出：
                ;rand     下一个随机数
                getrand:  
                          push  ax
                          push  cx
                          mov   al,rand
                          mul   byte ptr rand
                          mov   cl,4
                          shr   ax,cl
                          cmp   al,0
                          jnz   ok
                          mov   al,seed                          ;避免陷入0循环
                ok:       
                          mov   rand,al
                          pop   cx
                          pop   ax
                          ret
                `}
            />
            <X.P>
                这里生成的是`8`位的随机数，每次调用`getrand`都会更新`rand`标号处的一个字节的值。这个随机数生成方法有时会陷入`0`循环，因此产生新的随机数时加了一个判断，如果结果为`0`则重新从`seed`开始生成。
            </X.P>
            <X.H2>处理键盘输入</X.H2>
            <X.P>使用自定义的键盘中断程序（`9`号中断）解决，大致框架为：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                codesg segment
                    start:   
                             mov   ax,datasg
                             mov   ds,ax
                    ;保存原来9号中断的中断向量到addri9处
                             mov   ax,0
                             mov   es,ax
                             push  es:[9*4]
                             pop   word ptr addri9[0]
                             push  es:[9*4+2]
                             pop   word ptr addri9[2]
                    ;更改原来的中断向量
                             mov   word ptr es:[9*4],offset int9    ;设置9号中断的IP为offset int9
                             mov   es:[9*4+2],cs                    ;设置9号中断的CS为代码段起始地址
                             ;...
                
                    ;游戏结束返回
                    ret_main:
                    ;恢复原来的中断向量
                             mov   ax,0
                             mov   es,ax
                             push  word ptr addri9[0]
                             pop   es:[9*4]
                             push  word ptr addri9[2]
                             pop   es:[9*4+2]
                             ;...
                
                
                    ;;;;自定义键盘中断
                    int9:    
                             push  ax
                             push  bx
                    ;模拟标志寄存器入栈
                             pushf
                    ;模拟设置IF=0，TF=0
                             pushf
                             pop   ax
                             and   ah,11111100b
                             push  ax
                             popf
                    ;call指令即可实现CS、IP入栈并跳转到入口地址
                             call  dword ptr addri9
                    ;自定义的键盘输入处理
                             in    al,60h                           ;读取键盘输入送入AL
                             cmp   al,dir
                             je    int9_dft
                             cmp   al,11h                           ;W键
                             je    int9_w
                             cmp   al,20h                           ;D键
                             je    int9_d
                             cmp   al,1eh                           ;A键
                             je    int9_a
                             cmp   al,1fh                           ;S键
                             je    int9_s
                             jmp   int9_dft
                    int9_w:  
                             mov   dirbuf,0
                             jmp   int9_dft
                    int9_d:  
                             mov   dirbuf,1
                             jmp   int9_dft
                    int9_a:  
                             mov   dirbuf,2
                             jmp   int9_dft
                    int9_s:  
                             mov   dirbuf,3
                             jmp   int9_dft
                    int9_dft:
                             pop   bx
                             pop   ax
                             iret
                codesg ends
                end start
                `}
            />
            <X.P>
                在设计键盘响应时，不希望玩家能够直接修改蛇的移动方向为当前方向的反向（不能调转$180^\circ$），例如如果当前移动方向为向上，则应只允许修改为向左/向右，而不能修改为向下。为此额外添加了`dirbuf`变量，用户的键盘输入会实时存入`dirbuf`，但只在每次主循环中有条件地与`dir`同步。主循环如下（其中`move`函数处理蛇移动一步，后面会详细说明）：
            </X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                main_loop:
                          call  delay
                          mov   al,dirbuf
                          xor   al,dir
                          cmp   al,3
                          je    keep_dir
                          xor   al,dir
                          mov   dir,al
                keep_dir: 
                          call  move
                          jmp   main_loop
                `}
            />
            <X.P>
                代码中`dir`与`dirbuf`异或为`3`时，表示方向刚好相差$180^\circ$，此时不改变`dir`的值（`je
                keep_dir`）；由于异或操作改变了`AL`的值，因此送入`dir`前需要再异或一次原来的`dir`值。
            </X.P>
            <X.H2>坐标设计与操作显存绘制</X.H2>
            <X.P>
                通过操作显存绘制图形，显存中用`2`个字节表示一个字符，低字节表示字符的ASCII码，高字节表示字符的颜色。这里不设置字符，只设置背景色，相邻的两列刚好凑成一个正方形。
            </X.P>
            <X.P>
                游戏的地图大小设计为$16 \times
                16$（含边界），这样刚好可以用`4`位表示一个坐标分量，一个字节表示一个二维坐标。约定一个字节的高`4`位表示$y$坐标，低`4`位表示$x$坐标。例如`4ah`表示逻辑坐标$(10,4)$，对应$16
                \times 16$地图中的第`10`行、第`4`列的方格。
            </X.P>
            <X.P>
                由于字符显示区是`25`行、`80`列，这里的$x$坐标对应了`行号-5`（为了让地图显示在屏幕中间），$y$坐标对应了`列号/2`（因为每个字符占`2`列）。封装一个`write`函数，用于将属性写入显存的指定位置：
            </X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                ;;;;在显存[x+5行，2*y列]和[x+5行，2*y+1列]处写入属性BH（等价于逻辑坐标x,y）
                write:    
                ;输入：
                ;BH       属性
                ;BL[7:4]  y坐标（逻辑列号）
                ;BL[3:0]  x坐标（逻辑行号）
                          push  cx
                          mov   di,bx
                          and   di,00f0h                         ;(di)=逻辑列号*16
                          mov   cl,2
                          shr   di,cl                            ;逻辑右移2位，(di)=逻辑列号*4
                          mov   cl,bl
                          and   cl,0fh                           ;(cl)=逻辑行号
                          mov   al,10
                          mul   cl                               ;(ax)=逻辑行号*10
                          add   ax,0b800h+50                     ;(ax)=逻辑行号*10+b800h+50
                          mov   es,ax                            ;(es)=逻辑行号*10+b800h+50
                          mov   byte ptr es:[di+1],bh
                          mov   byte ptr es:[di+3],bh
                          pop   cx
                          ret
                `}
            />
            <X.P>
                显存的起始地址是`b8000h`，屏幕第`i`行、第`j`列的偏移地址是`80\*2\*i+2\*j`，用`段地址:偏移地址`表示为`b800:80\*2\*i+2\*j`；我们希望从第`5`行开始显示地图，因此偏移地址额外加上`80\*2\*5`，如果加到段地址上还要除以`16`，也就是`80\*2\*5/16=50`，对应代码中`0b800h+50`。
            </X.P>
            <X.P>同理，逻辑行号在偏移地址中数值要乘`80*2=160`，而表示在段地址中只需乘`160/16=10`。</X.P>
            <X.H1>实现</X.H1>
            <X.H2>代码</X.H2>
            <X.P>完整的代码如下：</X.P>
            <X.CodeBlock
                language="asm8086"
                code={`
                assume cs:codesg,ds:datasg,ss:stcksg

                datasg segment
                    addri9 db 0,0,0,0            ;存放原9号中断的中断向量
                    seed   db 0adh               ;随机数种子
                    rand   db 0                  ;随机数
                    apple  db 44h                ;果实位置，初始设为44h
                    dir    db 0                  ;方向，0:up 1:right 2:left 3:down
                    dirbuf db 0
                    snake  db 4ah,49h,48h,47h    ;蛇尾 --- 蛇头
                           db 256 dup(0)
                datasg ends
                
                stcksg segment
                           db 128 dup(0)
                stcksg ends
                
                codesg segment
                    start:    
                              mov   ax,datasg
                              mov   ds,ax
                    ;保存原来9号中断的中断向量到addri9处
                              mov   ax,0
                              mov   es,ax
                              push  es:[9*4]
                              pop   word ptr addri9[0]
                              push  es:[9*4+2]
                              pop   word ptr addri9[2]
                    ;更改原来的中断向量
                              mov   word ptr es:[9*4],offset int9    ;设置9号中断的IP为offset int9
                              mov   es:[9*4+2],cs                    ;设置9号中断的CS为代码段起始地址
                    ;初始化
                              call  init
                    ;主循环
                    main_loop:
                              call  delay
                              mov   al,dirbuf
                              xor   al,dir
                              cmp   al,3
                              je    keep_dir
                              xor   al,dir
                              mov   dir,al
                    keep_dir: 
                              call  move
                              jmp   main_loop
                    ;游戏结束返回
                    gameover: 
                    ;恢复原来的中断向量
                              mov   ax,0
                              mov   es,ax
                              push  word ptr addri9[0]
                              pop   es:[9*4]
                              push  word ptr addri9[2]
                              pop   es:[9*4+2]
                    ;清空键盘缓冲区
                    clear:    
                              mov   ah, 01h
                              int   16h
                              je    done
                              mov   ah, 00h
                              int   16h
                              jmp   clear
                    done:     
                              mov   ax,4c00h
                              int   21h
                
                    ;;;;延迟一段时间
                    delay:    
                              push  cx
                              mov   cx,7h                            ;增大此值可以减慢蛇的移动速度（间隔）
                    d1:       push  cx
                              mov   cx,0ffffh
                    d2:       loop  d2
                              pop   cx
                              loop  d1
                              pop   cx
                              ret
                
                    ;;;;平方取中随机数
                    ;输出：
                    ;rand     下一个随机数
                    getrand:  
                              push  ax
                              push  cx
                              mov   al,rand
                              mul   byte ptr rand
                              mov   cl,4
                              shr   ax,cl
                              cmp   al,0
                              jnz   ok
                              mov   al,seed                          ;避免陷入0循环
                    ok:       
                              mov   rand,al
                              pop   cx
                              pop   ax
                              ret
                
                    ;;;;在显存[x+5行，2*y列]和[x+5行，2*y+1列]处写入属性BH（等价于逻辑坐标x,y）
                    write:    
                    ;输入：
                    ;BH       属性
                    ;BL[7:4]  y坐标（逻辑列号）
                    ;BL[3:0]  x坐标（逻辑行号）
                              push  cx
                              mov   di,bx
                              and   di,00f0h                         ;(di)=逻辑列号*16
                              mov   cl,2
                              shr   di,cl                            ;逻辑右移2位，(di)=逻辑列号*4
                              mov   cl,bl
                              and   cl,0fh                           ;(cl)=逻辑行号
                              mov   al,10
                              mul   cl                               ;(ax)=逻辑行号*10
                              add   ax,0b800h+50                     ;(ax)=逻辑行号*10+b800h+50
                              mov   es,ax                            ;(es)=逻辑行号*10+b800h+50
                              mov   byte ptr es:[di+1],bh
                              mov   byte ptr es:[di+3],bh
                              pop   cx
                              ret
                
                    ;;;;初始化地图
                    init:     
                    ;清屏
                              mov   ax,0b800h+50
                              mov   es,ax
                              mov   cx,7fffh
                              mov   di,0
                    i1:       mov   byte ptr es:[di],0
                              inc   di
                              loop  i1
                    ;绘制果实和蛇
                              call  getrand
                              mov   bh,40h                           ;红底（果实）
                              mov   bl,apple
                              call  write
                              mov   si,0
                              mov   bh,20h                           ;绿底（蛇）
                    i2:       mov   bl,snake[si]
                              call  write
                              inc   si
                              cmp   byte ptr snake[si],0
                              jnz   i2
                    ;绘制边界
                              mov   bh,70h                           ;白底（边界）
                              mov   cx,15                            ;16*16地图（包含边界）
                    i3:       mov   bl,cl                            ;x=i，y=0
                              call  write
                              or    bl,0f0h                          ;x=i，y=15
                              call  write
                              mov   bl,cl
                              push  cx
                              mov   cx,4
                              shl   bl,cl                            ;赋值y=i
                              pop   cx
                              or    bl,0fh                           ;x=15，y=i
                              call  write
                              and   bl,0f0h                          ;x=0，y=i
                              call  write
                              jcxz  ret_init
                              sub   cx,1
                              jmp   i3
                    ret_init: 
                              ret
                
                    ;;;;移动一步
                    move:     
                    ;si移动到头部下一个位置
                              mov   si,0
                    m2:       inc   si
                              cmp   snake[si],0
                              jnz   m2
                    ;复制原头部数据
                              mov   al,snake[si-1]
                              mov   snake[si],al
                    ;根据方向移动蛇头
                              cmp   byte ptr dir,0
                              je    move_u
                              cmp   byte ptr dir,1
                              je    move_r
                              cmp   byte ptr dir,2
                              je    move_l
                              cmp   byte ptr dir,3
                              je    move_d
                              jmp   move_dft
                    move_u:   
                              sub   snake[si],1
                              jmp   move_dft
                    move_r:   
                              add   snake[si],10h
                              jmp   move_dft
                    move_l:   
                              sub   snake[si],10h
                              jmp   move_dft
                    move_d:   
                              add   snake[si],1
                              jmp   move_dft
                    move_dft: 
                    ;擦除尾部
                              mov   bh,0
                              mov   bl,snake[0]
                              call  write
                    ;绘制新头部
                              mov   bh,20h
                              mov   bl,snake[si]
                              call  write
                    ;判定蛇头吃到果实或撞墙
                              cmp   bl,apple
                              je    eat
                              call  is_valid
                              cmp   al,0
                              je    gameover
                    ;移动蛇身
                              mov   si,0
                    m1:       mov   al,snake[si+1]
                              mov   snake[si],al
                              inc   si
                              cmp   byte ptr snake[si+1],0
                              jnz   m1
                    ;擦除复制的新头部
                              mov   snake[si],0
                              jmp   ret_move
                    ;吃到果实
                    eat:      
                              mov   al,apple
                              mov   snake[si],al
                    m3:       call  getrand
                              mov   bl,rand
                              call  is_valid
                              cmp   al,1
                              jne   m3                               ;如果生成的位置已经有蛇身，则重新生成
                              mov   byte ptr apple,bl
                              mov   bh,40h
                              mov   bl,apple
                              call  write
                              ret
                
                    ;;;;判断合法位置：边界、蛇身处判定为不合法（不判断蛇头）
                    is_valid: 
                    ;输入：
                    ;BL     坐标
                    ;输出：
                    ;AL     0(不合法)/1(合法)
                              push  bx
                              mov   al,0
                              cmp   bl,0fh                           ;x=i，y=0
                              jb    false
                              cmp   bl,0f0h                          ;x=i，y=15
                              ja    false
                              mov   bh,bl
                              and   bh,0fh
                              cmp   bh,0fh                           ;x=15，y=i
                              je    false
                              cmp   bh,0                             ;x=0，y=i
                              je    false
                
                              mov   si,0
                    v1:       cmp   bl,snake[si]
                              je    false
                              inc   si
                              cmp   byte ptr snake[si+1],0
                              jnz   v1
                
                              mov   al,1
                    false:    
                              pop   bx
                              ret
                
                    ;;;;自定义键盘中断
                    int9:     
                              push  ax
                              push  bx
                    ;模拟标志寄存器入栈
                              pushf
                    ;模拟设置IF=0，TF=0
                              pushf
                              pop   ax
                              and   ah,11111100b
                              push  ax
                              popf
                    ;call指令即可实现CS、IP入栈并跳转到入口地址
                              call  dword ptr addri9
                    ;自定义的键盘输入处理
                              in    al,60h                           ;读取键盘输入送入AL
                              cmp   al,dir
                              je    int9_dft
                              cmp   al,11h                           ;W键
                              je    int9_w
                              cmp   al,20h                           ;D键
                              je    int9_d
                              cmp   al,1eh                           ;A键
                              je    int9_a
                              cmp   al,1fh                           ;S键
                              je    int9_s
                              jmp   int9_dft
                    int9_w:   
                              mov   dirbuf,0
                              jmp   int9_dft
                    int9_d:   
                              mov   dirbuf,1
                              jmp   int9_dft
                    int9_a:   
                              mov   dirbuf,2
                              jmp   int9_dft
                    int9_s:   
                              mov   dirbuf,3
                              jmp   int9_dft
                    int9_dft: 
                              pop   bx
                              pop   ax
                              iret
                codesg ends
                end start                             
                `}
            />
            <X.H2>演示</X.H2>
            <X.Image src="game.gif" />
        </>
    );
}
