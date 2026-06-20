<!-- @xprops background="red" -->

> 先说结论：目前Android不支持向动态注册的广播接收器发送显式`Intent`。

Android中可以通过隐式`Intent`：`intent.setAction(action)`，或显式`Intent`：`intent.setClassName(packageName, className)`来发送一个广播；同时一个广播接收器`BroadcastReceiver`可以静态注册（在`AndroidManifest.xml`中）或动态注册（通过`registerReceiver`）。

这样接收方和发送方一共有`4`种组合方式，下面逐一讨论。

## 发送方使用隐式Intent

### 接收方静态注册

Android 8.0以后将不能在`AndroidManifest.xml`中静态注册大部分接收隐式`Intent`的`BroadcastReceiver`了。这里的"大部分"排除了一些[例外情况](https://developer.android.com/develop/background-work/background-tasks/broadcasts/broadcast-exceptions)，但对于自定义广播来说，基本上可以认为不能用隐式`Intent`去触发静态注册的`BroadcastReceiver`了。

参考[https://developer.android.com/develop/background-work/background-tasks/broadcasts](https://developer.android.com/develop/background-work/background-tasks/broadcasts)：

<!-- @xprops background="gray" -->

> #### Android 8.0
>
> Beginning with Android 8.0 (API level 26), the system imposes additional restrictions on manifest-declared receivers. If your app targets Android 8.0 or higher, you cannot use the manifest to declare a receiver for most implicit broadcasts (broadcasts that don't target your app specifically). You can still use a context-registered receiver when the user is actively using your app.

以及[https://developer.android.com/about/versions/oreo/background#broadcasts](https://developer.android.com/about/versions/oreo/background#broadcasts)：

<!-- @xprops background="gray" -->

> #### Broadcast Limitations
>
> - Apps that target Android 8.0 or higher can no longer register broadcast receivers for implicit broadcasts in their manifest unless the broadcast is restricted to that app specifically. An implicit broadcast is a broadcast that does not target a specific component within an app. For example, `ACTION_PACKAGE_REPLACED` is sent to all registered listeners across all apps, letting them know that some package on the device was replaced. Because the broadcast is implicit, it will not be delivered to manifest-registered receivers in apps that target Android 8.0 or higher. `ACTION_MY_PACKAGE_REPLACED` is also an implicit broadcast, but since it is sent only to the app whose package was replaced it will be delivered to manifest-registered receivers.
> - Apps can continue to register for explicit broadcasts in their manifests.
> - Apps can use `Context.registerReceiver()` at runtime to register a receiver for any broadcast, whether implicit or explicit.
> - Broadcasts that require a signature permission are exempted from this restriction, since these broadcasts are only sent to apps that are signed with the same certificate, not to all the apps on the device.

### 接收方动态注册

动态注册的`BroadcastReceiver`不受影响，可以接收到。

## 发送方使用显式Intent

### 接收方静态注册

可以接收到。

### 接收方动态注册

这种情况并没有在文档中找到官方说明。这也是本文主要想记录的。

在stackoverflow上有一些相关的回答，认为Android不支持这种机制：

- [https://stackoverflow.com/questions/78899231/how-to-dynmically-register-a-explicit-broadcast-from-a-foreground-service](https://stackoverflow.com/questions/78899231/how-to-dynmically-register-a-explicit-broadcast-from-a-foreground-service)
- [https://stackoverflow.com/questions/14810134/explicitly-addressing-an-intent-to-a-dynamically-registered-broadcast-receiver](https://stackoverflow.com/questions/14810134/explicitly-addressing-an-intent-to-a-dynamically-registered-broadcast-receiver)

以及这篇2013年的博客，解释为由于动态注册绑定的是一个实例，并不能通过显式`Intent`中指定的具体`BroadcastReceiver`类名匹配到：

- [https://onemikro2nd.blogspot.com/2013/09/darker-corners-of-android.html](https://onemikro2nd.blogspot.com/2013/09/darker-corners-of-android.html)

---

经测试，目前这种情况仍然是接收不到的。
