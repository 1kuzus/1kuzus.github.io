import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24d/android-send-explicit-intent-to-dynamically-registered-receiver/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.HighlightBlock background="red">
                <X.P>先说结论：目前Android不支持向动态注册的广播接收器发送显式`Intent`。</X.P>
            </X.HighlightBlock>
            <X.P>Android中可以通过隐式`Intent`：`intent.setAction(action)`，或显式`Intent`：`intent.setClassName(packageName, className)`来发送一个广播；同时一个广播接收器`BroadcastReceiver`可以静态注册（在`AndroidManifest.xml`中）或动态注册（通过`registerReceiver`）。</X.P>
            <X.P>这样接收方和发送方一共有`4`种组合方式，下面逐一讨论。</X.P>
            <X.H1>发送方使用隐式Intent</X.H1>
            <X.H2>接收方静态注册</X.H2>
            <X.P>Android 8.0以后将不能在`AndroidManifest.xml`中静态注册大部分接收隐式`Intent`的`BroadcastReceiver`了。这里的“大部分”排除了一些@例外情况[https://developer.android.com/develop/background-work/background-tasks/broadcasts/broadcast-exceptions]@，但对于自定义广播来说，基本上可以认为不能用隐式`Intent`去触发静态注册的`BroadcastReceiver`了。</X.P>
            <X.P>参考@[https://developer.android.com/develop/background-work/background-tasks/broadcasts]@：</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>Android 8.0</X.H3>
                <X.P>Beginning with Android 8.0 (API level 26), the system imposes additional restrictions on manifest-declared receivers. If your app targets Android 8.0 or higher, you cannot use the manifest to declare a receiver for most implicit broadcasts (broadcasts that don't target your app specifically). You can still use a context-registered receiver when the user is actively using your app.</X.P>
            </X.HighlightBlock>
            <X.P>以及@[https://developer.android.com/about/versions/oreo/background#broadcasts]@：</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>Broadcast Limitations</X.H3>
                <X.Uli>Apps that target Android 8.0 or higher can no longer register broadcast receivers for implicit broadcasts in their manifest unless the broadcast is restricted to that app specifically. An implicit broadcast is a broadcast that does not target a specific component within an app. For example, `ACTION_PACKAGE_REPLACED` is sent to all registered listeners across all apps, letting them know that some package on the device was replaced. Because the broadcast is implicit, it will not be delivered to manifest-registered receivers in apps that target Android 8.0 or higher. `ACTION_MY_PACKAGE_REPLACED` is also an implicit broadcast, but since it is sent only to the app whose package was replaced it will be delivered to manifest-registered receivers.</X.Uli>
                <X.Uli>Apps can continue to register for explicit broadcasts in their manifests.</X.Uli>
                <X.Uli>Apps can use `Context.registerReceiver()` at runtime to register a receiver for any broadcast, whether implicit or explicit.</X.Uli>
                <X.Uli>Broadcasts that require a signature permission are exempted from this restriction, since these broadcasts are only sent to apps that are signed with the same certificate, not to all the apps on the device.</X.Uli>
            </X.HighlightBlock>
            <X.H2>接收方动态注册</X.H2>
            <X.P>动态注册的`BroadcastReceiver`不受影响，可以接收到。</X.P>
            <X.H1>发送方使用显式Intent</X.H1>
            <X.H2>接收方静态注册</X.H2>
            <X.P>可以接收到。</X.P>
            <X.H2>接收方动态注册</X.H2>
            <X.P>这种情况并没有在文档中找到官方说明。这也是本文主要想记录的。</X.P>
            <X.P>在stackoverflow上有一些相关的回答，认为Android不支持这种机制：</X.P>
            <X.Uli>@[https://stackoverflow.com/questions/78899231/how-to-dynmically-register-a-explicit-broadcast-from-a-foreground-service]@</X.Uli>
            <X.Uli>@[https://stackoverflow.com/questions/14810134/explicitly-addressing-an-intent-to-a-dynamically-registered-broadcast-receiver]@</X.Uli>
            <X.P>以及这篇2013年的博客，解释为由于动态注册绑定的是一个实例，并不能通过显式`Intent`中指定的具体`BroadcastReceiver`类名匹配到：</X.P>
            <X.Uli>@[https://onemikro2nd.blogspot.com/2013/09/darker-corners-of-android.html]@</X.Uli>
            <X.Divider />
            <X.P>经测试，目前这种情况仍然是接收不到的。</X.P>
        </>
    );
}
