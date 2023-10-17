const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]



//disable-eslint
const MMDataParallel=<>(
    (module): Recognizer3D(
      (backbone): spnn_sp_sp_sp(
        (conv1): Sequential(
          (0): MinkowskiConvolution(in=17, out=32, kernel_size=[3, 7, 7], stride=[1, 1, 1], dilation=[1, 1, 1])
          (1): MinkowskiInstanceNorm(nchannels=32)
          (2): MinkowskiReLU()
          (3): MinkowskiMaxPooling(kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
        )
        (layer1): Sequential(
          (0): Bottleneck(
            (conv1): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 3, 3], stride=[1, 2, 2], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
            (downsample): Sequential(
              (0): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 1, 1], stride=[1, 2, 2], dilation=[1, 1, 1])
              (1): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            )
          )
          (1): Bottleneck(
            (conv1): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
          (2): Bottleneck(
            (conv1): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
          (3): Bottleneck(
            (conv1): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=32, out=32, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
        )
        (layer2): Sequential(
          (0): Bottleneck(
            (conv1): MinkowskiConvolution(in=32, out=64, kernel_size=[3, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 3, 3], stride=[1, 2, 2], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
            (downsample): Sequential(
              (0): MinkowskiConvolution(in=32, out=64, kernel_size=[1, 1, 1], stride=[1, 2, 2], dilation=[1, 1, 1])
              (1): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            )
          )
          (1): Bottleneck(
            (conv1): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
          (2): Bottleneck(
            (conv1): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
          (3): Bottleneck(
            (conv1): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
          (4): Bottleneck(
            (conv1): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
          (5): Bottleneck(
            (conv1): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=64, out=64, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
        )
        (layer3): Sequential(
          (0): Bottleneck(
            (conv1): MinkowskiConvolution(in=64, out=128, kernel_size=[3, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=128, out=128, kernel_size=[1, 3, 3], stride=[1, 2, 2], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=128, out=128, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
            (downsample): Sequential(
              (0): MinkowskiConvolution(in=64, out=128, kernel_size=[1, 1, 1], stride=[1, 2, 2], dilation=[1, 1, 1])
              (1): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            )
          )
          (1): Bottleneck(
            (conv1): MinkowskiConvolution(in=128, out=128, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=128, out=128, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=128, out=128, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
          (2): Bottleneck(
            (conv1): MinkowskiConvolution(in=128, out=128, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm1): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv2): MinkowskiConvolution(in=128, out=128, kernel_size=[1, 3, 3], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm2): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (conv3): MinkowskiConvolution(in=128, out=128, kernel_size=[1, 1, 1], stride=[1, 1, 1], dilation=[1, 1, 1])
            (norm3): MinkowskiBatchNorm(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): MinkowskiReLU()
          )
        )
        (todense): ToDense()
      )
      (cls_head): I3DHead(
        (loss_cls): CrossEntropyLoss()
        (fc_cls): Linear(in_features=128, out_features=60, bias=True)
        (avg_pool): AdaptiveAvgPool3d(output_size=(1, 1, 1))
      )
    )
  )
  
  
  MMDataParallel(
    (module): Recognizer3D_feat(
      (backbone): ResNet2_SSTCcross(
        (conv1): ConvModule(
          (conv): Conv2d(17, 32, kernel_size=(7, 7), stride=(1, 1), padding=(3, 3), bias=False)
          (bn): BatchNorm2d(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
          (activate): ReLU(inplace=True)
        )
        (maxpool): MaxPool2d(kernel_size=3, stride=1, padding=1, dilation=1, ceil_mode=False)
        (blocksW): ModuleList(
          (0): AttentionBlockW(
            (query): Linear(in_features=7, out_features=7, bias=True)
            (key): Linear(in_features=7, out_features=7, bias=True)
            (value): Linear(in_features=7, out_features=7, bias=True)
            (dense): Linear(in_features=7, out_features=7, bias=True)
          )
        )
        (blocksH): ModuleList(
          (0): AttentionBlockH(
            (query): Linear(in_features=7, out_features=7, bias=True)
            (key): Linear(in_features=7, out_features=7, bias=True)
            (value): Linear(in_features=7, out_features=7, bias=True)
            (dense): Linear(in_features=7, out_features=7, bias=True)
          )
        )
        (blockFFN): ModuleList(
          (0): FeedForwardConv3D(
            (norm_1): LayerNorm((48, 7, 7), eps=1e-05, elementwise_affine=True)
            (norm_2): LayerNorm((48, 7, 7), eps=1e-05, elementwise_affine=True)
            (relu): ReLU()
            (w_1): Conv3d(512, 1024, kernel_size=(1, 1, 1), stride=(1, 1, 1))
            (w_2): Conv3d(1024, 512, kernel_size=(1, 1, 1), stride=(1, 1, 1))
            (dropout): Dropout(p=0.2, inplace=False)
            (feed_forward): Sequential(
              (0): Conv3d(512, 1024, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              (1): ReLU()
              (2): Dropout(p=0.2, inplace=False)
              (3): Conv3d(1024, 512, kernel_size=(1, 1, 1), stride=(1, 1, 1))
            )
          )
        )
        (layer1): ModuleList(
          (0): Sequential(
            (0): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(32, 32, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(32, 32, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(32, 128, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
              (downsample): ConvModule(
                (conv): Conv2d(32, 128, kernel_size=(1, 1), stride=(2, 2), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
            )
            (1): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(128, 32, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(32, 32, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(32, 128, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
            (2): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(128, 32, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(32, 32, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(32, 128, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
            (3): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(128, 32, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(32, 32, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(32, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(32, 128, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
          )
          (1): ModuleList(
            (0): AttentionBlockW(
              (query): Linear(in_features=28, out_features=28, bias=True)
              (key): Linear(in_features=28, out_features=28, bias=True)
              (value): Linear(in_features=28, out_features=28, bias=True)
              (dense): Linear(in_features=28, out_features=28, bias=True)
            )
          )
          (2): ModuleList(
            (0): AttentionBlockH(
              (query): Linear(in_features=28, out_features=28, bias=True)
              (key): Linear(in_features=28, out_features=28, bias=True)
              (value): Linear(in_features=28, out_features=28, bias=True)
              (dense): Linear(in_features=28, out_features=28, bias=True)
            )
          )
          (3): ModuleList(
            (0): FeedForwardConv3D(
              (norm_1): LayerNorm((48, 28, 28), eps=1e-05, elementwise_affine=True)
              (norm_2): LayerNorm((48, 28, 28), eps=1e-05, elementwise_affine=True)
              (relu): ReLU()
              (w_1): Conv3d(128, 256, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              (w_2): Conv3d(256, 128, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              (dropout): Dropout(p=0.2, inplace=False)
              (feed_forward): Sequential(
                (0): Conv3d(128, 256, kernel_size=(1, 1, 1), stride=(1, 1, 1))
                (1): ReLU()
                (2): Dropout(p=0.2, inplace=False)
                (3): Conv3d(256, 128, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              )
            )
          )
        )
        (layer2): ModuleList(
          (0): Sequential(
            (0): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(128, 64, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(64, 64, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(64, 256, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
              (downsample): ConvModule(
                (conv): Conv2d(128, 256, kernel_size=(1, 1), stride=(2, 2), bias=False)
                (bn): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
            )
            (1): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(256, 64, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(64, 256, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
            (2): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(256, 64, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(64, 256, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
            (3): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(256, 64, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(64, 256, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
            (4): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(256, 64, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(64, 256, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
            (5): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(256, 64, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(64, 256, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
          )
          (1): ModuleList(
            (0): AttentionBlockW(
              (query): Linear(in_features=14, out_features=14, bias=True)
              (key): Linear(in_features=14, out_features=14, bias=True)
              (value): Linear(in_features=14, out_features=14, bias=True)
              (dense): Linear(in_features=14, out_features=14, bias=True)
            )
          )
          (2): ModuleList(
            (0): AttentionBlockH(
              (query): Linear(in_features=14, out_features=14, bias=True)
              (key): Linear(in_features=14, out_features=14, bias=True)
              (value): Linear(in_features=14, out_features=14, bias=True)
              (dense): Linear(in_features=14, out_features=14, bias=True)
            )
          )
          (3): ModuleList(
            (0): FeedForwardConv3D(
              (norm_1): LayerNorm((48, 14, 14), eps=1e-05, elementwise_affine=True)
              (norm_2): LayerNorm((48, 14, 14), eps=1e-05, elementwise_affine=True)
              (relu): ReLU()
              (w_1): Conv3d(256, 512, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              (w_2): Conv3d(512, 256, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              (dropout): Dropout(p=0.2, inplace=False)
              (feed_forward): Sequential(
                (0): Conv3d(256, 512, kernel_size=(1, 1, 1), stride=(1, 1, 1))
                (1): ReLU()
                (2): Dropout(p=0.2, inplace=False)
                (3): Conv3d(512, 256, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              )
            )
          )
        )
        (layer3): ModuleList(
          (0): Sequential(
            (0): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(256, 128, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(128, 128, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(128, 512, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
              (downsample): ConvModule(
                (conv): Conv2d(256, 512, kernel_size=(1, 1), stride=(2, 2), bias=False)
                (bn): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
            )
            (1): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(512, 128, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(128, 512, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
            (2): Bottleneck(
              (conv1): ConvModule(
                (conv): Conv2d(512, 128, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv2): ConvModule(
                (conv): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
                (bn): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (activate): ReLU(inplace=True)
              )
              (conv3): ConvModule(
                (conv): Conv2d(128, 512, kernel_size=(1, 1), stride=(1, 1), bias=False)
                (bn): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (relu): ReLU(inplace=True)
            )
          )
          (1): ModuleList(
            (0): AttentionBlockW(
              (query): Linear(in_features=7, out_features=7, bias=True)
              (key): Linear(in_features=7, out_features=7, bias=True)
              (value): Linear(in_features=7, out_features=7, bias=True)
              (dense): Linear(in_features=7, out_features=7, bias=True)
            )
          )
          (2): ModuleList(
            (0): AttentionBlockH(
              (query): Linear(in_features=7, out_features=7, bias=True)
              (key): Linear(in_features=7, out_features=7, bias=True)
              (value): Linear(in_features=7, out_features=7, bias=True)
              (dense): Linear(in_features=7, out_features=7, bias=True)
            )
          )
          (3): ModuleList(
            (0): FeedForwardConv3D(
              (norm_1): LayerNorm((48, 7, 7), eps=1e-05, elementwise_affine=True)
              (norm_2): LayerNorm((48, 7, 7), eps=1e-05, elementwise_affine=True)
              (relu): ReLU()
              (w_1): Conv3d(512, 1024, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              (w_2): Conv3d(1024, 512, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              (dropout): Dropout(p=0.2, inplace=False)
              (feed_forward): Sequential(
                (0): Conv3d(512, 1024, kernel_size=(1, 1, 1), stride=(1, 1, 1))
                (1): ReLU()
                (2): Dropout(p=0.2, inplace=False)
                (3): Conv3d(1024, 512, kernel_size=(1, 1, 1), stride=(1, 1, 1))
              )
            )
          )
        )
      )
      (cls_head): I3DHead(
        (loss_cls): Poly_CrossEntropyLoss(
          (poly1ce): Poly1CrossEntropyLoss()
          (TripletLoss): TripletLoss(
            (ranking_loss): MarginRankingLoss()
          )
        )
        (dropout): Dropout(p=0.5, inplace=False)
        (fc_cls): Linear(in_features=512, out_features=60, bias=True)
        (avg_pool): AdaptiveAvgPool3d(output_size=(1, 1, 1))
      )
    )
  )
  </>