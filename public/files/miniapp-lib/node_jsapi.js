if (typeof process != "undefined") {
  let require = process.require;
  let localGetNativeBufferId = getNativeBufferId;
  let localGetNativeBuffer = getNativeBuffer;
  let localSetNativeBuffer = setNativeBuffer;
  let nativeConsole =
    typeof global.NativeGlobal !== "undefined" && global.NativeGlobal.console
      ? global.NativeGlobal.console
      : global.console;
  let orginConsoleLog = nativeConsole.log;
  let orginConsoleInfo = nativeConsole.info;
  let orginConsoleWarn = nativeConsole.warn;
  let orginConsoleError = nativeConsole.error;
  let console = {};
  console.log = orginConsoleLog;
  console.info = orginConsoleInfo;
  console.warn = orginConsoleWarn;
  console.error = orginConsoleError;
  if (typeof global.ProfileGlobal !== "undefined" && global.ProfileGlobal) {
    global.ProfileGlobal.performanceNow = performance.now.bind(performance);
    global.ProfileGlobal.timeOrigin = performance.timeOrigin;
  }
  //;const { writeHeapSnapshot } = require('v8');
  //dumpHeapSnapshot = function(path) {
  //    console.log('dumpHeapSnapshot :' + path);
  //    writeHeapSnapshot(path);
  //}

  !(function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return (e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports);
    }
    ((n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return (n.d(t, "a", t), t);
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 45)));
  })([
    function (e, t) {
      e.exports = require("fs");
    },
    function (e, t) {
      ((t.overloadMethod = function (e, t, n) {
        var r = e[t];
        e[t] = function () {
          return n.length == arguments.length
            ? n.apply(this, arguments)
            : "function" == typeof r
              ? r.apply(this, arguments)
              : void 0;
        };
      }),
        (t.defGet = function (e, t, n) {
          return e && void 0 !== e[t] ? e[t] : n;
        }),
        (t.importantLog = function (e) {
          (NativeGlobal.log && NativeGlobal.log([{ level: 2, logs: e }]),
            console.log(e));
        }),
        (t.randomString = function (e) {
          for (
            var t = "",
              n =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
              r = n.length,
              o = 0;
            o < e;
            o++
          )
            t += n.charAt(Math.floor(Math.random() * r));
          return t;
        }));
    },
    function (e, t) {
      e.exports = require("path");
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.FS_OPERATION_NOT_PERMITTED = 1300001;
      t.FS_NO_SUCH_FILE_OR_DIR = 1300002;
      t.FS_IO_ERROR = 1300005;
      t.FS_BAD_FD = 1300009;
      t.FS_PERMISSION_DENIED = 1300013;
      t.FS_NOT_DIR = 1300020;
      t.FS_IS_DIR = 1300021;
      t.FS_INVALID_ARG = 1300022;
      t.FS_SYSTEM_ERROR = 1300201;
      t.FS_STORAGE_LIMIT_EXCEEDED = 1300202;
      t.FS_ENCODING_ERROR = 1300203;
      t.FS_SD_CARD_NOT_MOUNTED = 1300300;
      t.FS_EXT_ERROR = 1300301;
      t.FS_PERMISSION_DENIED_PATH = 1301e3;
      t.FS_WRITE_EMPTY_DATA = 1301002;
      t.FS_ILLEGAL_OPERATION_ON_DIR = 1301003;
      t.FS_ILLEGAL_OPERATION_ON_PACKAGE_DIR = 1301004;
      t.FS_FILE_ALREADY_EXIST = 1300017;
      t.FS_LENGTH_OUT_OF_RANGE = 1301006;
      t.FS_OFFSET_OUT_OF_RANGE = 1301007;
      t.FS_FD_INVALID_TYPE = 1301008;
      t.FS_POSITION_OUT_OF_RANGE = 1301009;
      t.FS_STORE_DIR_IS_EMPTY = 1301100;
      t.FS_UNZIP_OPEN_FILE_FAIL = 1301102;
      t.FS_UNZIP_ENTRY_FAIL = 1301103;
      t.FS_UNZIP_FAIL = 1301104;
      t.FS_DECOMPRESS_FAIL = 1301111;
      t.FS_PERMISSION_DENIED_FD = 1302001;
      t.FS_FD_LIMIT_EXCEEDED = 1302002;
      t.FS_INVALID_FLAG = 1302003;
      t.FS_OPEN_WITH_FLAG_FAIL = 1302004;
      t.FS_ARRAY_BUFFER_NOT_EXIST = 1302005;
      t.FS_ARRAY_BUFFER_FORBID_WRITE = 1302100;
      t.NATIVE_BUFFER_EXCEED_SIZE_LIMIT = 2;
      t.ExpError = class {
        constructor(e, t) {
          ((this.message = e), (this.errno = t));
        }
      };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(1).defGet,
        i = n(2),
        c = n(22),
        s = (n(13), n(15)),
        a = n(1),
        u = (n(19), n(3)),
        l = 13e5,
        f = Object.freeze({
          access: 1,
          accessSync: 1,
          readdir: 1,
          readdirSync: 1,
          readFile: 1,
          readFileSync: 1,
          open: 1,
          openSync: 1,
          close: 1,
          closeSync: 1,
          read: 1,
          readSync: 1,
          fstat: 1,
          fstatSync: 1,
        });
      function p(e, t, n = {}, r = null, o = !0) {
        if (!t) return e("ok", 0, n, o);
        console.error("error occurs:" + t.message);
        var i = t.message;
        void 0 !== t.code && (i = t.message.replace(t.code + ": ", ""));
        var c = Math.abs(t.errno);
        return (c < l && (c += l), e("fail " + i, c, n, o));
      }
      ((t.processCallback = p),
        (t.processCallbackNoJsonStr = function (e, t, n = {}, r = null) {
          return p(e, t, n, r, !1);
        }),
        (t.filePathLogic = function (e, t, n = null, r = !1) {
          let i;
          if (
            (n
              ? (i = o(t, n, null))
              : ((i = o(t, "filePath", null)) || (i = o(t, "dirPath", null)),
                i || (i = o(t, "path", null))),
            !i)
          )
            return F(null, "invalid path", u.FS_NO_SUCH_FILE_OR_DIR, null, i);
          var c = h(e, i);
          if (null == c || c.type < 0)
            throw new Error("not node js file system!path:" + i);
          var s = void 0;
          if (
            (1 == c.type
              ? (s = v(e, i, c))
              : 0 == c.type && (s = k(e, i, c, r)),
            s)
          )
            return s;
          var a = new Error("nodejs not support this");
          throw ((a.no_log = !0), a);
        }));
      const d = function (e, t) {
        return (
          !(null == t || "" == t || 0 == e.length || t.length > e.length) &&
          e.substr(0, t.length) == t
        );
      };
      var h = function (e, t) {
        var n = S(e);
        for (var r in n)
          if (d(t, r)) {
            var o = n[r];
            o.type;
            return ((o.prefix = r), o);
          }
        return null;
      };
      ((t.getFileConfig = h),
        (t.fileDestPathLogic = function (e, t, n = null) {
          let r;
          r = o(t, n || "destPath", null);
          var i = h(e, r);
          if (null == i || i.type < 0)
            throw new Error("not node js file system! path:" + r);
          var c = v(e, r, i);
          return (
            c ||
            F(
              null,
              "permission denied, open " + r,
              u.FS_PERMISSION_DENIED_PATH,
              null,
            )
          );
        }));
      var y = null;
      t.triggerCacheFsConfig = function (e) {
        null == y && (y = o(e, "fsData", null));
      };
      var S = function (e) {
          if (y) return y;
          if (!(y = c.getFSConfig(e))) throw new Error("getFSConfig null");
          return y;
        },
        m = null,
        _ = function (e) {
          if (m) return m;
          m = {};
          let t = S(e);
          for (var n in t) {
            var r = t[n];
            m[r.rootPath] = r.quota;
          }
          return m;
        };
      new Set();
      ((t.quotaControl = function (e, t, n) {
        if (!t) return null;
        var r = _(e)[t];
        if (!r) return null;
        var o = -1;
        if (e.enableSpaceStatics()) {
          var i = Date.now(),
            c = e.getFileSysFolderSizeSync(t);
          (console.log(
            "quotaControl getFileSysFolderSizeSync rootPath:" +
              t +
              ", currentSize:" +
              c.size +
              ", cost:" +
              (Date.now() - i),
          ),
            (o = c.size));
        }
        if (
          (-1 == o &&
            ((i = Date.now()),
            (o = s.getFolderSizeSync(t)),
            console.log(
              "quotaControl getFolderSizeSync rootPath:" +
                t +
                ", currentSize:" +
                o +
                ", cost:" +
                (Date.now() - i),
            )),
          n + o > r)
        ) {
          if (e.enableSpaceStatics()) {
            var a = Date.now(),
              u = e.markFileSizeDirtySync(t).size,
              l = Date.now() - a;
            u != o &&
              (console.log(
                "quotaControl reset size, real size = " +
                  u +
                  " current size = " +
                  o +
                  " costTime = " +
                  l,
              ),
              e.reportQuotaControl(o, u, t, n, l),
              (o = u));
          }
          if (n + o > r)
            return (
              console.info(
                "quotaControl max currentSize:" +
                  o +
                  ", plusSize:" +
                  n +
                  ", path:" +
                  t,
              ),
              "the maximum size of the file storage limit is exceeded"
            );
        }
        return null;
      }),
        (t.quotaControlAsync = function (e, t, n, r) {
          if (t) {
            var o = _(e)[t];
            if (o) {
              var i = function (i) {
                  if (n + i > o) {
                    if (e.enableSpaceStatics()) {
                      var c = Date.now(),
                        s = e.markFileSizeDirtySync(t).size,
                        u = Date.now() - c;
                      s != i &&
                        (console.log(
                          "quotaControl reset size, real size = " +
                            s +
                            " current size = " +
                            i +
                            " costTime = " +
                            u,
                        ),
                        e.reportQuotaControl(i, s, t, n, u),
                        (i = s));
                    }
                    n + i > o
                      ? (a.importantLog(
                          "quotaControl max currentSize:" +
                            i +
                            ", plusSize:" +
                            n +
                            ", path:" +
                            t,
                        ),
                        r(
                          "the maximum size of the file storage limit is exceeded",
                        ))
                      : r(null);
                  } else r(null);
                },
                c = function (e, t) {
                  (Date.now(),
                    s
                      .getFolderSize(e)
                      .then((e) => {
                        i(e);
                      })
                      .catch(function (e) {
                        (a.importantLog("hy: exception in quota control"),
                          a.importantLog(e),
                          t("exception when quota control!"));
                      }));
                };
              if (e.enableSpaceStatics()) {
                Date.now();
                e.getFileSysFolderSizeAsync(t, (e) => {
                  -1 != e.size ? i(e.size) : c(t, r);
                });
              } else c(t, r);
            } else r(null);
          } else r(null);
        }));
      var E = !1,
        g = !1,
        v = function (e, t, n, o = !0) {
          var c,
            s = n.rootPath,
            a = n.prefix;
          if (
            (a == t
              ? (c = "")
              : (a.endsWith("/") || (a += "/"), (c = t.replace(a, ""))),
            null == c || !s)
          )
            return null;
          if (!g) {
            var l = !1,
              f = !1;
            if (r.existsSync(s)) l = !0;
            else
              try {
                (console.log(
                  "nonFlatternedLogic mkdirsSync recursively for:" + s,
                ),
                  r.mkdirSync(s, { recursive: !0 }),
                  (l = !0));
              } catch (e) {
                return (
                  console.error("nonFlatternedLogic mkdirsSync error:" + e),
                  F(null, "fs not mounted", u.FS_SD_CARD_NOT_MOUNTED, null, t)
                );
              }
            var p = i.join(s, "/.nomedia");
            if (r.existsSync(p)) f = !0;
            else
              try {
                (r.writeFileSync(p, ""), (f = !0));
              } catch (e) {
                console.error(
                  "nonFlatternedLogic touch noMediaPath error:" + e,
                );
              }
            l && f && (g = !0);
          }
          var h = i.join(s, c);
          return (
            (h = i.resolve(h)),
            d(h, s)
              ? F(h, null, null, s, t)
              : (console.warn("nonFlatternedLogic path not in my path:" + h),
                F(
                  null,
                  "permission denied",
                  u.FS_PERMISSION_DENIED_PATH,
                  null,
                  t,
                ))
          );
        },
        k = function (e, t, n, o) {
          if (
            !(function (e, t) {
              return !(void 0 === f[e] && !t);
            })(e.getApiName(), o)
          ) {
            return F(
              null,
              "permission denied, open " + t,
              u.FS_PERMISSION_DENIED,
              null,
              t,
            );
          }
          var c = n.rootPath,
            s = n.prefix,
            a = t.replace(s, ""),
            l = !1,
            p = !1;
          if (!E) {
            if (r.existsSync(c)) l = !0;
            else
              try {
                (console.log("FlatternedLogic mkdirsSync recursively for:" + c),
                  r.mkdirSync(c, { recursive: !0 }),
                  (l = !0));
              } catch (e) {
                return (
                  console.error("FlatternedLogic mkdirsSync error:" + e),
                  F(null, "fs not mounted", u.FS_SD_CARD_NOT_MOUNTED, null, t)
                );
              }
            var h = i.join(c, "/.nomedia");
            if (r.existsSync(h)) p = !0;
            else
              try {
                (r.writeFileSync(h, ""), (p = !0));
              } catch (e) {
                console.error(
                  "nonFlatternedLogic touch noMediaPath error:" + e,
                );
              }
            l && p && (E = !0);
          }
          a = a.replace(/\..+$/, "");
          var y = i.join(c, a);
          return (
            (y = i.resolve(y)),
            d(y, c)
              ? F(y, null, null, c, t)
              : (console.warn("nonFlatternedLogic path not in my path:" + y),
                F(null, "permission denied", u.FS_PERMISSION_DENIED, null, t))
          );
        };
      function F(e, t, n, r, o) {
        return { path: e, errMsg: t, errNo: n, rootPath: r, originPath: o };
      }
    },
    function (e, t, n) {
      var r,
        o,
        i = n(0),
        c = n(54),
        s = n(56),
        a = n(58),
        u = n(18);
      function l(e, t) {
        Object.defineProperty(e, r, {
          get: function () {
            return t;
          },
        });
      }
      "function" == typeof Symbol && "function" == typeof Symbol.for
        ? ((r = Symbol.for("graceful-fs.queue")),
          (o = Symbol.for("graceful-fs.previous")))
        : ((r = "___graceful-fs.queue"), (o = "___graceful-fs.previous"));
      var f,
        p = function () {};
      if (
        (u.debuglog
          ? (p = u.debuglog("gfs4"))
          : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
            (p = function () {
              var e = u.format.apply(u, arguments);
              ((e = "GFS4: " + e.split(/\n/).join("\nGFS4: ")),
                console.error(e));
            }),
        !i[r])
      ) {
        var d = global[r] || [];
        (l(i, d),
          (i.close = (function (e) {
            function t(t, n) {
              return e.call(i, t, function (e) {
                (e || S(), "function" == typeof n && n.apply(this, arguments));
              });
            }
            return (Object.defineProperty(t, o, { value: e }), t);
          })(i.close)),
          (i.closeSync = (function (e) {
            function t(t) {
              (e.apply(i, arguments), S());
            }
            return (Object.defineProperty(t, o, { value: e }), t);
          })(i.closeSync)),
          /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
            process.on("exit", function () {
              (p(i[r]), n(24).equal(i[r].length, 0));
            }));
      }
      function h(e) {
        (c(e),
          (e.gracefulify = h),
          (e.createReadStream = function (t, n) {
            return new e.ReadStream(t, n);
          }),
          (e.createWriteStream = function (t, n) {
            return new e.WriteStream(t, n);
          }));
        var t = e.readFile;
        e.readFile = function (e, n, r) {
          "function" == typeof n && ((r = n), (n = null));
          return (function e(n, r, o, i) {
            return t(n, r, function (t) {
              !t || ("EMFILE" !== t.code && "ENFILE" !== t.code)
                ? "function" == typeof o && o.apply(this, arguments)
                : y([e, [n, r, o], t, i || Date.now(), Date.now()]);
            });
          })(e, n, r);
        };
        var n = e.writeFile;
        e.writeFile = function (e, t, r, o) {
          "function" == typeof r && ((o = r), (r = null));
          return (function e(t, r, o, i, c) {
            return n(t, r, o, function (n) {
              !n || ("EMFILE" !== n.code && "ENFILE" !== n.code)
                ? "function" == typeof i && i.apply(this, arguments)
                : y([e, [t, r, o, i], n, c || Date.now(), Date.now()]);
            });
          })(e, t, r, o);
        };
        var r = e.appendFile;
        r &&
          (e.appendFile = function (e, t, n, o) {
            "function" == typeof n && ((o = n), (n = null));
            return (function e(t, n, o, i, c) {
              return r(t, n, o, function (r) {
                !r || ("EMFILE" !== r.code && "ENFILE" !== r.code)
                  ? "function" == typeof i && i.apply(this, arguments)
                  : y([e, [t, n, o, i], r, c || Date.now(), Date.now()]);
              });
            })(e, t, n, o);
          });
        var o = e.copyFile;
        o &&
          (e.copyFile = function (e, t, n, r) {
            "function" == typeof n && ((r = n), (n = 0));
            return (function e(t, n, r, i, c) {
              return o(t, n, r, function (o) {
                !o || ("EMFILE" !== o.code && "ENFILE" !== o.code)
                  ? "function" == typeof i && i.apply(this, arguments)
                  : y([e, [t, n, r, i], o, c || Date.now(), Date.now()]);
              });
            })(e, t, n, r);
          });
        var i = e.readdir;
        e.readdir = function (e, t, n) {
          "function" == typeof t && ((n = t), (t = null));
          var r = a.test(process.version)
            ? function (e, t, n, r) {
                return i(e, o(e, t, n, r));
              }
            : function (e, t, n, r) {
                return i(e, t, o(e, t, n, r));
              };
          return r(e, t, n);
          function o(e, t, n, o) {
            return function (i, c) {
              !i || ("EMFILE" !== i.code && "ENFILE" !== i.code)
                ? (c && c.sort && c.sort(),
                  "function" == typeof n && n.call(this, i, c))
                : y([r, [e, t, n], i, o || Date.now(), Date.now()]);
            };
          }
        };
        var a = /^v[0-5]\./;
        if ("v0.8" === process.version.substr(0, 4)) {
          var u = s(e);
          ((S = u.ReadStream), (m = u.WriteStream));
        }
        var l = e.ReadStream;
        l &&
          ((S.prototype = Object.create(l.prototype)),
          (S.prototype.open = function () {
            var e = this;
            E(e.path, e.flags, e.mode, function (t, n) {
              t
                ? (e.autoClose && e.destroy(), e.emit("error", t))
                : ((e.fd = n), e.emit("open", n), e.read());
            });
          }));
        var f = e.WriteStream;
        (f &&
          ((m.prototype = Object.create(f.prototype)),
          (m.prototype.open = function () {
            var e = this;
            E(e.path, e.flags, e.mode, function (t, n) {
              t
                ? (e.destroy(), e.emit("error", t))
                : ((e.fd = n), e.emit("open", n));
            });
          })),
          Object.defineProperty(e, "ReadStream", {
            get: function () {
              return S;
            },
            set: function (e) {
              S = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e, "WriteStream", {
            get: function () {
              return m;
            },
            set: function (e) {
              m = e;
            },
            enumerable: !0,
            configurable: !0,
          }));
        var p = S;
        Object.defineProperty(e, "FileReadStream", {
          get: function () {
            return p;
          },
          set: function (e) {
            p = e;
          },
          enumerable: !0,
          configurable: !0,
        });
        var d = m;
        function S(e, t) {
          return this instanceof S
            ? (l.apply(this, arguments), this)
            : S.apply(Object.create(S.prototype), arguments);
        }
        function m(e, t) {
          return this instanceof m
            ? (f.apply(this, arguments), this)
            : m.apply(Object.create(m.prototype), arguments);
        }
        Object.defineProperty(e, "FileWriteStream", {
          get: function () {
            return d;
          },
          set: function (e) {
            d = e;
          },
          enumerable: !0,
          configurable: !0,
        });
        var _ = e.open;
        function E(e, t, n, r) {
          return (
            "function" == typeof n && ((r = n), (n = null)),
            (function e(t, n, r, o, i) {
              return _(t, n, r, function (c, s) {
                !c || ("EMFILE" !== c.code && "ENFILE" !== c.code)
                  ? "function" == typeof o && o.apply(this, arguments)
                  : y([e, [t, n, r, o], c, i || Date.now(), Date.now()]);
              });
            })(e, t, n, r)
          );
        }
        return ((e.open = E), e);
      }
      function y(e) {
        (p("ENQUEUE", e[0].name, e[1]), i[r].push(e), m());
      }
      function S() {
        for (var e = Date.now(), t = 0; t < i[r].length; ++t)
          i[r][t].length > 2 && ((i[r][t][3] = e), (i[r][t][4] = e));
        m();
      }
      function m() {
        if ((clearTimeout(f), (f = void 0), 0 !== i[r].length)) {
          var e = i[r].shift(),
            t = e[0],
            n = e[1],
            o = e[2],
            c = e[3],
            s = e[4];
          if (void 0 === c) (p("RETRY", t.name, n), t.apply(null, n));
          else if (Date.now() - c >= 6e4) {
            p("TIMEOUT", t.name, n);
            var a = n.pop();
            "function" == typeof a && a.call(null, o);
          } else {
            var u = Date.now() - s,
              l = Math.max(s - c, 1);
            u >= Math.min(1.2 * l, 100)
              ? (p("RETRY", t.name, n), t.apply(null, n.concat([c])))
              : i[r].push(e);
          }
          void 0 === f && (f = setTimeout(m, 0));
        }
      }
      (global[r] || l(global, i[r]),
        (e.exports = h(a(i))),
        process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH &&
          !i.__patched &&
          ((e.exports = h(i)), (i.__patched = !0)));
    },
    function (e, t, n) {
      "use strict";
      ((t.fromCallback = function (e) {
        return Object.defineProperty(
          function () {
            if ("function" != typeof arguments[arguments.length - 1])
              return new Promise((t, n) => {
                ((arguments[arguments.length] = (e, r) => {
                  if (e) return n(e);
                  t(r);
                }),
                  arguments.length++,
                  e.apply(this, arguments));
              });
            e.apply(this, arguments);
          },
          "name",
          { value: e.name },
        );
      }),
        (t.fromPromise = function (e) {
          return Object.defineProperty(
            function () {
              const t = arguments[arguments.length - 1];
              if ("function" != typeof t) return e.apply(this, arguments);
              e.apply(this, arguments).then((e) => t(null, e), t);
            },
            "name",
            { value: e.name },
          );
        }));
    },
    function (e, t, n) {
      "use strict";
      const r = (0, n(6).fromCallback)(n(60)),
        o = n(61);
      e.exports = {
        mkdirs: r,
        mkdirsSync: o,
        mkdirp: r,
        mkdirpSync: o,
        ensureDir: r,
        ensureDirSync: o,
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.FS_OPERATION_NOT_PERMITTED = "operation not permitted";
      t.FS_NO_SUCH_FILE_OR_DIR = "no such file or directory";
      t.FS_IO_ERROR = "input/output error";
      t.FS_BAD_FD = "bad file descriptor";
      t.FS_PERMISSION_DENIED = "permission denied";
      t.FS_NOT_DIR = "not a directory";
      t.FS_IS_DIR = "is a directory";
      t.FS_INVALID_ARG = "invalid argument";
      t.FS_SYSTEM_ERROR = "system error";
      t.FS_STORAGE_LIMIT_EXCEEDED =
        "the maximum size of the file storage limit is exceeded";
      t.FS_ENCODING_ERROR = "encode error";
      t.FS_SD_CARD_NOT_MOUNTED = "sdcard not mounted";
      t.FS_EXT_ERROR = "unable to open as fileType";
      t.FS_PERMISSION_DENIED_PATH =
        "permission denied, cannot access file path";
      t.FS_WRITE_EMPTY_DATA = "data to write is empty";
      t.FS_ILLEGAL_OPERATION_ON_DIR = "illegal operation on a directory";
      t.FS_ILLEGAL_OPERATION_ON_PACKAGE_DIR =
        "illegal operation on a package directory";
      t.FS_FILE_ALREADY_EXIST = "file already exists";
      t.FS_LENGTH_OUT_OF_RANGE = "value of length is out of range";
      t.FS_OFFSET_OUT_OF_RANGE = "value of offset is out of range";
      t.FS_FD_INVALID_TYPE = "fd argument must be of type number";
      t.FS_POSITION_OUT_OF_RANGE = "position is out of range";
      t.FS_STORE_DIR_IS_EMPTY = "store directory is empty";
      t.FS_UNZIP_OPEN_FILE_FAIL = "unzip open file fail";
      t.FS_UNZIP_ENTRY_FAIL = "unzip entry fail";
      t.FS_UNZIP_FAIL = "unzip fail";
      t.FS_DECOMPRESS_FAIL = "brotli decompress fail";
      t.FS_PERMISSION_DENIED_FD =
        "permission denied, fd is writeonly or readonly";
      t.FS_FD_LIMIT_EXCEEDED = "exceed max concurrent fd limit";
      t.FS_INVALID_FLAG = "invalid flag";
      t.FS_OPEN_WITH_FLAG_FAIL = "permission denied when open using flag";
      t.FS_ARRAY_BUFFER_NOT_EXIST = "array buffer does not exist";
      t.FS_ARRAY_BUFFER_FORBID_WRITE = "array buffer is readonly";
      t.NATIVE_BUFFER_EXCEED_SIZE_LIMIT = "native buffer exceed size limit";
      t.originPathTransform = function (e, t, n) {
        return e
          ? (-1 != e.message.indexOf("no such file or directory")
              ? ((e.message = `no such file or directory, ${e.syscall} '${t}'`),
                n && (e.message += ` -> '${n}'`))
              : -1 != e.message.indexOf("illegal operation on a directory")
                ? (e.message = `illegal operation on a directory, ${e.syscall} '${t}'`)
                : -1 != e.message.indexOf("permission denied")
                  ? ((e.message = `permission denied, ${e.syscall} '${t}'`),
                    n && (e.message += ` -> '${n}'`))
                  : -1 != e.message.indexOf("file already exists")
                    ? (e.message = `file already exists, ${e.syscall} '${t}'`)
                    : -1 != e.message.indexOf("not a directory")
                      ? (e.message = `not a directory, ${e.syscall} '${t}'`)
                      : -1 != e.message.indexOf("operation not permitted") &&
                        (e.message = `operation not permitted, ${e.syscall} '${t}'`),
            e)
          : e;
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromPromise,
        o = n(23);
      e.exports = {
        pathExists: r(function (e) {
          return o
            .access(e)
            .then(() => !0)
            .catch(() => !1);
        }),
        pathExistsSync: o.existsSync,
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(0),
        o = n(15);
      var i = new Map(),
        c = new Map();
      e.exports = class {
        constructor(e) {
          ((this.counterMap = i),
            (this.lastSizeMap = c),
            (this.name = e),
            (this.TAG = `WxaFsFileSizeStatistics[${e}]  `));
        }
        markStart(e) {
          if (void 0 === this.lastSizeMap.get(e)) {
            var t = this.getFileOrDirSize(e);
            this.lastSizeMap.set(e, t);
          }
          var n = this.counterMap.get(e);
          void 0 === n
            ? ((n = 1), this.counterMap.set(e, n))
            : this.counterMap.set(e, ++n);
        }
        markDone(e, t) {
          var n = this.counterMap.get(t);
          if (n > 0)
            if (0 == --n) {
              this.counterMap.delete(t);
              var r = this.getFileOrDirSize(t),
                o = this.lastSizeMap.get(t);
              (r - o != 0 &&
                e.postFileOpSizeChangedInfo({
                  path: t,
                  event: this.name,
                  sizeDiff: r - o,
                }),
                this.lastSizeMap.delete(t));
            } else this.counterMap.set(t, n);
        }
        getFileOrDirSize(e) {
          try {
            var t = r.statSync(e);
            return t.isDirectory() ? o.getFolderSizeSync(e) : t.size;
          } catch (e) {
            return 0;
          }
        }
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(0),
        { randomString: o } = n(1),
        i = n(12),
        c = n(3);
      class s {
        constructor() {
          ((this.fdMap = new Map()), (this.MAX_FD_COUNT = 20));
        }
        static getInstance() {
          return (s.instance || (s.instance = new s()), s.instance);
        }
        storeAndGetMappingId(e, t, n) {
          for (var r in this.fdMap) if (this.fdMap.get(r).fd == e) return r;
          if (this.fdMap.size >= this.MAX_FD_COUNT) return;
          let i = o(16);
          return (this.fdMap.set(i, { fd: e, path: t, rootPath: n }), i);
        }
        removeAndClose(e, t) {
          let n = this.fdMap.get(e);
          n
            ? r.close(n.fd, (n) => {
                (t(n), this.fdMap.delete(e));
              })
            : t(new c.ExpError(i.bad_file_descriptor, c.FS_BAD_FD));
        }
        removeAndCloseSync(e) {
          let t = this.fdMap.get(e);
          if (!t) throw new c.ExpError(i.bad_file_descriptor, c.FS_BAD_FD);
          (r.closeSync(t.fd), this.fdMap.delete(e));
        }
        clearAll() {
          console.log(`[clearAll] before size:${this.fdMap.size}`);
          var e = this.fdMap;
          (new Map(this.fdMap).forEach(function (t, n, o) {
            try {
              (r.closeSync(t.fd), e.delete(n));
            } catch (e) {
              console.log(`[clearAll] error:${e}`);
            }
          }),
            console.log(`[clearAll] after size:${this.fdMap.size}`));
        }
        getFd(e) {
          return this.getFdInfo(e).fd;
        }
        getFdInfo(e) {
          if (!e) {
            let e = "id is undefined";
            throw (console.log(`[getFd] ${e}`), new c.ExpError(e, c.FS_BAD_FD));
          }
          let t = this.fdMap.get(e);
          if (!t) {
            let e = `can not find fd with id${t.id}`;
            throw (console.log(`[getFd] ${e}`), new c.ExpError(e, c.FS_BAD_FD));
          }
          return t;
        }
        hasFdId(e) {
          return this.fdMap.has(e);
        }
      }
      e.exports = s;
    },
    function (e, t) {
      e.exports = {
        bad_file_descriptor: "bad file descriptor",
        no_such_file_or_directory: function (e) {
          return `fail no such file or directory "${e}"`;
        },
        exceed_max_concurrent_fd_limit: "exceed max concurrent fd limit",
        invalid_argument: "invalid argument",
        array_buffer_not_exist: "array buffer does not exist",
        fd_argument_type_number: "fd argument must be of type number",
      };
    },
    function (e, t) {
      e.exports = Object.freeze({
        REQUIRE_USER_AUTH: 1,
        GET_APP_RUNNING_STATE: 2,
        REPORT_ID_KEY: 3,
        XLOG: 4,
        SHOW_JS_API_BAN_ALERT: 5,
        IS_LAN_IP: 6,
        GET_FULL_PATH_OF_FLAT_FS_SYNC: 7,
        REPORT_KV: 8,
        POST_FILE_OP_SIZE_CHANGE_INFO: 9,
        GET_FILE_SYS_FOLDER_SIZE: 10,
        GET_FILE_SYS_FOLDER_SIZE_SYNC: 11,
        MARK_FILE_SIZE_DIRTY: 12,
      });
    },
    function (e, t) {
      ((t.AppRunningState = Object.freeze({
        FOREGROUND: 0,
        BACKGROUND: 1,
        SUSPEND: 2,
        DESTROYED: 3,
      })),
        (t.NetWork = Object.freeze({
          CLOSE_CODE_DEFAULT: 1e3,
          WEB_SOCKET_TIMEOUT_DEFAULT: 6e4,
          BASE_URL_PROTOCOL_HOST: "servicewechat.com",
        })),
        (t.HttpSetting = Object.freeze({
          MODE_AS_BLACK_LIST: 1,
          MODE_AS_WHITE_LIST: 2,
        })),
        (t.NetWorkApis = Object.freeze(["createSocketTask"])),
        (t.ApiCtrlIndexHardCodePass = -2));
    },
    function (e, t, n) {
      const r = n(2),
        o = n(0);
      var i = function (e) {
        var t = 0;
        try {
          var n = o.statSync(e);
          if (n.isFile()) return n.size;
          for (var c = o.readdirSync(e), s = c.length, a = 0; a < s; a++) {
            var u = r.join(e, c[a]);
            t += i(u);
          }
          return t;
        } catch (e) {
          return (console.error("getFolderSizeSync error:" + e.message), t);
        }
      };
      ((t.getFolderSizeSync = i),
        (t.getFolderSize = async function e(t) {
          const n = await (function (e) {
            return new Promise(function (t, n) {
              o.lstat(e, function (e, r) {
                (e && (-2 == e.errno ? t(null) : n(e)), t(r));
              });
            });
          })(t);
          return n
            ? n.isFile()
              ? n.size
              : (function (e) {
                  return new Promise(function (t, n) {
                    o.readdir(e, function (e, r) {
                      if (e) {
                        if (-2 != e.errno) return n(e);
                        t([]);
                      }
                      t(r);
                    });
                  });
                })(t)
                  .then(function (n) {
                    var o = n
                      .map(function (e) {
                        return r.join(t, e);
                      })
                      .map(e);
                    return Promise.all(o);
                  })
                  .then(function (e) {
                    var t = 0;
                    return (
                      e.forEach(function (e) {
                        t += e;
                      }),
                      t
                    );
                  })
            : 0;
        }),
        (t.dataByteLength = function (e, t) {
          return Buffer.isBuffer(e) ? e.length : Buffer.byteLength(e, t);
        }));
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(65);
      e.exports = { remove: r(o), removeSync: o.sync };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(12),
        c = n(1).defGet,
        s = n(11),
        a = n(10),
        u = n(3);
      var l = new a("ftruncate"),
        f = function (e, t) {
          if (e)
            return (
              console.log(`error=${e.message}`),
              -1 !=
              e.message.indexOf('The "fd" argument must be of type number')
                ? new u.ExpError(
                    i.fd_argument_type_number,
                    u.FS_FD_INVALID_TYPE,
                  )
                : -1 != e.message.indexOf("bad file descriptor")
                  ? new u.ExpError(i.bad_file_descriptor, u.FS_BAD_FD)
                  : -1 != e.message.indexOf("no such file or directory")
                    ? new u.ExpError(
                        i.no_such_file_or_directory(t),
                        u.FS_NO_SUCH_FILE_OR_DIR,
                      )
                    : -1 != e.message.indexOf("invalid argument")
                      ? new u.ExpError(i.invalid_argument, u.FS_INVALID_ARG)
                      : new u.ExpError(e.message, e.errno)
            );
        };
      ((t.ftruncate = function (e, t, n) {
        const a = n ? e.syncReturn : e.callback;
        var p,
          d = c(t, "fd", void 0),
          h = c(t, "length", null);
        console.log(`truncate  fd=${d}   length=${h}`);
        try {
          d = (p = s.getInstance().getFdInfo(d)).fd;
        } catch (e) {
          return a("fail " + i.bad_file_descriptor, u.FS_BAD_FD);
        }
        if ((l.markStart(p.path), n))
          try {
            return (r.ftruncateSync(d, h), o.processCallbackNoJsonStr(a));
          } catch (e) {
            return o.processCallbackNoJsonStr(a, f(e));
          } finally {
            l.markDone(e, p.path);
          }
        else
          r.ftruncate(
            d,
            h,
            (t) => (l.markDone(e, p.path), o.processCallback(a, f(t))),
          );
      }),
        (t.truncate = function (e, t, n) {
          const i = n ? e.syncReturn : e.callback;
          var s = o.filePathLogic(e, t),
            a = s.path;
          if (!a)
            return (
              console.error("readFile error:" + s.errMsg),
              i("fail " + s.errMsg, s.errNo)
            );
          var u = c(t, "length", null);
          if ((l.markStart(a), n))
            try {
              return (r.truncateSync(a, u), o.processCallbackNoJsonStr(i));
            } catch (e) {
              return (
                console.log(`error=${e}`),
                o.processCallbackNoJsonStr(i, f(e, s.originPath))
              );
            } finally {
              l.markDone(e, a);
            }
          else
            r.truncate(
              a,
              u,
              (t) => (
                l.markDone(e, a),
                o.processCallback(i, f(t, s.originPath))
              ),
            );
        }));
    },
    function (e, t) {
      e.exports = require("util");
    },
    function (e, t, n) {
      "use strict";
      e.exports = Object.assign(
        {},
        n(23),
        n(25),
        n(29),
        n(64),
        n(66),
        n(72),
        n(7),
        n(76),
        n(77),
        n(78),
        n(9),
        n(16),
      );
      const r = n(0);
      Object.getOwnPropertyDescriptor(r, "promises") &&
        Object.defineProperty(e.exports, "promises", { get: () => r.promises });
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(73);
      e.exports = {
        readJson: r(o.readFile),
        readJsonSync: o.readFileSync,
        writeJson: r(o.writeFile),
        writeJsonSync: o.writeFileSync,
      };
    },
    function (e, t, n) {
      const r = n(22),
        o = n(1).defGet;
      var i = n(51);
      ((t.wrapReqData = function (e, t) {
        if (!t) return !0;
        const n = r.getNativeBufferConfig(e);
        var i = t[n.outKey];
        if (!i) return !0;
        delete t[n.outKey];
        var c,
          s,
          a,
          u,
          l,
          f = 0;
        for (c = 0; c < i.length; c++)
          (s = i[c]) &&
            (a = s[n.itemKey]) &&
            -1 != (u = o(s, n.itemID, -1)) &&
            ((l = localGetNativeBuffer(u))
              ? ((t[a] = l), (f += l.byteLength))
              : console.warn("wrapDataFromJS getNativeBuffer null. id:" + u));
        return (
          !(f > n.nativeBufferSizeLimitByte) ||
          (console.warn(
            "wrapReqData oversize:" +
              f +
              ", limit:" +
              n.nativeBufferSizeLimitByte,
          ),
          e.callback(
            "fail:convert native buffer parameter fail. native buffer exceed size limit.",
          ),
          !1)
        );
      }),
        (t.wrapResultData = function (e, t) {
          if (!t) return !0;
          const n = r.getNativeBufferConfig(e);
          var o,
            c,
            s,
            a = 0,
            u = !1,
            l = [];
          for (var f in t)
            if (
              ((o = t[f]),
              (s = Buffer.isBuffer(o)),
              o &&
                (ArrayBuffer.isView(o) || s) &&
                (s && (o = i(o)), -1 != (c = localGetNativeBufferId())))
            ) {
              var p = {};
              ((p[n.itemKey] = f),
                localSetNativeBuffer(c, o),
                (p[n.itemID] = c),
                (a += o.byteLength),
                delete t[f],
                l.push(p),
                (u = !0));
            }
          return a > n.nativeBufferSizeLimitByte
            ? (console.warn(
                "wrapResultData oversize:" +
                  a +
                  ", limit:" +
                  n.nativeBufferSizeLimitByte,
              ),
              e.callback(
                "fail:convert native buffer parameter fail. native buffer exceed size limit.",
              ),
              !1)
            : (u && (t[n.outKey] = l), !0);
        }));
    },
    function (e, t, n) {
      const r = n(14),
        o = n(1).defGet;
      ((t.getMaxWebsocketConnect = function (e) {
        return o(i(e), "maxWebsocketConcurrent", 2);
      }),
        (t.getSocketDomains = function (e) {
          return o(i(e), "socketDomains", []);
        }),
        (t.getWebsocketSkipPortCheck = function (e) {
          return o(i(e), "websocketSkipPortCheck", !1);
        }),
        (t.getWebSocketTimeout = function (e) {
          return o(
            i(e),
            "websocketTimeoutMS",
            r.NetWork.WEB_SOCKET_TIMEOUT_DEFAULT,
          );
        }),
        (t.getHeaderFilterMode = function (e) {
          return o(i(e), "headerFilterMode", 0);
        }),
        (t.getBlacklistHeaders = function (e) {
          return o(i(e), "blacklistHeaders", []);
        }),
        (t.getWhitelistHeaders = function (e) {
          return o(i(e), "whitelistHeaders", []);
        }),
        (t.getReferer = function (e) {
          return o(i(e), "referer", "");
        }),
        (t.getUserAgentString = function (e) {
          return o(i(e), "userAgentString", "");
        }),
        (t.getCanSkipCheckDomainsByArg = function (e) {
          return o(i(e), "canSkipCheckDomainsByArg", !1);
        }),
        (t.getShouldCheckDomains = function (e) {
          return o(i(e), "shouldCheckDomains", !1);
        }));
      var i = function (e) {
        return o(e.getWxaData(), "networkConfig", null);
      };
      ((t.getNativeBufferConfig = function (e) {
        return o(e.getWxaData(), "nativeBufferConfig", {
          outKey: "__nativeBuffers__",
          itemKey: "key",
          itemID: "id",
          itemBase64: "base64",
          nativeBufferSizeLimitByte: 2147483647,
        });
      }),
        (t.getFSConfig = function (e) {
          return o(e.getWxaData(), "fsData", null);
        }));
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(5),
        i = [
          "access",
          "appendFile",
          "chmod",
          "chown",
          "close",
          "copyFile",
          "fchmod",
          "fchown",
          "fdatasync",
          "fstat",
          "fsync",
          "ftruncate",
          "futimes",
          "lchown",
          "lchmod",
          "link",
          "lstat",
          "mkdir",
          "mkdtemp",
          "open",
          "readFile",
          "readdir",
          "readlink",
          "realpath",
          "rename",
          "rmdir",
          "stat",
          "symlink",
          "truncate",
          "unlink",
          "utimes",
          "writeFile",
        ].filter((e) => "function" == typeof o[e]);
      (Object.keys(o).forEach((e) => {
        "promises" !== e && (t[e] = o[e]);
      }),
        i.forEach((e) => {
          t[e] = r(o[e]);
        }),
        (t.exists = function (e, t) {
          return "function" == typeof t
            ? o.exists(e, t)
            : new Promise((t) => o.exists(e, t));
        }),
        (t.read = function (e, t, n, r, i, c) {
          return "function" == typeof c
            ? o.read(e, t, n, r, i, c)
            : new Promise((c, s) => {
                o.read(e, t, n, r, i, (e, t, n) => {
                  if (e) return s(e);
                  c({ bytesRead: t, buffer: n });
                });
              });
        }),
        (t.write = function (e, t, ...n) {
          return "function" == typeof n[n.length - 1]
            ? o.write(e, t, ...n)
            : new Promise((r, i) => {
                o.write(e, t, ...n, (e, t, n) => {
                  if (e) return i(e);
                  r({ bytesWritten: t, buffer: n });
                });
              });
        }));
    },
    function (e, t) {
      e.exports = require("assert");
    },
    function (e, t, n) {
      "use strict";
      e.exports = { copySync: n(59) };
    },
    function (e, t, n) {
      "use strict";
      const r = n(2);
      function o(e) {
        return (e = r.normalize(r.resolve(e)).split(r.sep)).length > 0
          ? e[0]
          : null;
      }
      const i = /[<>:"|?*]/;
      e.exports = {
        getRootPath: o,
        invalidWin32Path: function (e) {
          const t = o(e);
          return ((e = e.replace(t, "")), i.test(e));
        },
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(5),
        o = n(62),
        i = n(2);
      e.exports = {
        hasMillisRes: function (e) {
          let t = i.join(
            "millis-test" +
              Date.now().toString() +
              Math.random().toString().slice(2),
          );
          t = i.join(o.tmpdir(), t);
          const n = new Date(1435410243862);
          r.writeFile(
            t,
            "https://github.com/jprichardson/node-fs-extra/pull/141",
            (o) => {
              if (o) return e(o);
              r.open(t, "r+", (o, i) => {
                if (o) return e(o);
                r.futimes(i, n, n, (n) => {
                  if (n) return e(n);
                  r.close(i, (n) => {
                    if (n) return e(n);
                    r.stat(t, (t, n) => {
                      if (t) return e(t);
                      e(null, n.mtime > 1435410243e3);
                    });
                  });
                });
              });
            },
          );
        },
        hasMillisResSync: function () {
          let e = i.join(
            "millis-test-sync" +
              Date.now().toString() +
              Math.random().toString().slice(2),
          );
          e = i.join(o.tmpdir(), e);
          const t = new Date(1435410243862);
          r.writeFileSync(
            e,
            "https://github.com/jprichardson/node-fs-extra/pull/141",
          );
          const n = r.openSync(e, "r+");
          return (
            r.futimesSync(n, t, t),
            r.closeSync(n),
            r.statSync(e).mtime > 1435410243e3
          );
        },
        timeRemoveMillis: function (e) {
          if ("number" == typeof e) return 1e3 * Math.floor(e / 1e3);
          if (e instanceof Date)
            return new Date(1e3 * Math.floor(e.getTime() / 1e3));
          throw new Error(
            "fs-extra: timeRemoveMillis() unknown parameter type",
          );
        },
        utimesMillis: function (e, t, n, o) {
          r.open(e, "r+", (e, i) => {
            if (e) return o(e);
            r.futimes(i, t, n, (e) => {
              r.close(i, (t) => {
                o && o(e || t);
              });
            });
          });
        },
        utimesMillisSync: function (e, t, n) {
          const o = r.openSync(e, "r+");
          return (r.futimesSync(o, t, n), r.closeSync(o));
        },
      };
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        if ("function" == typeof Buffer.allocUnsafe)
          try {
            return Buffer.allocUnsafe(e);
          } catch (t) {
            return new Buffer(e);
          }
        return new Buffer(e);
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback;
      e.exports = { copy: r(n(63)) };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(8).originPathTransform;
      t.access = function (e, t, n) {
        const r = n ? e.syncReturn : e.callback;
        var i = o.filePathLogic(e, t),
          a = i.path;
        return a
          ? n
            ? s(a, r, i.originPath)
            : c(a, r, i.originPath)
          : (console.error("access error:" + i.errMsg),
            r("fail " + i.errMsg, i.errNo));
      };
      var c = function (e, t, n) {
          try {
            r.access(e, (e) => o.processCallback(t, i(e, n)));
          } catch (e) {
            o.processCallback(t, i(e, n));
          }
          return "";
        },
        s = function (e, t, n) {
          try {
            return (r.accessSync(e), o.processCallback(t, null));
          } catch (e) {
            return o.processCallback(t, i(e, n));
          }
        };
    },
    function (e, t, n) {
      const r = n(4),
        o = n(1).defGet,
        i = n(11);
      t.close = function (e, t, n) {
        const c = n ? e.syncReturn : e.callback;
        var s = o(t, "fd", null);
        if (n)
          try {
            return (
              i.getInstance().removeAndCloseSync(s),
              r.processCallback(c, null)
            );
          } catch (e) {
            return r.processCallback(c, e);
          }
        else i.getInstance().removeAndClose(s, (e) => r.processCallback(c, e));
      };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(1).defGet,
        c = n(15),
        s = n(3),
        a = n(8).originPathTransform;
      var u = new (n(10))("appendFile");
      t.appendFile = function (e, t, n) {
        const r = n ? e.syncReturn : e.callback;
        var a = o.filePathLogic(e, t),
          p = a.path;
        if (!p)
          return (
            console.error("appendFile error:" + a.errMsg),
            r("fail " + a.errMsg, a.errNo)
          );
        var d = i(t, "encoding", ""),
          h = i(t, "data", null);
        ArrayBuffer.isView(h) ||
        "[object ArrayBuffer]" === Object.prototype.toString.call(h)
          ? (h = Buffer.from(h))
          : d || (d = "utf8");
        var y = c.dataByteLength(h, d);
        if ((u.markStart(p), n)) {
          var S = o.quotaControl(e, a.rootPath, y);
          return S
            ? (u.markDone(e, p), r("fail " + S, s.FS_STORAGE_LIMIT_EXCEEDED))
            : f(e, p, h, d, r, a.originPath);
        }
        o.quotaControlAsync(e, a.rootPath, y, (t) =>
          t
            ? (u.markDone(e, p), r("fail " + t, s.FS_STORAGE_LIMIT_EXCEEDED))
            : l(e, p, h, d, r, a.originPath),
        );
      };
      var l = function (e, t, n, i, c, s) {
          try {
            r.appendFile(
              t,
              n,
              { encoding: i },
              (n) => (u.markDone(e, t), o.processCallback(c, a(n, s))),
            );
          } catch (n) {
            (u.markDone(e, t), o.processCallback(c, a(n, s)));
          }
          return "";
        },
        f = function (e, t, n, i, c, s) {
          try {
            return (
              r.appendFileSync(t, n, { encoding: i }),
              u.markDone(e, t),
              o.processCallback(c, null)
            );
          } catch (n) {
            return (u.markDone(e, t), o.processCallback(c, a(n, s)));
          }
        };
    },
    function (e, t, n) {
      const r = n(0),
        o = (n(1).defGet, n(4)),
        i = n(10),
        c = n(3),
        s = n(8).originPathTransform;
      var a = new i("copyFile");
      t.copyFile = function (e, t, n) {
        const i = n ? e.syncReturn : e.callback;
        var f = o.filePathLogic(e, t, "srcPath", !0),
          p = f.path;
        if (!p)
          return (
            console.error("copyFile error:" + f.errMsg),
            i("fail " + f.errMsg, f.errNo)
          );
        var d = o.fileDestPathLogic(e, t),
          h = d.path;
        if (!h) return i("fail " + d.errMsg, d.errNo);
        if (d.path.trim() == f.path.trim())
          return (
            console.log("[copyFile] src and dest is same, do nothing"),
            o.processCallback(i, null)
          );
        if ((a.markStart(h), n))
          try {
            var y = r.statSync(p).size,
              S = o.quotaControl(e, d.rootPath, y);
            return S
              ? i("fail " + S, c.FS_STORAGE_LIMIT_EXCEEDED)
              : l(e, p, h, i, f.originPath, d.originPath);
          } catch (e) {
            return o.processCallback(i, s(e, f.originPath));
          } finally {
            a.markDone(e, h);
          }
        else
          try {
            o.quotaControlAsync(e, d.rootPath, r.statSync(p).size, (t) =>
              t
                ? (a.markDone(e, h),
                  i("fail " + t, c.FS_STORAGE_LIMIT_EXCEEDED))
                : u(e, p, h, i, f.originPath, d.originPath),
            );
          } catch (t) {
            return (a.markDone(e, h), o.processCallback(i, s(t, f.originPath)));
          }
      };
      var u = function (e, t, n, i, c, u) {
          try {
            r.copyFile(
              t,
              n,
              (t) => (a.markDone(e, n), o.processCallback(i, s(t, c, u))),
            );
          } catch (t) {
            (a.markDone(e, n), o.processCallback(i, s(t, c, u)));
          }
          return "";
        },
        l = function (e, t, n, i, c, s) {
          try {
            return (r.copyFileSync(t, n), o.processCallback(i, null));
          } catch (e) {
            return o.processCallback(i, transferError(e, c, s));
          } finally {
            a.markDone(e, n);
          }
        };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(10),
        c = n(3),
        s = n(8).originPathTransform;
      var a = new i("rename");
      t.rename = function (e, t, n) {
        const i = n ? e.syncReturn : e.callback;
        var p = o.filePathLogic(e, t, "oldPath"),
          d = p.path;
        if (!d)
          return (
            console.error("rename error:" + p.errMsg),
            i("fail " + p.errMsg, p.errNo)
          );
        var h = o.fileDestPathLogic(e, t, "newPath"),
          y = h.path;
        if (!y) return i("fail " + h.errMsg, h.errNo);
        if ((a.markStart(p.path), a.markStart(h.path), n)) {
          if (p.rootPath != h.rootPath)
            try {
              var S = r.statSync(d).size,
                m = o.quotaControl(e, h.rootPath, S);
              if (m)
                return (
                  f(e, p.path, h.path),
                  i("fail " + m, c.FS_STORAGE_LIMIT_EXCEEDED)
                );
            } catch (t) {
              return (
                f(e, p.path, h.path),
                o.processCallback(i, s(t, oldOriginPath, newOriginPath))
              );
            }
          return l(e, d, y, i, p.originPath, h.originPath);
        }
        if (p.rootPath == h.rootPath)
          return u(e, d, y, i, p.originPath, h.originPath);
        try {
          r.stat(d, (t, n) => {
            var r = n.size;
            o.quotaControlAsync(e, h.rootPath, r, (t) =>
              t
                ? (f(e, p.path, h.path),
                  i("fail " + t, c.FS_STORAGE_LIMIT_EXCEEDED))
                : (f(e, p.path, h.path),
                  u(e, d, y, i, p.originPath, h.originPath)),
            );
          });
        } catch (t) {
          return (
            f(e, p.path, h.path),
            o.processCallback(i, s(t, oldOriginPath, newOriginPath))
          );
        }
      };
      var u = function (e, t, n, i, c, a) {
          try {
            r.rename(
              t,
              n,
              (r) => (f(e, t, n), o.processCallback(i, s(r, c, a))),
            );
          } catch (r) {
            (f(e, t, n), o.processCallback(i, s(r, c, a)));
          }
          return "";
        },
        l = function (e, t, n, i, c, a) {
          try {
            return (r.renameSync(t, n), o.processCallback(i, null));
          } catch (e) {
            return o.processCallback(i, s(e, c, a));
          } finally {
            f(e, t, n);
          }
        },
        f = function (e, t, n) {
          (a.markDone(e, t), a.markDone(e, n));
        };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(12),
        c = n(1).defGet,
        s = n(11),
        a = n(3),
        u = n(8);
      var l = function (e) {
        if (e)
          return -1 != e.message.indexOf("bad file descriptor")
            ? new a.ExpError(u.FS_BAD_FD, a.FS_BAD_FD)
            : -1 !=
                e.message.indexOf('The "fd" argument must be of type number')
              ? new a.ExpError(u.FS_FD_INVALID_TYPE, a.FS_FD_INVALID_TYPE)
              : new a.ExpError(e.message, e.errno);
      };
      t.fstat = function (e, t, n) {
        const u = n ? e.syncReturn : e.callback;
        var f = c(t, "fd", void 0);
        try {
          f = s.getInstance().getFd(f);
        } catch (e) {
          return u("fail " + i.bad_file_descriptor, a.FS_BAD_FD);
        }
        if (n)
          try {
            let e = r.fstatSync(f);
            return o.processCallbackNoJsonStr(u, null, {
              mode: e.mode,
              size: e.size,
              lastAccessedTime: e.atimeMs,
              lastModifiedTime: e.mtimeMs,
            });
          } catch (e) {
            return (
              console.log(`error=${e.message}`),
              o.processCallbackNoJsonStr(u, l(e))
            );
          }
        else
          try {
            r.fstat(f, (e, t) =>
              o.processCallbackNoJsonStr(u, l(e), {
                mode: t.mode,
                size: t.size,
                lastAccessedTime: t.atimeMs,
                lastModifiedTime: t.mtimeMs,
              }),
            );
          } catch (e) {
            return (
              console.log(`error=${e.message}`),
              o.processCallback(u, l(e))
            );
          }
      };
    },
    function (e, t, n) {
      const r = n(0),
        o = (n(19), n(1).defGet),
        i = n(4),
        c = (n(3), n(8).originPathTransform);
      t.mkdir = function (e, t, n) {
        const r = n ? e.syncReturn : e.callback;
        var c = i.filePathLogic(e, t),
          u = c.path;
        if (!u) return r("fail " + c.errMsg, c.errNo);
        var l = o(t, "recursive", !1);
        return n ? a(u, l, r, c.originPath) : s(u, l, r, c.originPath);
      };
      var s = function (e, t, n, o) {
          var s = (e) => i.processCallback(n, c(e, o));
          try {
            t ? r.mkdir(e, { recursive: !0 }, s) : r.mkdir(e, s);
          } catch (e) {
            i.processCallback(n, c(e, o));
          }
          return "";
        },
        a = function (e, t, n, o) {
          try {
            return (
              t ? r.mkdirSync(e, { recursive: !0 }) : r.mkdirSync(e),
              i.processCallback(n, null)
            );
          } catch (e) {
            return i.processCallback(n, c(e, o));
          }
        };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(1).defGet,
        c = n(12),
        s = n(11),
        a = n(10),
        u = n(3);
      var l = new a("open"),
        f = function (e, t, n, r) {
          return n
            ? (l.markDone(e, t), o.processCallback(r, null, { fd: n }))
            : (l.markDone(e, t),
              o.processCallback(
                r,
                new u.ExpError(
                  c.exceed_max_concurrent_fd_limit,
                  u.FS_FD_LIMIT_EXCEEDED,
                ),
              ));
        };
      t.open = function (e, t, n) {
        const a = n ? e.syncReturn : e.callback;
        var p = o.filePathLogic(e, t),
          d = p.path;
        const h = c.no_such_file_or_directory(p.originPath);
        if (!d) return (console.error("open error:" + p.errMsg), a(h, p.errNo));
        var y = i(t, "flag", null);
        if (0 == o.getFileConfig(e, p.originPath).type && "r" != y)
          return a(
            "fail permission denied, open " + p.originPath,
            u.FS_PERMISSION_DENIED,
          );
        if ((l.markStart(d), n))
          try {
            let t = r.openSync(d, y),
              n = s.getInstance().storeAndGetMappingId(t, d, p.rootPath);
            return (n || r.close(t), f(e, d, n, a));
          } catch (t) {
            return (
              console.error("open error:", t),
              l.markDone(e, d),
              o.processCallback(a, new u.ExpError(h, t.errno))
            );
          }
        else
          r.open(d, y, (t, n) => {
            if (t)
              return (
                console.error("open error:", t),
                l.markDone(e, d),
                o.processCallback(a, new u.ExpError(h, t.errno))
              );
            let i = s.getInstance().storeAndGetMappingId(n, d, p.rootPath);
            return (i || r.close(n), f(e, d, i, a));
          });
      };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(12),
        c = n(1).defGet,
        s = n(11),
        a = n(3);
      var u = function (e) {
        if (e)
          return -1 !=
            e.message.indexOf('The value of "length" is out of range')
            ? new a.ExpError(
                'fail the value of "length" is out of range',
                a.FS_LENGTH_OUT_OF_RANGE,
              )
            : -1 != e.message.indexOf('The value of "offset" is out of range')
              ? new a.ExpError(
                  'fail the value of "offset" is out of range',
                  a.FS_OFFSET_OUT_OF_RANGE,
                )
              : -1 !=
                  e.message.indexOf('The "fd" argument must be of type number')
                ? new a.ExpError(
                    "fail " + i.fd_argument_type_number,
                    a.FS_FD_INVALID_TYPE,
                  )
                : -1 != e.message.indexOf("bad file descriptor")
                  ? new a.ExpError(i.bad_file_descriptor, a.FS_BAD_FD)
                  : -1 !=
                      e.message.indexOf(
                        "The argument 'buffer' is empty and cannot be written",
                      )
                    ? new a.ExpError(
                        i.array_buffer_not_exist,
                        a.FS_ARRAY_BUFFER_NOT_EXIST,
                      )
                    : new a.ExpError(e.message, e.errno);
      };
      t.read = function (e, t, n) {
        const l = n ? e.syncReturn : e.callback;
        var f = c(t, "fd", void 0),
          p = c(t, "arrayBuffer", null);
        null == p &&
          l("fail " + i.array_buffer_not_exist, a.FS_ARRAY_BUFFER_NOT_EXIST);
        var d = c(t, "offset", null),
          h = c(t, "length", p.byteLength),
          y = c(t, "position", null);
        try {
          f = s.getInstance().getFd(f);
        } catch (e) {
          return l("fail " + i.bad_file_descriptor, a.FS_BAD_FD);
        }
        var S = Buffer.from(p);
        if (n)
          try {
            let e = r.readSync(f, S, d, h, y);
            return o.processCallbackNoJsonStr(l, null, {
              bytesRead: e,
              arrayBuffer: p,
            });
          } catch (e) {
            return o.processCallbackNoJsonStr(l, u(e));
          }
        else
          try {
            r.read(f, S, d, h, y, (e, t, n) =>
              o.processCallbackNoJsonStr(l, u(e), {
                bytesRead: t,
                arrayBuffer: p,
              }),
            );
          } catch (e) {
            return o.processCallbackNoJsonStr(l, u(e));
          }
      };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(1).defGet,
        c = n(21).wrapResultData,
        s = n(3),
        a = n(8).originPathTransform;
      t.readFile = function (e, t, n) {
        const c = n ? e.syncReturn : e.callback;
        var a = o.filePathLogic(e, t),
          f = a.path;
        if (!f)
          return (
            console.error("readFile error:" + a.errMsg),
            c("fail " + a.errMsg, a.errNo)
          );
        var p = i(t, "encoding", ""),
          d = i(t, "position", null),
          h = i(t, "length", null);
        if (null != d || null != h) {
          let e = r.statSync(f);
          if (null != d && ("number" != typeof d || d < 0 || d > e.size - 1))
            return c(
              'fail the value of "position" is out of range',
              s.FS_POSITION_OUT_OF_RANGE,
            );
          if (
            (null == d && (d = 0),
            null != h && ("number" != typeof h || h < 1 || h > e.size - d))
          )
            return c(
              'fail the value of "length" is out of range',
              s.FS_LENGTH_OUT_OF_RANGE,
            );
          null == h && (h = e.size - d);
        }
        return n
          ? l(e, f, p, d, h, c, a.originPath)
          : u(e, f, p, d, h, c, a.originPath);
      };
      var u = function (e, t, n, i, u, l, f) {
          try {
            let p;
            p =
              null != i && null != u
                ? { encoding: n, start: i, end: i + u - 1 }
                : { encoding: n };
            let d = r.createReadStream(t, p),
              h = [],
              y = "";
            (d.on("error", (e) => o.processCallback(l, a(e, f))),
              d.on("data", (e) => {
                n ? (y += e) : h.push(e);
              }),
              d.on("end", () => {
                n || (y = Buffer.concat(h));
                var t = { data: y };
                return Buffer.isBuffer(y) && !c(e, t)
                  ? (console.error(
                      "jsapi_readFile wrapResultDataWithNativeBuffer failed",
                    ),
                    l(
                      "fail:convert native buffer parameter fail. native buffer exceed size limit.",
                      s.NATIVE_BUFFER_EXCEED_SIZE_LIMIT,
                    ))
                  : o.processCallback(l, null, t, e);
              }));
          } catch (e) {
            o.processCallback(l, a(e, f));
          }
          return "";
        },
        l = function (e, t, n, i, u, l, f) {
          try {
            if (null != i && null != u) {
              var p = new Buffer.alloc(u);
              const e = r.openSync(t, "r");
              (r.readSync(e, p, 0, u, i), (d = p), n && (d = p.toString(n)));
            } else {
              var d;
              d = r.readFileSync(t, { encoding: n });
            }
            var h = { data: d };
            return Buffer.isBuffer(d) && !c(e, h)
              ? (console.error("wrapResultDataWithNativeBuffer failed"),
                l(
                  "fail:convert native buffer parameter fail. native buffer exceed size limit.",
                  s.NATIVE_BUFFER_EXCEED_SIZE_LIMIT,
                ))
              : o.processCallback(l, null, h);
          } catch (e) {
            return o.processCallback(l, a(e, f));
          }
        };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = (n(3), n(8).originPathTransform);
      t.readdir = function (e, t, n) {
        const r = n ? e.syncReturn : e.callback;
        var i = o.filePathLogic(e, t),
          a = i.path;
        return a
          ? n
            ? s(a, r, i.originPath)
            : c(a, r, i.originPath)
          : r("fail " + i.errMsg, i.errNo);
      };
      var c = function (e, t, n) {
          try {
            r.readdir(e, (e, r) =>
              e
                ? o.processCallback(t, i(e, n))
                : (a(r), o.processCallback(t, i(e, n), { files: r })),
            );
          } catch (e) {
            o.processCallback(t, i(e, n));
          }
          return "";
        },
        s = function (e, t, n) {
          try {
            var c = r.readdirSync(e);
            return (a(c), o.processCallback(t, null, { files: c }));
          } catch (e) {
            return o.processCallback(t, i(e, n));
          }
        },
        a = function (e) {
          if (null != e) {
            const t = e.indexOf(".nomedia");
            t >= 0 && e.splice(t, 1);
          }
          return e;
        };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(19),
        i = n(1).defGet,
        c = n(4),
        s = n(10),
        a = n(3),
        u = n(8).originPathTransform;
      var l = new s("rmdir");
      t.rmdir = function (e, t, n) {
        const r = n ? e.syncReturn : e.callback;
        var o = c.filePathLogic(e, t),
          s = o.path;
        if (!s)
          return (
            console.error("rmdir error:" + o.errMsg),
            r("fail " + o.errMsg, o.errNo)
          );
        if (s == o.rootPath)
          return (
            console.warn("rmdir isNonFaltternedRootPath :" + s),
            r("fail permission denied, open " + s, a.FS_PERMISSION_DENIED_PATH)
          );
        var u = i(t, "recursive", !1);
        return (
          l.markStart(s),
          n ? p(e, s, u, r, o.originPath) : f(e, s, u, r, o.originPath)
        );
      };
      var f = function (e, t, n, i, s) {
          var f = (n) => (l.markDone(e, t), c.processCallback(i, u(n, s)));
          try {
            if (n) {
              if (r.statSync(t).isFile())
                return (
                  l.markDone(e, t),
                  i("fail not a directory, rmdir '" + t + "'", a.FS_NOT_DIR)
                );
              o.remove(t, { readdir: r.readdir }, f);
            } else r.rmdir(t, f);
          } catch (n) {
            (l.markDone(e, t), c.processCallback(i, u(n, s)));
          }
          return "";
        },
        p = function (e, t, n, i, s) {
          try {
            if (n) {
              if (r.statSync(t).isFile())
                return i(
                  i,
                  "fail not a directory, rmdir '" + t + "'",
                  a.FS_NOT_DIR,
                );
              o.removeSync(t);
            } else r.rmdirSync(t);
            return c.processCallback(i, null);
          } catch (e) {
            return c.processCallback(i, u(e, s));
          } finally {
            l.markDone(e, t);
          }
        };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(10),
        c = (n(3), n(8).originPathTransform);
      var s = new i("unlink");
      t.unlink = function (e, t, n) {
        const r = n ? e.syncReturn : e.callback;
        var i = o.filePathLogic(e, t),
          c = i.path;
        return c
          ? (s.markStart(c),
            n ? u(e, c, r, i.originPath) : a(e, c, r, i.originPath))
          : (console.error("unlink error:" + i.errMsg),
            r("fail " + i.errMsg, i.errNo));
      };
      var a = function (e, t, n, i) {
          try {
            r.unlink(
              t,
              (r) => (s.markDone(e, t), o.processCallback(n, c(r, i))),
            );
          } catch (r) {
            (s.markDone(e, t), o.processCallback(n, c(r, i)));
          }
          return "";
        },
        u = function (e, t, n, i) {
          try {
            return (r.unlinkSync(t), o.processCallback(n, null));
          } catch (e) {
            return o.processCallback(n, c(e, i));
          } finally {
            s.markDone(e, t);
          }
        };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(12),
        c = n(1).defGet,
        s = n(11),
        a = n(15),
        u = n(10),
        l = n(3);
      var f = new u("write");
      var p = function (e) {
          if (e)
            return -1 !=
              e.message.indexOf('The value of "length" is out of range')
              ? new l.ExpError(
                  'fail the value of "length" is out of range',
                  l.FS_LENGTH_OUT_OF_RANGE,
                )
              : -1 != e.message.indexOf('The value of "offset" is out of range')
                ? new l.ExpError(
                    'fail the value of "offset" is out of range',
                    l.FS_OFFSET_OUT_OF_RANGE,
                  )
                : -1 !=
                    e.message.indexOf(
                      'The "fd" argument must be of type number',
                    )
                  ? new l.ExpError(
                      i.fd_argument_type_number,
                      l.FS_FD_INVALID_TYPE,
                    )
                  : -1 != e.message.indexOf("bad file descriptor")
                    ? new l.ExpError(i.bad_file_descriptor, l.FS_BAD_FD)
                    : new l.ExpError(e.message, e.errno);
        },
        d = function (e, t, n) {
          return "hex" == t && "string" == typeof e && e.length % 2 != 0
            ? n("fail invalid hex string length", l.FS_ENCODING_ERROR)
            : "ok";
        };
      t.write = function (e, t, n) {
        const u = n ? e.syncReturn : e.callback;
        var h,
          y = c(t, "fd", void 0),
          S = c(t, "data", null),
          m = c(t, "offset", null),
          _ = c(t, "length", null),
          E = c(t, "encoding", null),
          g = c(t, "position", null);
        try {
          h = s.getInstance().getFdInfo(y);
        } catch (e) {
          return u("fail " + i.bad_file_descriptor, l.FS_BAD_FD);
        }
        if (_ < 0)
          return u(
            'fail the value of "length" is out of range',
            l.FS_LENGTH_OUT_OF_RANGE,
          );
        if (m < 0)
          return u(
            'fail the value of "offset" is out of range',
            l.FS_OFFSET_OUT_OF_RANGE,
          );
        ArrayBuffer.isView(S) ||
        "[object ArrayBuffer]" === Object.prototype.toString.call(S)
          ? (S = Buffer.from(S))
          : E || (E = "utf8");
        let v = d(S, E, u);
        if ("ok" != v) return v;
        var k = a.dataByteLength(S, E);
        if ((f.markStart(h.path), n))
          try {
            var F = o.quotaControl(e, h.rootPath, k);
            if (F) return u("fail " + F, l.FS_STORAGE_LIMIT_EXCEEDED);
            var b = 0;
            return (
              (b =
                S instanceof Buffer
                  ? r.writeSync(h.fd, S, m, _, g)
                  : r.writeSync(h.fd, S, g, E)),
              o.processCallbackNoJsonStr(u, null, { bytesWritten: b })
            );
          } catch (e) {
            return o.processCallbackNoJsonStr(u, p(e));
          } finally {
            f.markDone(e, h.path);
          }
        else
          o.quotaControlAsync(e, h.rootPath, k, (t) => {
            if (t)
              return (
                f.markDone(e, h.path),
                u("fail " + t, l.FS_STORAGE_LIMIT_EXCEEDED)
              );
            try {
              S instanceof Buffer
                ? r.write(
                    h.fd,
                    S,
                    m,
                    _,
                    g,
                    (t, n, r) => (
                      f.markDone(e, h.path),
                      o.processCallback(u, p(t), { bytesWritten: n })
                    ),
                  )
                : r.write(
                    h.fd,
                    S,
                    g,
                    E,
                    (t, n, r) => (
                      f.markDone(e, h.path),
                      o.processCallback(u, p(t), { bytesWritten: n })
                    ),
                  );
            } catch (t) {
              return (f.markDone(e, h.path), o.processCallback(u, p(t)));
            }
          });
      };
    },
    function (e, t, n) {
      const r = n(0),
        o = n(4),
        i = n(1).defGet,
        c = n(15),
        s = n(3),
        a = n(8).originPathTransform;
      var u = new (n(10))("writeFile");
      t.writeFile = function (e, t, n) {
        const r = n ? e.syncReturn : e.callback;
        var a = o.filePathLogic(e, t),
          p = a.path;
        if (!p)
          return (
            console.error("writeFile error:" + a.errMsg),
            r("fail " + a.errMsg, a.errNo)
          );
        var d = i(t, "encoding", ""),
          h = i(t, "data", null);
        ArrayBuffer.isView(h) ||
        "[object ArrayBuffer]" === Object.prototype.toString.call(h)
          ? (h = Buffer.from(h))
          : d || (d = "utf8");
        var y = c.dataByteLength(h, d);
        u.markStart(p);
        try {
          if (n) {
            var S = o.quotaControl(e, a.rootPath, y);
            return S
              ? (u.markDone(e, p), r("fail " + S, s.FS_STORAGE_LIMIT_EXCEEDED))
              : f(e, p, h, d, r, a.originPath);
          }
          o.quotaControlAsync(e, a.rootPath, y, (t) =>
            t
              ? (u.markDone(e, p), r("fail " + t, s.FS_STORAGE_LIMIT_EXCEEDED))
              : l(e, p, h, d, r, a.originPath),
          );
        } catch (t) {
          return (u.markDone(e, p), r("fail " + t, t.errno));
        }
      };
      var l = function (e, t, n, i, c, s) {
          try {
            var l = r.createWriteStream(t, { encoding: i });
            (l.write(n),
              l.end(),
              l.on(
                "finish",
                () => (u.markDone(e, t), o.processCallback(c, null)),
              ),
              l.on(
                "error",
                (n) => (u.markDone(e, t), o.processCallback(c, a(n, s))),
              ));
          } catch (n) {
            (u.markDone(e, t), o.processCallback(c, a(n, s)));
          }
          return "";
        },
        f = function (e, t, n, i, c, s) {
          try {
            return (
              r.writeFileSync(t, n, { encoding: i }),
              o.processCallback(c, null)
            );
          } catch (e) {
            return o.processCallback(c, a(e, s));
          } finally {
            u.markDone(e, t);
          }
        };
    },
    function (e, t, n) {
      console.debug = console.log;
      let r = (function () {
        var e = {};
        return "undefined" == typeof WeixinJSCoreAndroid
          ? (console.error("initEnv : WeixinJSCoreAndroid undefined"), null)
          : ((e.WeixinJSCoreAndroid = WeixinJSCoreAndroid),
            "undefined" == typeof WeixinJSCore
              ? (console.error("initEnv : WeixinJSCore undefined"), null)
              : ((e.WeixinJSCore = WeixinJSCore),
                "undefined" == typeof process
                  ? (console.error("initEnv : process undefined"), null)
                  : ((e.process = process),
                    "undefined" == typeof gJavaBroker
                      ? (console.error("initEnv : javaBroker undefined"), null)
                      : ((e.javaBroker = gJavaBroker),
                        (e.NativeGlobal = NativeGlobal),
                        e))));
      })();
      if (null != r) {
        const e = n(46);
        ((gNodeController = new e()), gNodeController.startNode(r));
      }
      "undefined" != typeof gJavaBroker && delete gJavaBroker;
    },
    function (e, t, n) {
      const r = n(47),
        o = n(11),
        i = n(48),
        c = n(1),
        s = (n(18), n(49)),
        a = n(13),
        u = n(50),
        l = n(14),
        f = n(1).defGet,
        p = n(21).wrapReqData,
        d = n(53),
        { triggerCacheFsConfig: h } = n(4);
      e.exports = function () {
        var e,
          t,
          y = !0,
          S = {},
          m = {},
          _ = !1,
          E = !1;
        ((this.startNode = function (a) {
          (console.log("startNode"),
            (e = new s(a.javaBroker, a.NativeGlobal)),
            a.process.on("uncaughtException", function (e) {
              ((y = !1),
                k(854, 4),
                console.error("uncaughtException"),
                console.error(e.stack),
                console.error(e));
            }),
            t || (t = new i()),
            (function () {
              var n, r, i;
              n = e.listen(u.ON_SERVICE_INIT_LISTENER, function (c) {
                ((m = c.wxaData),
                  (_ = f(m, "notSupport", !1)),
                  console.log("onServiceInit _isNotSupport:" + _),
                  (E = "Worker" === c.envType));
                let s = F(c);
                (t.updatePermission(s),
                  t.setJsApiPermissionDebugOn(
                    f(m, "jsApiPermissionDebugOn", !1),
                  ),
                  t.updateCurrentRunningState(c.state),
                  h(m),
                  (r = e.listen(u.ON_PERMISSION_UPDATE_LISTENER, function (e) {
                    let n = F(e);
                    (t.updatePermission(n),
                      void 0 !== n.fg &&
                        a.WeixinJSCoreAndroid.subscribeHandler(
                          "onPermissionUpdate",
                          { fg: n.fg, bg: n.bg },
                          0,
                          { nativeTime: Date.now().toString() },
                        ));
                  })),
                  (i = e.listen(
                    u.ON_RUNNING_STATE_CHANGED_LISTENER,
                    function (c) {
                      (t.updateCurrentRunningState(c.state),
                        c.state == l.AppRunningState.DESTROYED &&
                          (e.unListen(n),
                          e.unListen(r),
                          e.unListen(i),
                          o.getInstance().clearAll()));
                    },
                  )));
              });
            })(),
            console.log("prepareRuntime ok"),
            (function () {
              c.importantLog("hy: init js apis");
              var e,
                t,
                r = n(18),
                o = n(79),
                i = n(80);
              i.keys().forEach(function (n, c, s) {
                ((e = g(n)),
                  console.log("register api:" + e),
                  null != e &&
                    ((t = i(n)), r.inherits(t, o), (S[e] = new t())));
              });
            })(),
            (function () {
              (c.importantLog("hy: init direct apis"),
                _switchTimer
                  ? (d.init(),
                    (NativeGlobal.setTimeout = this.setTimeout = d.setTimeout),
                    (NativeGlobal.clearTimeout = this.clearTimeout =
                      d.clearTimeout),
                    (NativeGlobal.setInterval = this.setInterval =
                      d.setInterval),
                    (NativeGlobal.clearInterval = this.clearInterval =
                      d.clearInterval))
                  : c.importantLog("hy: not need global timer"));
            })(),
            (function () {
              (E || (E = "Worker" === e.envType),
                console.info("hook invokeHandler worker?", E));
              var n = a.WeixinJSCore.invokeHandler;
              ((a.WeixinJSCore.invokeHandler = function (o, i, c, s) {
                if (!y)
                  return (
                    console.error(
                      "invoke node env not ok; go __invokeHandler__",
                      o,
                      "worker?",
                      E,
                    ),
                    n(o, i, c, s)
                  );
                if (!v(o)) return n(o, i, c, s);
                let u = S[o].getCtrlIndex(),
                  l = { name: o, ctrlIndex: u };
                var f = Date.now();
                let d = new r(e, a.WeixinJSCoreAndroid, c, l, m, t);
                d.markStartTime(f);
                var h = function () {
                  try {
                    var e = i;
                    if ("object" != typeof i && ((e = JSON.parse(i)), !p(d, e)))
                      return;
                    return ((e._invoke_time_ = f), S[o].invoke(d, e));
                  } catch (e) {
                    return (
                      e.no_log ||
                        console.error(
                          e + "; go __invokeHandler__",
                          o,
                          "worker?",
                          E,
                        ),
                      n(o, i, c, s)
                    );
                  }
                };
                try {
                  return E && void 0 === m ? h() : t.check(d, l, h) ? h() : "";
                } catch (e) {
                  return (
                    e.no_log || console.error(e + "; go __invokeHandler__"),
                    n(o, i, c, s)
                  );
                }
              }),
                delete a.javaBroker);
            })(),
            c.importantLog("startNode suc"));
        }),
          (this.javaResp = function (t, n) {
            e.resp(t, n);
          }),
          (this.javaOnTrigger = function (t, n) {
            e.onTrigger(t, n);
          }));
        var g = function (e) {
            var t = /.*jsapi_(.+)\.js$/.exec(e);
            return null == t ? null : t[1];
          },
          v = function (e) {
            return (
              void 0 !== S[e] &&
              !_ &&
              (void 0 === m.switchFs || 0 == m.switchFs
                ? (console.log("node fs not open"), !1)
                : "function" == typeof S[e].invoke)
            );
          },
          k = function (t, n, r = 1) {
            e.req(a.REPORT_ID_KEY, { id: t, key: n, val: r }, null);
          },
          F = function (e) {
            var t = {};
            return (
              void 0 !== e.fg && (t.fg = e.fg),
              void 0 !== e.bg && (t.bg = e.bg),
              void 0 !== e.plugins && (t.plugins = e.plugins),
              t
            );
          };
      };
    },
    function (e, t, n) {
      const r = n(1),
        o = n(13),
        i = n(1).defGet;
      n(3);
      e.exports = function e(t, n, c, s, a, u) {
        var l,
          f = t,
          p = n,
          d = c,
          h = s,
          y = a,
          S = u;
        ((this.publishEvent = function (e, t = {}, n = null, r = {}) {
          var o = function () {
            p.subscribeHandler(e.name, t, n, r);
          };
          u.check(this, e, o) && o();
        }),
          (this.callback = function (e, t = 0, n = {}) {
            ((n.errMsg = h.name + ":" + e), (n.errno = t));
            var r = Date.now() - l;
            k(e, r);
            var o = { nativeTime: Date.now() };
            return (p.invokeCallbackHandler(d, n, o), "");
          }),
          (this.syncReturn = function (e, t = 0, n = {}, r = !0) {
            ((n.errMsg = h.name + ":" + e), (n.errno = t));
            var o = Date.now() - l;
            return (k(e, o), r ? JSON.stringify(n) : n);
          }),
          (this.getApiName = function () {
            return h.name;
          }));
        var m = function (e) {
            f.req(e);
          },
          _ = function (e, t) {
            "function" == typeof t
              ? f.req(e, null, respCallback)
              : f.req(e, args, null);
          },
          E = function (e, t, n) {
            f.req(e, t, n);
          };
        (r.overloadMethod(e.prototype, "reqJava", m),
          r.overloadMethod(e.prototype, "reqJava", _),
          r.overloadMethod(e.prototype, "reqJava", E),
          (this.reqJavaSync = function (e, t = null) {
            return f.reqSync(e, t);
          }),
          (this.listenJava = function (e, t) {
            return f.listen(e, t);
          }),
          (this.unListenJava = function (e) {
            f.unListen(e);
          }),
          (this.getAppId = function () {
            return y.appId;
          }),
          (this.getSysConfig = function () {
            return y.sysConfig;
          }),
          (this.getAppConfig = function () {
            return y.appConfig;
          }),
          (this.getWxaData = function () {
            return y;
          }),
          (this.log = function (e) {
            E(o.XLOG, { level: 3, message: e }, null);
          }),
          (this.invokeGetPermissionBytes = function (e) {
            return S.invokeGetPermissionBytes(e);
          }),
          (this.invokeGetPluginPermissionBytes = function (e) {
            return S.invokeGetPluginPermissionBytes(e);
          }));
        var g = function (e, t, n = 1) {
          E(o.REPORT_ID_KEY, { id: e, key: t, val: n }, null);
        };
        this.reportIDKey = g;
        var v = function (e, t) {
          E(o.REPORT_KV, { id: e, val: t }, null);
        };
        ((this.getFileSysFolderSizeAsync = function (e, t) {
          E(o.GET_FILE_SYS_FOLDER_SIZE, { dirPath: e }, t);
        }),
          (this.getFileSysFolderSizeSync = function (e) {
            return this.reqJavaSync(
              o.GET_FILE_SYS_FOLDER_SIZE_SYNC,
              { dirPath: e },
              null,
            );
          }),
          (this.markFileSizeDirtySync = function (e) {
            return this.reqJavaSync(
              o.MARK_FILE_SIZE_DIRTY,
              { appId: this.getAppId(), filePath: e },
              null,
            );
          }),
          (this.postFileOpSizeChangedInfo = function (e) {
            this.enableSpaceStatics() &&
              this.reqJavaSync(
                o.POST_FILE_OP_SIZE_CHANGE_INFO,
                { info: e },
                null,
              );
          }),
          (this.enableSpaceStatics = function () {
            return i(y, "enableSpaceStatics", !1);
          }),
          (this.markStartTime = function (e) {
            l = e;
          }));
        this.reportQuotaControl = function (e, t, n, r, o) {
          var i =
            y.appId +
            ",1," +
            e +
            "," +
            t +
            "," +
            n +
            "," +
            h.name +
            "," +
            r +
            "," +
            o;
          v(31577, i);
        };
        var k = function (e, t) {
          e || (e = "");
          var n = 1;
          (function (e, t) {
            return (
              !(null == t || "" == t || 0 == e.length || t.length > e.length) &&
              e.substr(0, t.length) == t
            );
          })(e, "fail") && ((n = 2), g(855, 8));
          var r = S.getApiCtrlByte(this, s.ctrlIndex),
            o =
              "0,," +
              y.appId +
              "," +
              y.appversion +
              "," +
              y.appstate +
              ",,0," +
              h.name +
              ",," +
              n +
              "," +
              r +
              ",0," +
              t +
              ",," +
              e +
              ",0,0,,0,,";
          (v(13542, o),
            (o =
              "6,1," +
              h.name +
              "," +
              t +
              "," +
              y.appId +
              "," +
              encodeURIComponent(e)),
            v(16713, o));
        };
      };
    },
    function (e, t, n) {
      const r = n(14),
        o = n(13);
      e.exports = function () {
        ((ApiCtrlType = Object.freeze({
          OK: 1,
          REFUSE: 0,
          USER_AUTH: 4,
          BANNED: 6,
          OK_WHEN_PLAYING_AUDIO: 7,
          PENDING_FOREGROUND: 8,
        })),
          (CheckErrMsg = Object.freeze({ RET_DENIED: "fail:access denied" })),
          (AuthResult = Object.freeze({ OK: 1, DENY: 2, CANCEL: 3 })));
        var e = {},
          t = r.AppRunningState.FOREGROUND,
          n = [],
          i = !1;
        ((this.updatePermission = function (t) {
          t && (console.info("updatePermission:", t), Object.assign(e, t));
        }),
          (this.setJsApiPermissionDebugOn = function (e) {
            ((i = e), console.info("jsapiPermissionDebugOn:", i));
          }),
          (this.updateCurrentRunningState = function (e) {
            (console.info("updateCurrentRunningState:" + e),
              (t = e) == r.AppRunningState.DESTROYED
                ? p()
                : t == r.AppRunningState.FOREGROUND && f());
          }),
          (this.check = function (e, t, n) {
            switch (this.getApiCtrlByte(e, t.ctrlIndex)) {
              case ApiCtrlType.OK:
                return c(e, t);
              case ApiCtrlType.BANNED:
                return s(e, t);
              case ApiCtrlType.USER_AUTH:
                return a(e, t, n);
              case ApiCtrlType.OK_WHEN_PLAYING_AUDIO:
                return u();
              case ApiCtrlType.PENDING_FOREGROUND:
                return l(e, t, n);
              case ApiCtrlType.REFUSE:
              default:
                return (e.callback(CheckErrMsg.RET_DENIED), !1);
            }
          }));
        var c = function (e, n) {
            if (
              t == r.AppRunningState.SUSPEND &&
              r.NetWorkApis.indexOf(n.name) >= 0
            ) {
              var o =
                "fail: jsapi has no permission, event=" +
                n.name +
                ", runningState=suspend , permissionMsg=permission ok, detail=network api interrupted in suspend state";
              return (e.callback(o), !1);
            }
            return !0;
          },
          s = function (e, t) {
            return (
              e.reqJava(o.SHOW_JS_API_BAN_ALERT, { apiName: t.name }),
              e.callback(CheckErrMsg.RET_DENIED),
              !1
            );
          },
          a = function (e, t, n) {
            return (
              e.reqJava(o.REQUIRE_USER_AUTH, { apiName: t.name }, function (t) {
                let r = t.result;
                (console.log("doUserAuthLogic result:" + r),
                  r == AuthResult.OK
                    ? n()
                    : r == AuthResult.CANCEL
                      ? e.callback("fail:auth canceled")
                      : e.callback("fail:auth denied"));
              }),
              !1
            );
          },
          u = function (e) {
            return !0;
          },
          l = function (e, t, r) {
            return (
              console.log("doPendingForegroundLogic pending api:" + t.name),
              n.push(r),
              !1
            );
          },
          f = function () {
            console.log("firePendingForegroundCallbacks length:" + n.length);
            for (var e = 0; e < n.length; e++) n[e]();
            p();
          },
          p = function () {
            n = [];
          };
        this.getApiCtrlByte = function (e, t) {
          if (i) return ApiCtrlType.OK;
          var n = d();
          if (!n)
            throw (
              console.error("Permission getApiCtrlByte ctrlBytes null"),
              e.reportIDKey(854, 10),
              new Error("Permission getApiCtrlByte ctrlBytes null")
            );
          return r.ApiCtrlIndexHardCodePass == t ? ApiCtrlType.OK : n[t];
        };
        var d = function () {
          if (void 0 === e) return null;
          var n;
          switch (t) {
            case r.AppRunningState.BACKGROUND:
            case r.AppRunningState.SUSPEND:
            case r.AppRunningState.DESTROYED:
              n = e.bg;
              break;
            case r.AppRunningState.FOREGROUND:
            default:
              n = e.fg;
          }
          return n;
        };
        ((this.invokeGetPermissionBytes = function (t) {
          if ((console.info("invokeGetPermissionBytes", t), void 0 === t))
            throw new Error("fail:indexes is nil");
          if (void 0 === t.length || t.length <= 0)
            throw new Error("fail:ctrlBytes is empty");
          var n = d(),
            r = {},
            o = [],
            i = [];
          return (
            t.forEach((t) => {
              t < 0 || t >= n.length
                ? (o.push(0), i.push({ fg: 0, bg: 0 }))
                : (o.push(n[t]), i.push({ fg: e.fg[t], bg: e.bg[t] }));
            }),
            (r.permissionBytes = o),
            (r.permissionBytesForRunningStatus = i),
            r
          );
        }),
          (this.invokeGetPluginPermissionBytes = function (n) {
            if (
              (console.info("invokeGetPluginPermissionBytes", n), void 0 === n)
            )
              throw new Error("fail:indexes is nil");
            var o = {};
            return (
              n.forEach((n) => {
                var i = n.pluginId,
                  c = n.indexes;
                if (void 0 === c) throw new Error("fail:indexes is nil");
                if ("string" == typeof i && i.length > 0) {
                  var s = (function (n) {
                    if (void 0 === e) return null;
                    if ("string" != typeof n || n.length <= 0) return null;
                    var o,
                      i = (e.plugins || {})[n];
                    if (void 0 === i) return null;
                    switch (t) {
                      case r.AppRunningState.BACKGROUND:
                      case r.AppRunningState.SUSPEND:
                      case r.AppRunningState.DESTROYED:
                        o = i.bg;
                        break;
                      case r.AppRunningState.FOREGROUND:
                      default:
                        o = i.fg;
                    }
                    return o;
                  })(i);
                  if (void 0 !== s && s.length > 0) {
                    var a = [];
                    (c.forEach((e) => {
                      e < 0 || e >= s.length ? a.push(0) : a.push(s[e]);
                    }),
                      (o[i] = a));
                  } else
                    console.error(
                      "invokeGetPluginPermissionBytes",
                      "ctrlBytes is empty for",
                      i,
                    );
                }
              }),
              o
            );
          }));
      };
    },
    function (e, t, n) {
      const r = n(13);
      e.exports = function (e, t) {
        var n = e,
          o = {},
          i = 1,
          c = {},
          s = 1,
          a = t,
          u = "";
        ((this.req = function (e, t, c) {
          if (r.REPORT_ID_KEY === e) {
            if (a && a.Reporter && a.Reporter.reportIdKey)
              return void a.Reporter.reportIdKey(t.id, t.key, t.val || 1);
          } else if (
            r.REPORT_KV === e &&
            a &&
            a.Reporter &&
            a.Reporter.reportKV
          )
            return void a.Reporter.reportKV(t.id, t.val);
          var s = "{}",
            u = -1;
          (t && (s = JSON.stringify(t)),
            "function" == typeof c && ((u = i++), (o[u] = c)),
            n.req(e, s, u));
        }),
          (this.reqSync = function (e, t) {
            var r = "{}";
            return (t && (r = JSON.stringify(t)), JSON.parse(n.reqSync(e, r)));
          }),
          (this.resp = function (e, t) {
            "function" == typeof o[e] && (o[e](t), delete o[e]);
          }),
          (this.listen = function (e, t) {
            const r = s++;
            return ((c[r] = t), n.listen(e, r), r);
          }),
          (this.unListen = function (e) {
            c[e] && (delete c[e], n.unListen(e));
          }),
          (this.onTrigger = function (e, t) {
            "function" == typeof c[e] && c[e](t);
          }),
          Object.defineProperty(this, "envType", {
            get: function () {
              return ((void 0 !== u && "" != u) || (u = e.jsGetEnvType()), u);
            },
          }));
      };
    },
    function (e, t) {
      e.exports = Object.freeze({
        ON_SERVICE_INIT_LISTENER: 1,
        ON_RUNNING_STATE_CHANGED_LISTENER: 2,
        ON_PERMISSION_UPDATE_LISTENER: 3,
      });
    },
    function (e, t, n) {
      var r = n(52).Buffer;
      e.exports = function (e) {
        if (e instanceof Uint8Array) {
          if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength)
            return e.buffer;
          if ("function" == typeof e.buffer.slice)
            return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        }
        if (r.isBuffer(e)) {
          for (
            var t = new Uint8Array(e.length), n = e.length, o = 0;
            o < n;
            o++
          )
            t[o] = e[o];
          return t.buffer;
        }
        throw new Error("Argument must be a Buffer");
      };
    },
    function (e, t) {
      e.exports = require("buffer");
    },
    function (e, t, n) {
      const r = n(1),
        o = new Map();
      let i,
        c,
        s,
        a,
        u = 1;
      ((t.init = function () {
        (r.importantLog("init node timers"),
          (i = setTimeout),
          (s = setInterval),
          (c = clearTimeout),
          (a = clearInterval));
      }),
        (t.setTimeout = function (e, t, ...n) {
          let r = u++,
            c = i(
              (...t) => {
                (e(...t), o.delete(c.__wechatInternalId__));
              },
              t,
              ...n,
            );
          return ((c.__wechatInternalId__ = r), o.set(r, c), r);
        }),
        (t.clearTimeout = function (e) {
          let t = o.get(e);
          (t && c(t), o.delete(e));
        }),
        (t.setInterval = function (e, t, ...n) {
          let r = u++,
            i = s(
              (...t) => {
                e(...t);
              },
              t,
              ...n,
            );
          return ((i.__wechatInternalId__ = r), o.set(r, i), r);
        }),
        (t.clearInterval = function (e) {
          let t = o.get(e);
          (t && a(t), o.delete(e));
        }));
    },
    function (e, t, n) {
      var r = n(55),
        o = process.cwd,
        i = null,
        c = process.env.GRACEFUL_FS_PLATFORM || process.platform;
      process.cwd = function () {
        return (i || (i = o.call(process)), i);
      };
      try {
        process.cwd();
      } catch (e) {}
      if ("function" == typeof process.chdir) {
        var s = process.chdir;
        ((process.chdir = function (e) {
          ((i = null), s.call(process, e));
        }),
          Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, s));
      }
      e.exports = function (e) {
        r.hasOwnProperty("O_SYMLINK") &&
          process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) &&
          (function (e) {
            ((e.lchmod = function (t, n, o) {
              e.open(t, r.O_WRONLY | r.O_SYMLINK, n, function (t, r) {
                t
                  ? o && o(t)
                  : e.fchmod(r, n, function (t) {
                      e.close(r, function (e) {
                        o && o(t || e);
                      });
                    });
              });
            }),
              (e.lchmodSync = function (t, n) {
                var o,
                  i = e.openSync(t, r.O_WRONLY | r.O_SYMLINK, n),
                  c = !0;
                try {
                  ((o = e.fchmodSync(i, n)), (c = !1));
                } finally {
                  if (c)
                    try {
                      e.closeSync(i);
                    } catch (e) {}
                  else e.closeSync(i);
                }
                return o;
              }));
          })(e);
        e.lutimes ||
          (function (e) {
            r.hasOwnProperty("O_SYMLINK") && e.futimes
              ? ((e.lutimes = function (t, n, o, i) {
                  e.open(t, r.O_SYMLINK, function (t, r) {
                    t
                      ? i && i(t)
                      : e.futimes(r, n, o, function (t) {
                          e.close(r, function (e) {
                            i && i(t || e);
                          });
                        });
                  });
                }),
                (e.lutimesSync = function (t, n, o) {
                  var i,
                    c = e.openSync(t, r.O_SYMLINK),
                    s = !0;
                  try {
                    ((i = e.futimesSync(c, n, o)), (s = !1));
                  } finally {
                    if (s)
                      try {
                        e.closeSync(c);
                      } catch (e) {}
                    else e.closeSync(c);
                  }
                  return i;
                }))
              : e.futimes &&
                ((e.lutimes = function (e, t, n, r) {
                  r && process.nextTick(r);
                }),
                (e.lutimesSync = function () {}));
          })(e);
        ((e.chown = o(e.chown)),
          (e.fchown = o(e.fchown)),
          (e.lchown = o(e.lchown)),
          (e.chmod = t(e.chmod)),
          (e.fchmod = t(e.fchmod)),
          (e.lchmod = t(e.lchmod)),
          (e.chownSync = i(e.chownSync)),
          (e.fchownSync = i(e.fchownSync)),
          (e.lchownSync = i(e.lchownSync)),
          (e.chmodSync = n(e.chmodSync)),
          (e.fchmodSync = n(e.fchmodSync)),
          (e.lchmodSync = n(e.lchmodSync)),
          (e.stat = s(e.stat)),
          (e.fstat = s(e.fstat)),
          (e.lstat = s(e.lstat)),
          (e.statSync = a(e.statSync)),
          (e.fstatSync = a(e.fstatSync)),
          (e.lstatSync = a(e.lstatSync)),
          e.chmod &&
            !e.lchmod &&
            ((e.lchmod = function (e, t, n) {
              n && process.nextTick(n);
            }),
            (e.lchmodSync = function () {})));
        e.chown &&
          !e.lchown &&
          ((e.lchown = function (e, t, n, r) {
            r && process.nextTick(r);
          }),
          (e.lchownSync = function () {}));
        "win32" === c &&
          (e.rename =
            "function" != typeof e.rename
              ? e.rename
              : (function (t) {
                  function n(n, r, o) {
                    var i = Date.now(),
                      c = 0;
                    t(n, r, function s(a) {
                      if (
                        a &&
                        ("EACCES" === a.code ||
                          "EPERM" === a.code ||
                          "EBUSY" === a.code) &&
                        Date.now() - i < 6e4
                      )
                        return (
                          setTimeout(function () {
                            e.stat(r, function (e, i) {
                              e && "ENOENT" === e.code ? t(n, r, s) : o(a);
                            });
                          }, c),
                          void (c < 100 && (c += 10))
                        );
                      o && o(a);
                    });
                  }
                  return (
                    Object.setPrototypeOf && Object.setPrototypeOf(n, t),
                    n
                  );
                })(e.rename));
        function t(t) {
          return t
            ? function (n, r, o) {
                return t.call(e, n, r, function (e) {
                  (u(e) && (e = null), o && o.apply(this, arguments));
                });
              }
            : t;
        }
        function n(t) {
          return t
            ? function (n, r) {
                try {
                  return t.call(e, n, r);
                } catch (e) {
                  if (!u(e)) throw e;
                }
              }
            : t;
        }
        function o(t) {
          return t
            ? function (n, r, o, i) {
                return t.call(e, n, r, o, function (e) {
                  (u(e) && (e = null), i && i.apply(this, arguments));
                });
              }
            : t;
        }
        function i(t) {
          return t
            ? function (n, r, o) {
                try {
                  return t.call(e, n, r, o);
                } catch (e) {
                  if (!u(e)) throw e;
                }
              }
            : t;
        }
        function s(t) {
          return t
            ? function (n, r, o) {
                function i(e, t) {
                  (t &&
                    (t.uid < 0 && (t.uid += 4294967296),
                    t.gid < 0 && (t.gid += 4294967296)),
                    o && o.apply(this, arguments));
                }
                return (
                  "function" == typeof r && ((o = r), (r = null)),
                  r ? t.call(e, n, r, i) : t.call(e, n, i)
                );
              }
            : t;
        }
        function a(t) {
          return t
            ? function (n, r) {
                var o = r ? t.call(e, n, r) : t.call(e, n);
                return (
                  o &&
                    (o.uid < 0 && (o.uid += 4294967296),
                    o.gid < 0 && (o.gid += 4294967296)),
                  o
                );
              }
            : t;
        }
        function u(e) {
          if (!e) return !0;
          if ("ENOSYS" === e.code) return !0;
          var t = !process.getuid || 0 !== process.getuid();
          return !(!t || ("EINVAL" !== e.code && "EPERM" !== e.code));
        }
        ((e.read =
          "function" != typeof e.read
            ? e.read
            : (function (t) {
                function n(n, r, o, i, c, s) {
                  var a;
                  if (s && "function" == typeof s) {
                    var u = 0;
                    a = function (l, f, p) {
                      if (l && "EAGAIN" === l.code && u < 10)
                        return (u++, t.call(e, n, r, o, i, c, a));
                      s.apply(this, arguments);
                    };
                  }
                  return t.call(e, n, r, o, i, c, a);
                }
                return (
                  Object.setPrototypeOf && Object.setPrototypeOf(n, t),
                  n
                );
              })(e.read)),
          (e.readSync =
            "function" != typeof e.readSync
              ? e.readSync
              : (function (t) {
                  return function (n, r, o, i, c) {
                    for (var s = 0; ; )
                      try {
                        return t.call(e, n, r, o, i, c);
                      } catch (e) {
                        if ("EAGAIN" === e.code && s < 10) {
                          s++;
                          continue;
                        }
                        throw e;
                      }
                  };
                })(e.readSync)));
      };
    },
    function (e, t) {
      e.exports = require("constants");
    },
    function (e, t, n) {
      var r = n(57).Stream;
      e.exports = function (e) {
        return {
          ReadStream: function t(n, o) {
            if (!(this instanceof t)) return new t(n, o);
            r.call(this);
            var i = this;
            this.path = n;
            this.fd = null;
            this.readable = !0;
            this.paused = !1;
            this.flags = "r";
            this.mode = 438;
            this.bufferSize = 65536;
            o = o || {};
            var c = Object.keys(o);
            for (var s = 0, a = c.length; s < a; s++) {
              var u = c[s];
              this[u] = o[u];
            }
            this.encoding && this.setEncoding(this.encoding);
            if (void 0 !== this.start) {
              if ("number" != typeof this.start)
                throw TypeError("start must be a Number");
              if (void 0 === this.end) this.end = 1 / 0;
              else if ("number" != typeof this.end)
                throw TypeError("end must be a Number");
              if (this.start > this.end)
                throw new Error("start must be <= end");
              this.pos = this.start;
            }
            if (null !== this.fd)
              return void process.nextTick(function () {
                i._read();
              });
            e.open(this.path, this.flags, this.mode, function (e, t) {
              if (e) return (i.emit("error", e), void (i.readable = !1));
              ((i.fd = t), i.emit("open", t), i._read());
            });
          },
          WriteStream: function t(n, o) {
            if (!(this instanceof t)) return new t(n, o);
            r.call(this);
            this.path = n;
            this.fd = null;
            this.writable = !0;
            this.flags = "w";
            this.encoding = "binary";
            this.mode = 438;
            this.bytesWritten = 0;
            o = o || {};
            var i = Object.keys(o);
            for (var c = 0, s = i.length; c < s; c++) {
              var a = i[c];
              this[a] = o[a];
            }
            if (void 0 !== this.start) {
              if ("number" != typeof this.start)
                throw TypeError("start must be a Number");
              if (this.start < 0) throw new Error("start must be >= zero");
              this.pos = this.start;
            }
            this.busy = !1;
            this._queue = [];
            null === this.fd &&
              ((this._open = e.open),
              this._queue.push([
                this._open,
                this.path,
                this.flags,
                this.mode,
                void 0,
              ]),
              this.flush());
          },
        };
      };
    },
    function (e, t) {
      e.exports = require("stream");
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        if (null === e || "object" != typeof e) return e;
        if (e instanceof Object) var t = { __proto__: r(e) };
        else var t = Object.create(null);
        return (
          Object.getOwnPropertyNames(e).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          }),
          t
        );
      };
      var r =
        Object.getPrototypeOf ||
        function (e) {
          return e.__proto__;
        };
    },
    function (e, t, n) {
      "use strict";
      const r = n(5),
        o = n(2),
        i = n(7).mkdirsSync,
        c = n(27).utimesMillisSync,
        s = Symbol("notExist");
      function a(e, t, n, i) {
        if (!i.filter || i.filter(t, n))
          return (function (e, t, n, i) {
            const c = (i.dereference ? r.statSync : r.lstatSync)(t);
            if (c.isDirectory())
              return (function (e, t, n, o, i) {
                if (t === s)
                  return (function (e, t, n, o) {
                    return (r.mkdirSync(n), l(t, n, o), r.chmodSync(n, e.mode));
                  })(e, n, o, i);
                if (t && !t.isDirectory())
                  throw new Error(
                    `Cannot overwrite non-directory '${o}' with directory '${n}'.`,
                  );
                return l(n, o, i);
              })(c, e, t, n, i);
            if (c.isFile() || c.isCharacterDevice() || c.isBlockDevice())
              return (function (e, t, n, o, i) {
                return t === s
                  ? u(e, n, o, i)
                  : (function (e, t, n, o) {
                      if (o.overwrite) return (r.unlinkSync(n), u(e, t, n, o));
                      if (o.errorOnExist)
                        throw new Error(`'${n}' already exists`);
                    })(e, n, o, i);
              })(c, e, t, n, i);
            if (c.isSymbolicLink())
              return (function (e, t, n, i) {
                let c = r.readlinkSync(t);
                i.dereference && (c = o.resolve(process.cwd(), c));
                if (e === s) return r.symlinkSync(c, n);
                {
                  let e;
                  try {
                    e = r.readlinkSync(n);
                  } catch (e) {
                    if ("EINVAL" === e.code || "UNKNOWN" === e.code)
                      return r.symlinkSync(c, n);
                    throw e;
                  }
                  if (
                    (i.dereference && (e = o.resolve(process.cwd(), e)),
                    f(c, e))
                  )
                    throw new Error(
                      `Cannot copy '${c}' to a subdirectory of itself, '${e}'.`,
                    );
                  if (r.statSync(n).isDirectory() && f(e, c))
                    throw new Error(`Cannot overwrite '${e}' with '${c}'.`);
                  return (function (e, t) {
                    return (r.unlinkSync(t), r.symlinkSync(e, t));
                  })(c, n);
                }
              })(e, t, n, i);
          })(e, t, n, i);
      }
      function u(e, t, o, i) {
        return "function" == typeof r.copyFileSync
          ? (r.copyFileSync(t, o),
            r.chmodSync(o, e.mode),
            i.preserveTimestamps ? c(o, e.atime, e.mtime) : void 0)
          : (function (e, t, o, i) {
              const c = n(28)(65536),
                s = r.openSync(t, "r"),
                a = r.openSync(o, "w", e.mode);
              let u = 0;
              for (; u < e.size; ) {
                const e = r.readSync(s, c, 0, 65536, u);
                (r.writeSync(a, c, 0, e), (u += e));
              }
              i.preserveTimestamps && r.futimesSync(a, e.atime, e.mtime);
              (r.closeSync(s), r.closeSync(a));
            })(e, t, o, i);
      }
      function l(e, t, n) {
        r.readdirSync(e).forEach((r) =>
          (function (e, t, n, r) {
            const i = o.join(t, e),
              c = o.join(n, e);
            return a(p(i, c), i, c, r);
          })(r, e, t, n),
        );
      }
      function f(e, t) {
        const n = o.resolve(e).split(o.sep),
          r = o.resolve(t).split(o.sep);
        return n.reduce((e, t, n) => e && r[n] === t, !0);
      }
      function p(e, t) {
        const { srcStat: n, destStat: o } = (function (e, t) {
          const n = r.statSync(e);
          let o;
          try {
            o = r.statSync(t);
          } catch (e) {
            if ("ENOENT" === e.code) return { srcStat: n, destStat: s };
            throw e;
          }
          return { srcStat: n, destStat: o };
        })(e, t);
        if (o.ino && o.ino === n.ino)
          throw new Error("Source and destination must not be the same.");
        if (n.isDirectory() && f(e, t))
          throw new Error(
            `Cannot copy '${e}' to a subdirectory of itself, '${t}'.`,
          );
        return o;
      }
      e.exports = function (e, t, n) {
        ("function" == typeof n && (n = { filter: n }),
          ((n = n || {}).clobber = !("clobber" in n && !n.clobber)),
          (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
          n.preserveTimestamps &&
            "ia32" === process.arch &&
            console.warn(
              "fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269",
            ));
        const c = p(e, t);
        if (n.filter && !n.filter(e, t)) return;
        const s = o.dirname(t);
        return (r.existsSync(s) || i(s), a(c, e, t, n));
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(5),
        o = n(2),
        i = n(26).invalidWin32Path,
        c = parseInt("0777", 8);
      e.exports = function e(t, n, s, a) {
        if (
          ("function" == typeof n
            ? ((s = n), (n = {}))
            : (n && "object" == typeof n) || (n = { mode: n }),
          "win32" === process.platform && i(t))
        ) {
          const e = new Error(t + " contains invalid WIN32 path characters.");
          return ((e.code = "EINVAL"), s(e));
        }
        let u = n.mode;
        const l = n.fs || r;
        (void 0 === u && (u = c & ~process.umask()),
          a || (a = null),
          (s = s || function () {}),
          (t = o.resolve(t)),
          l.mkdir(t, u, (r) => {
            if (!r) return s(null, (a = a || t));
            switch (r.code) {
              case "ENOENT":
                if (o.dirname(t) === t) return s(r);
                e(o.dirname(t), n, (r, o) => {
                  r ? s(r, o) : e(t, n, s, o);
                });
                break;
              default:
                l.stat(t, (e, t) => {
                  e || !t.isDirectory() ? s(r, a) : s(null, a);
                });
            }
          }));
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(5),
        o = n(2),
        i = n(26).invalidWin32Path,
        c = parseInt("0777", 8);
      e.exports = function e(t, n, s) {
        (n && "object" == typeof n) || (n = { mode: n });
        let a = n.mode;
        const u = n.fs || r;
        if ("win32" === process.platform && i(t)) {
          const e = new Error(t + " contains invalid WIN32 path characters.");
          throw ((e.code = "EINVAL"), e);
        }
        (void 0 === a && (a = c & ~process.umask()),
          s || (s = null),
          (t = o.resolve(t)));
        try {
          (u.mkdirSync(t, a), (s = s || t));
        } catch (r) {
          if ("ENOENT" === r.code) {
            if (o.dirname(t) === t) throw r;
            e(t, n, (s = e(o.dirname(t), n, s)));
          } else {
            let e;
            try {
              e = u.statSync(t);
            } catch (e) {
              throw r;
            }
            if (!e.isDirectory()) throw r;
          }
        }
        return s;
      };
    },
    function (e, t) {
      e.exports = require("os");
    },
    function (e, t, n) {
      "use strict";
      const r = n(5),
        o = n(2),
        i = n(7).mkdirs,
        c = n(9).pathExists,
        s = n(27).utimesMillis,
        a = Symbol("notExist");
      function u(e, t, n, r, s) {
        const a = o.dirname(n);
        c(a, (o, c) =>
          o
            ? s(o)
            : c
              ? f(e, t, n, r, s)
              : void i(a, (o) => (o ? s(o) : f(e, t, n, r, s))),
        );
      }
      function l(e, t, n, r, o, i) {
        Promise.resolve(o.filter(n, r)).then(
          (c) => (c ? (t ? e(t, n, r, o, i) : e(n, r, o, i)) : i()),
          (e) => i(e),
        );
      }
      function f(e, t, n, r, o) {
        return r.filter ? l(p, e, t, n, r, o) : p(e, t, n, r, o);
      }
      function p(e, t, n, i, c) {
        (i.dereference ? r.stat : r.lstat)(t, (s, u) =>
          s
            ? c(s)
            : u.isDirectory()
              ? (function (e, t, n, o, i, c) {
                  if (t === a)
                    return (function (e, t, n, o, i) {
                      r.mkdir(n, (c) => {
                        if (c) return i(c);
                        y(t, n, o, (t) => (t ? i(t) : r.chmod(n, e.mode, i)));
                      });
                    })(e, n, o, i, c);
                  if (t && !t.isDirectory())
                    return c(
                      new Error(
                        `Cannot overwrite non-directory '${o}' with directory '${n}'.`,
                      ),
                    );
                  return y(n, o, i, c);
                })(u, e, t, n, i, c)
              : u.isFile() || u.isCharacterDevice() || u.isBlockDevice()
                ? (function (e, t, n, o, i, c) {
                    return t === a
                      ? d(e, n, o, i, c)
                      : (function (e, t, n, o, i) {
                          if (!o.overwrite)
                            return o.errorOnExist
                              ? i(new Error(`'${n}' already exists`))
                              : i();
                          r.unlink(n, (r) => (r ? i(r) : d(e, t, n, o, i)));
                        })(e, n, o, i, c);
                  })(u, e, t, n, i, c)
                : u.isSymbolicLink()
                  ? (function (e, t, n, i, c) {
                      r.readlink(t, (t, s) =>
                        t
                          ? c(t)
                          : (i.dereference && (s = o.resolve(process.cwd(), s)),
                            e === a
                              ? r.symlink(s, n, c)
                              : void r.readlink(n, (t, a) =>
                                  t
                                    ? "EINVAL" === t.code ||
                                      "UNKNOWN" === t.code
                                      ? r.symlink(s, n, c)
                                      : c(t)
                                    : (i.dereference &&
                                        (a = o.resolve(process.cwd(), a)),
                                      m(s, a)
                                        ? c(
                                            new Error(
                                              `Cannot copy '${s}' to a subdirectory of itself, '${a}'.`,
                                            ),
                                          )
                                        : e.isDirectory() && m(a, s)
                                          ? c(
                                              new Error(
                                                `Cannot overwrite '${a}' with '${s}'.`,
                                              ),
                                            )
                                          : (function (e, t, n) {
                                              r.unlink(t, (o) =>
                                                o ? n(o) : r.symlink(e, t, n),
                                              );
                                            })(s, n, c)),
                                )),
                      );
                    })(e, t, n, i, c)
                  : void 0,
        );
      }
      function d(e, t, n, o, i) {
        return "function" == typeof r.copyFile
          ? r.copyFile(t, n, (t) => (t ? i(t) : h(e, n, o, i)))
          : (function (e, t, n, o, i) {
              const c = r.createReadStream(t);
              c.on("error", (e) => i(e)).once("open", () => {
                const t = r.createWriteStream(n, { mode: e.mode });
                t.on("error", (e) => i(e))
                  .on("open", () => c.pipe(t))
                  .once("close", () => h(e, n, o, i));
              });
            })(e, t, n, o, i);
      }
      function h(e, t, n, o) {
        r.chmod(t, e.mode, (r) =>
          r ? o(r) : n.preserveTimestamps ? s(t, e.atime, e.mtime, o) : o(),
        );
      }
      function y(e, t, n, o) {
        r.readdir(e, (r, i) => (r ? o(r) : S(i, e, t, n, o)));
      }
      function S(e, t, n, r, i) {
        const c = e.pop();
        return c
          ? (function (e, t, n, r, i, c) {
              const s = o.join(n, t),
                a = o.join(r, t);
              _(s, a, (t, o) => {
                if (t) return c(t);
                f(o, s, a, i, (t) => (t ? c(t) : S(e, n, r, i, c)));
              });
            })(e, c, t, n, r, i)
          : i();
      }
      function m(e, t) {
        const n = o.resolve(e).split(o.sep),
          r = o.resolve(t).split(o.sep);
        return n.reduce((e, t, n) => e && r[n] === t, !0);
      }
      function _(e, t, n) {
        !(function (e, t, n) {
          r.stat(e, (e, o) => {
            if (e) return n(e);
            r.stat(t, (e, t) =>
              e
                ? "ENOENT" === e.code
                  ? n(null, { srcStat: o, destStat: a })
                  : n(e)
                : n(null, { srcStat: o, destStat: t }),
            );
          });
        })(e, t, (r, o) => {
          if (r) return n(r);
          const { srcStat: i, destStat: c } = o;
          return c.ino && c.ino === i.ino
            ? n(new Error("Source and destination must not be the same."))
            : i.isDirectory() && m(e, t)
              ? n(
                  new Error(
                    `Cannot copy '${e}' to a subdirectory of itself, '${t}'.`,
                  ),
                )
              : n(null, c);
        });
      }
      e.exports = function (e, t, n, r) {
        ("function" != typeof n || r
          ? "function" == typeof n && (n = { filter: n })
          : ((r = n), (n = {})),
          (r = r || function () {}),
          ((n = n || {}).clobber = !("clobber" in n && !n.clobber)),
          (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
          n.preserveTimestamps &&
            "ia32" === process.arch &&
            console.warn(
              "fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269",
            ),
          _(e, t, (o, i) =>
            o ? r(o) : n.filter ? l(u, i, e, t, n, r) : u(i, e, t, n, r),
          ));
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(0),
        i = n(2),
        c = n(7),
        s = n(16),
        a = r(function (e, t) {
          ((t = t || function () {}),
            o.readdir(e, (n, r) => {
              if (n) return c.mkdirs(e, t);
              ((r = r.map((t) => i.join(e, t))),
                (function e() {
                  const n = r.pop();
                  if (!n) return t();
                  s.remove(n, (n) => {
                    if (n) return t(n);
                    e();
                  });
                })());
            }));
        });
      function u(e) {
        let t;
        try {
          t = o.readdirSync(e);
        } catch (t) {
          return c.mkdirsSync(e);
        }
        t.forEach((t) => {
          ((t = i.join(e, t)), s.removeSync(t));
        });
      }
      e.exports = {
        emptyDirSync: u,
        emptydirSync: u,
        emptyDir: a,
        emptydir: a,
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(5),
        o = n(2),
        i = n(24),
        c = "win32" === process.platform;
      function s(e) {
        (["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(
          (t) => {
            ((e[t] = e[t] || r[t]), (e[(t += "Sync")] = e[t] || r[t]));
          },
        ),
          (e.maxBusyTries = e.maxBusyTries || 3));
      }
      function a(e, t, n) {
        let r = 0;
        ("function" == typeof t && ((n = t), (t = {})),
          i(e, "rimraf: missing path"),
          i.strictEqual(typeof e, "string", "rimraf: path should be a string"),
          i.strictEqual(
            typeof n,
            "function",
            "rimraf: callback function required",
          ),
          i(t, "rimraf: invalid options argument provided"),
          i.strictEqual(typeof t, "object", "rimraf: options should be object"),
          s(t),
          u(e, t, function o(i) {
            if (i) {
              if (
                ("EBUSY" === i.code ||
                  "ENOTEMPTY" === i.code ||
                  "EPERM" === i.code) &&
                r < t.maxBusyTries
              ) {
                return (r++, setTimeout(() => u(e, t, o), 100 * r));
              }
              "ENOENT" === i.code && (i = null);
            }
            n(i);
          }));
      }
      function u(e, t, n) {
        (i(e),
          i(t),
          i("function" == typeof n),
          t.lstat(e, (r, o) =>
            r && "ENOENT" === r.code
              ? n(null)
              : r && "EPERM" === r.code && c
                ? l(e, t, r, n)
                : o && o.isDirectory()
                  ? p(e, t, r, n)
                  : void t.unlink(e, (r) => {
                      if (r) {
                        if ("ENOENT" === r.code) return n(null);
                        if ("EPERM" === r.code)
                          return c ? l(e, t, r, n) : p(e, t, r, n);
                        if ("EISDIR" === r.code) return p(e, t, r, n);
                      }
                      return n(r);
                    }),
          ));
      }
      function l(e, t, n, r) {
        (i(e),
          i(t),
          i("function" == typeof r),
          n && i(n instanceof Error),
          t.chmod(e, 438, (o) => {
            o
              ? r("ENOENT" === o.code ? null : n)
              : t.stat(e, (o, i) => {
                  o
                    ? r("ENOENT" === o.code ? null : n)
                    : i.isDirectory()
                      ? p(e, t, n, r)
                      : t.unlink(e, r);
                });
          }));
      }
      function f(e, t, n) {
        let r;
        (i(e), i(t), n && i(n instanceof Error));
        try {
          t.chmodSync(e, 438);
        } catch (e) {
          if ("ENOENT" === e.code) return;
          throw n;
        }
        try {
          r = t.statSync(e);
        } catch (e) {
          if ("ENOENT" === e.code) return;
          throw n;
        }
        r.isDirectory() ? h(e, t, n) : t.unlinkSync(e);
      }
      function p(e, t, n, r) {
        (i(e),
          i(t),
          n && i(n instanceof Error),
          i("function" == typeof r),
          t.rmdir(e, (c) => {
            !c ||
            ("ENOTEMPTY" !== c.code &&
              "EEXIST" !== c.code &&
              "EPERM" !== c.code)
              ? c && "ENOTDIR" === c.code
                ? r(n)
                : r(c)
              : (function (e, t, n) {
                  (i(e),
                    i(t),
                    i("function" == typeof n),
                    t.readdir(e, (r, i) => {
                      if (r) return n(r);
                      let c,
                        s = i.length;
                      if (0 === s) return t.rmdir(e, n);
                      i.forEach((r) => {
                        a(o.join(e, r), t, (r) => {
                          if (!c)
                            return r
                              ? n((c = r))
                              : void (0 == --s && t.rmdir(e, n));
                        });
                      });
                    }));
                })(e, t, r);
          }));
      }
      function d(e, t) {
        let n;
        (s((t = t || {})),
          i(e, "rimraf: missing path"),
          i.strictEqual(typeof e, "string", "rimraf: path should be a string"),
          i(t, "rimraf: missing options"),
          i.strictEqual(
            typeof t,
            "object",
            "rimraf: options should be object",
          ));
        try {
          n = t.lstatSync(e);
        } catch (n) {
          if ("ENOENT" === n.code) return;
          "EPERM" === n.code && c && f(e, t, n);
        }
        try {
          n && n.isDirectory() ? h(e, t, null) : t.unlinkSync(e);
        } catch (n) {
          if ("ENOENT" === n.code) return;
          if ("EPERM" === n.code) return c ? f(e, t, n) : h(e, t, n);
          if ("EISDIR" !== n.code) throw n;
          h(e, t, n);
        }
      }
      function h(e, t, n) {
        (i(e), i(t), n && i(n instanceof Error));
        try {
          t.rmdirSync(e);
        } catch (r) {
          if ("ENOTDIR" === r.code) throw n;
          if (
            "ENOTEMPTY" === r.code ||
            "EEXIST" === r.code ||
            "EPERM" === r.code
          )
            !(function (e, t) {
              if (
                (i(e),
                i(t),
                t.readdirSync(e).forEach((n) => d(o.join(e, n), t)),
                !c)
              ) {
                const n = t.rmdirSync(e, t);
                return n;
              }
              {
                const n = Date.now();
                do {
                  try {
                    const n = t.rmdirSync(e, t);
                    return n;
                  } catch (e) {}
                } while (Date.now() - n < 500);
              }
            })(e, t);
          else if ("ENOENT" !== r.code) throw r;
        }
      }
      ((e.exports = a), (a.sync = d));
    },
    function (e, t, n) {
      "use strict";
      const r = n(67),
        o = n(68),
        i = n(69);
      e.exports = {
        createFile: r.createFile,
        createFileSync: r.createFileSync,
        ensureFile: r.createFile,
        ensureFileSync: r.createFileSync,
        createLink: o.createLink,
        createLinkSync: o.createLinkSync,
        ensureLink: o.createLink,
        ensureLinkSync: o.createLinkSync,
        createSymlink: i.createSymlink,
        createSymlinkSync: i.createSymlinkSync,
        ensureSymlink: i.createSymlink,
        ensureSymlinkSync: i.createSymlinkSync,
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(2),
        i = n(5),
        c = n(7),
        s = n(9).pathExists;
      e.exports = {
        createFile: r(function (e, t) {
          function n() {
            i.writeFile(e, "", (e) => {
              if (e) return t(e);
              t();
            });
          }
          i.stat(e, (r, i) => {
            if (!r && i.isFile()) return t();
            const a = o.dirname(e);
            s(a, (e, r) =>
              e
                ? t(e)
                : r
                  ? n()
                  : void c.mkdirs(a, (e) => {
                      if (e) return t(e);
                      n();
                    }),
            );
          });
        }),
        createFileSync: function (e) {
          let t;
          try {
            t = i.statSync(e);
          } catch (e) {}
          if (t && t.isFile()) return;
          const n = o.dirname(e);
          (i.existsSync(n) || c.mkdirsSync(n), i.writeFileSync(e, ""));
        },
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(2),
        i = n(5),
        c = n(7),
        s = n(9).pathExists;
      e.exports = {
        createLink: r(function (e, t, n) {
          function r(e, t) {
            i.link(e, t, (e) => {
              if (e) return n(e);
              n(null);
            });
          }
          s(t, (a, u) =>
            a
              ? n(a)
              : u
                ? n(null)
                : void i.lstat(e, (i) => {
                    if (i)
                      return (
                        (i.message = i.message.replace("lstat", "ensureLink")),
                        n(i)
                      );
                    const a = o.dirname(t);
                    s(a, (o, i) =>
                      o
                        ? n(o)
                        : i
                          ? r(e, t)
                          : void c.mkdirs(a, (o) => {
                              if (o) return n(o);
                              r(e, t);
                            }),
                    );
                  }),
          );
        }),
        createLinkSync: function (e, t) {
          if (i.existsSync(t)) return;
          try {
            i.lstatSync(e);
          } catch (e) {
            throw ((e.message = e.message.replace("lstat", "ensureLink")), e);
          }
          const n = o.dirname(t);
          return i.existsSync(n)
            ? i.linkSync(e, t)
            : (c.mkdirsSync(n), i.linkSync(e, t));
        },
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(2),
        i = n(5),
        c = n(7),
        s = c.mkdirs,
        a = c.mkdirsSync,
        u = n(70),
        l = u.symlinkPaths,
        f = u.symlinkPathsSync,
        p = n(71),
        d = p.symlinkType,
        h = p.symlinkTypeSync,
        y = n(9).pathExists;
      e.exports = {
        createSymlink: r(function (e, t, n, r) {
          ((r = "function" == typeof n ? n : r),
            (n = "function" != typeof n && n),
            y(t, (c, a) =>
              c
                ? r(c)
                : a
                  ? r(null)
                  : void l(e, t, (c, a) => {
                      if (c) return r(c);
                      ((e = a.toDst),
                        d(a.toCwd, n, (n, c) => {
                          if (n) return r(n);
                          const a = o.dirname(t);
                          y(a, (n, o) =>
                            n
                              ? r(n)
                              : o
                                ? i.symlink(e, t, c, r)
                                : void s(a, (n) => {
                                    if (n) return r(n);
                                    i.symlink(e, t, c, r);
                                  }),
                          );
                        }));
                    }),
            ));
        }),
        createSymlinkSync: function (e, t, n) {
          if (i.existsSync(t)) return;
          const r = f(e, t);
          ((e = r.toDst), (n = h(r.toCwd, n)));
          const c = o.dirname(t);
          return i.existsSync(c)
            ? i.symlinkSync(e, t, n)
            : (a(c), i.symlinkSync(e, t, n));
        },
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(2),
        o = n(5),
        i = n(9).pathExists;
      e.exports = {
        symlinkPaths: function (e, t, n) {
          if (r.isAbsolute(e))
            return o.lstat(e, (t) =>
              t
                ? ((t.message = t.message.replace("lstat", "ensureSymlink")),
                  n(t))
                : n(null, { toCwd: e, toDst: e }),
            );
          {
            const c = r.dirname(t),
              s = r.join(c, e);
            return i(s, (t, i) =>
              t
                ? n(t)
                : i
                  ? n(null, { toCwd: s, toDst: e })
                  : o.lstat(e, (t) =>
                      t
                        ? ((t.message = t.message.replace(
                            "lstat",
                            "ensureSymlink",
                          )),
                          n(t))
                        : n(null, { toCwd: e, toDst: r.relative(c, e) }),
                    ),
            );
          }
        },
        symlinkPathsSync: function (e, t) {
          let n;
          if (r.isAbsolute(e)) {
            if (!(n = o.existsSync(e)))
              throw new Error("absolute srcpath does not exist");
            return { toCwd: e, toDst: e };
          }
          {
            const i = r.dirname(t),
              c = r.join(i, e);
            if ((n = o.existsSync(c))) return { toCwd: c, toDst: e };
            if (!(n = o.existsSync(e)))
              throw new Error("relative srcpath does not exist");
            return { toCwd: e, toDst: r.relative(i, e) };
          }
        },
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(5);
      e.exports = {
        symlinkType: function (e, t, n) {
          if (
            ((n = "function" == typeof t ? t : n),
            (t = "function" != typeof t && t))
          )
            return n(null, t);
          r.lstat(e, (e, r) => {
            if (e) return n(null, "file");
            ((t = r && r.isDirectory() ? "dir" : "file"), n(null, t));
          });
        },
        symlinkTypeSync: function (e, t) {
          let n;
          if (t) return t;
          try {
            n = r.lstatSync(e);
          } catch (e) {
            return "file";
          }
          return n && n.isDirectory() ? "dir" : "file";
        },
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(20);
      ((o.outputJson = r(n(74))),
        (o.outputJsonSync = n(75)),
        (o.outputJSON = o.outputJson),
        (o.outputJSONSync = o.outputJsonSync),
        (o.writeJSON = o.writeJson),
        (o.writeJSONSync = o.writeJsonSync),
        (o.readJSON = o.readJson),
        (o.readJSONSync = o.readJsonSync),
        (e.exports = o));
    },
    function (e, t, n) {
      var r;
      try {
        r = n(5);
      } catch (e) {
        r = n(0);
      }
      function o(e, t) {
        var n,
          r = "\n";
        return (
          "object" == typeof t &&
            null !== t &&
            (t.spaces && (n = t.spaces), t.EOL && (r = t.EOL)),
          JSON.stringify(e, t ? t.replacer : null, n).replace(/\n/g, r) + r
        );
      }
      function i(e) {
        return (
          Buffer.isBuffer(e) && (e = e.toString("utf8")),
          (e = e.replace(/^\uFEFF/, ""))
        );
      }
      var c = {
        readFile: function (e, t, n) {
          (null == n && ((n = t), (t = {})),
            "string" == typeof t && (t = { encoding: t }));
          var o = (t = t || {}).fs || r,
            c = !0;
          ("throws" in t && (c = t.throws),
            o.readFile(e, t, function (r, o) {
              if (r) return n(r);
              var s;
              o = i(o);
              try {
                s = JSON.parse(o, t ? t.reviver : null);
              } catch (t) {
                return c
                  ? ((t.message = e + ": " + t.message), n(t))
                  : n(null, null);
              }
              n(null, s);
            }));
        },
        readFileSync: function (e, t) {
          "string" == typeof (t = t || {}) && (t = { encoding: t });
          var n = t.fs || r,
            o = !0;
          "throws" in t && (o = t.throws);
          try {
            var c = n.readFileSync(e, t);
            return ((c = i(c)), JSON.parse(c, t.reviver));
          } catch (t) {
            if (o) throw ((t.message = e + ": " + t.message), t);
            return null;
          }
        },
        writeFile: function (e, t, n, i) {
          null == i && ((i = n), (n = {}));
          var c = (n = n || {}).fs || r,
            s = "";
          try {
            s = o(t, n);
          } catch (e) {
            return void (i && i(e, null));
          }
          c.writeFile(e, s, n, i);
        },
        writeFileSync: function (e, t, n) {
          var i = (n = n || {}).fs || r,
            c = o(t, n);
          return i.writeFileSync(e, c, n);
        },
      };
      e.exports = c;
    },
    function (e, t, n) {
      "use strict";
      const r = n(2),
        o = n(7),
        i = n(9).pathExists,
        c = n(20);
      e.exports = function (e, t, n, s) {
        "function" == typeof n && ((s = n), (n = {}));
        const a = r.dirname(e);
        i(a, (r, i) =>
          r
            ? s(r)
            : i
              ? c.writeJson(e, t, n, s)
              : void o.mkdirs(a, (r) => {
                  if (r) return s(r);
                  c.writeJson(e, t, n, s);
                }),
        );
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(5),
        o = n(2),
        i = n(7),
        c = n(20);
      e.exports = function (e, t, n) {
        const s = o.dirname(e);
        (r.existsSync(s) || i.mkdirsSync(s), c.writeJsonSync(e, t, n));
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(5),
        o = n(2),
        i = n(25).copySync,
        c = n(16).removeSync,
        s = n(7).mkdirsSync,
        a = n(28);
      function u(e, t, n) {
        return r.statSync(e).isDirectory()
          ? (function (e, t, n) {
              const r = { overwrite: !1 };
              n ? (c(t), o()) : o();
              function o() {
                return (i(e, t, r), c(e));
              }
            })(e, t, n)
          : (function (e, t, n) {
              const o = a(65536),
                i = n ? "w" : "wx",
                c = r.openSync(e, "r"),
                s = r.fstatSync(c),
                u = r.openSync(t, i, s.mode);
              let l = 0;
              for (; l < s.size; ) {
                const e = r.readSync(c, o, 0, 65536, l);
                (r.writeSync(u, o, 0, e), (l += e));
              }
              return (r.closeSync(c), r.closeSync(u), r.unlinkSync(e));
            })(e, t, n);
      }
      e.exports = {
        moveSync: function e(t, n, i) {
          const a = (i = i || {}).overwrite || i.clobber || !1;
          if (((t = o.resolve(t)), (n = o.resolve(n)), t === n))
            return r.accessSync(t);
          if (
            (function (e, t) {
              try {
                return (
                  r.statSync(e).isDirectory() &&
                  e !== t &&
                  t.indexOf(e) > -1 &&
                  t.split(o.dirname(e) + o.sep)[1].split(o.sep)[0] ===
                    o.basename(e)
                );
              } catch (e) {
                return !1;
              }
            })(t, n)
          )
            throw new Error(`Cannot move '${t}' into itself '${n}'.`);
          (s(o.dirname(n)),
            (function () {
              if (a)
                try {
                  r.renameSync(t, n);
                } catch (r) {
                  if (
                    "ENOTEMPTY" === r.code ||
                    "EEXIST" === r.code ||
                    "EPERM" === r.code
                  )
                    return (c(n), (i.overwrite = !1), e(t, n, i));
                  if ("EXDEV" !== r.code) throw r;
                  return u(t, n, a);
                }
              else
                try {
                  (r.linkSync(t, n), r.unlinkSync(t));
                } catch (e) {
                  if (
                    "EXDEV" === e.code ||
                    "EISDIR" === e.code ||
                    "EPERM" === e.code ||
                    "ENOTSUP" === e.code
                  )
                    return u(t, n, a);
                  throw e;
                }
            })());
        },
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(5),
        i = n(2),
        c = n(29).copy,
        s = n(16).remove,
        a = n(7).mkdirp,
        u = n(9).pathExists;
      function l(e, t, n, r) {
        o.rename(e, t, (o) =>
          o
            ? "EXDEV" !== o.code
              ? r(o)
              : (function (e, t, n, r) {
                  c(e, t, { overwrite: n, errorOnExist: !0 }, (t) =>
                    t ? r(t) : s(e, r),
                  );
                })(e, t, n, r)
            : r(),
        );
      }
      e.exports = {
        move: r(function (e, t, n, r) {
          "function" == typeof n && ((r = n), (n = {}));
          const c = n.overwrite || n.clobber || !1;
          if (((e = i.resolve(e)), (t = i.resolve(t)), e === t))
            return o.access(e, r);
          o.stat(e, (n, o) =>
            n
              ? r(n)
              : o.isDirectory() &&
                  (function (e, t) {
                    const n = e.split(i.sep),
                      r = t.split(i.sep);
                    return n.reduce((e, t, n) => e && r[n] === t, !0);
                  })(e, t)
                ? r(
                    new Error(
                      `Cannot move '${e}' to a subdirectory of itself, '${t}'.`,
                    ),
                  )
                : void a(i.dirname(t), (n) =>
                    n
                      ? r(n)
                      : (function (e, t, n, r) {
                          if (n) return s(t, (o) => (o ? r(o) : l(e, t, n, r)));
                          u(t, (o, i) =>
                            o
                              ? r(o)
                              : i
                                ? r(new Error("dest already exists."))
                                : l(e, t, n, r),
                          );
                        })(e, t, c, r),
                  ),
          );
        }),
      };
    },
    function (e, t, n) {
      "use strict";
      const r = n(6).fromCallback,
        o = n(5),
        i = n(2),
        c = n(7),
        s = n(9).pathExists;
      e.exports = {
        outputFile: r(function (e, t, n, r) {
          "function" == typeof n && ((r = n), (n = "utf8"));
          const a = i.dirname(e);
          s(a, (i, s) =>
            i
              ? r(i)
              : s
                ? o.writeFile(e, t, n, r)
                : void c.mkdirs(a, (i) => {
                    if (i) return r(i);
                    o.writeFile(e, t, n, r);
                  }),
          );
        }),
        outputFileSync: function (e, ...t) {
          const n = i.dirname(e);
          if (o.existsSync(n)) return o.writeFileSync(e, ...t);
          (c.mkdirsSync(n), o.writeFileSync(e, ...t));
        },
      };
    },
    function (e, t) {
      function n() {
        this.ctrlIdx("undefined");
      }
      ((n.prototype.ctrlIdx = function (e) {
        Object.defineProperty(this, "ctrlIndex", { value: e, writable: !1 });
      }),
        (n.prototype.getCtrlIndex = function () {
          if (void 0 === this.ctrlIndex) throw "ctrlIndex not definded!";
          return this.ctrlIndex;
        }),
        (e.exports = n));
    },
    function (e, t, n) {
      var r = {
        "./jsapi_access.js": 81,
        "./jsapi_accessSync.js": 82,
        "./jsapi_close.js": 83,
        "./jsapi_closeSync.js": 84,
        "./jsapi_fs_appendFile.js": 85,
        "./jsapi_fs_appendFileSync.js": 86,
        "./jsapi_fs_copyFile.js": 87,
        "./jsapi_fs_copyFileSync.js": 88,
        "./jsapi_fs_rename.js": 89,
        "./jsapi_fs_renameSync.js": 90,
        "./jsapi_fstat.js": 91,
        "./jsapi_fstatSync.js": 92,
        "./jsapi_ftruncate.js": 93,
        "./jsapi_ftruncateSync.js": 94,
        "./jsapi_getPermissionBytes.js": 95,
        "./jsapi_getPluginPermissionBytes.js": 96,
        "./jsapi_mkdir.js": 97,
        "./jsapi_mkdirSync.js": 98,
        "./jsapi_open.js": 99,
        "./jsapi_openSync.js": 100,
        "./jsapi_read.js": 101,
        "./jsapi_readFile.js": 102,
        "./jsapi_readFileSync.js": 103,
        "./jsapi_readSync.js": 104,
        "./jsapi_readdir.js": 105,
        "./jsapi_readdirSync.js": 106,
        "./jsapi_rmdir.js": 107,
        "./jsapi_rmdirSync.js": 108,
        "./jsapi_truncate.js": 109,
        "./jsapi_truncateSync.js": 110,
        "./jsapi_unlink.js": 111,
        "./jsapi_unlinkSync.js": 112,
        "./jsapi_write.js": 113,
        "./jsapi_writeFile.js": 114,
        "./jsapi_writeFileSync.js": 115,
        "./jsapi_writeSync.js": 116,
      };
      function o(e) {
        return n(i(e));
      }
      function i(e) {
        var t = r[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t;
      }
      ((o.keys = function () {
        return Object.keys(r);
      }),
        (o.resolve = i),
        (e.exports = o),
        (o.id = 80));
    },
    function (e, t, n) {
      const r = n(30).access;
      e.exports = function () {
        (this.ctrlIdx(382),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(30).access;
      e.exports = function () {
        (this.ctrlIdx(383),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(31).close;
      e.exports = function () {
        (this.ctrlIdx(942),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(31).close;
      e.exports = function () {
        (this.ctrlIdx(946),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(32).appendFile;
      e.exports = function () {
        (this.ctrlIdx(461),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(32).appendFile;
      e.exports = function () {
        (this.ctrlIdx(462),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(33).copyFile;
      e.exports = function () {
        (this.ctrlIdx(399),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(33).copyFile;
      e.exports = function () {
        (this.ctrlIdx(400),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(34).rename;
      e.exports = function () {
        (this.ctrlIdx(397),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(34).rename;
      e.exports = function () {
        (this.ctrlIdx(398),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(35).fstat;
      e.exports = function () {
        (this.ctrlIdx(943),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(35).fstat;
      e.exports = function () {
        (this.ctrlIdx(947),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(17).ftruncate;
      e.exports = function () {
        (this.ctrlIdx(953),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(17).ftruncate;
      e.exports = function () {
        (this.ctrlIdx(954),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(14).ApiCtrlIndexHardCodePass;
      e.exports = function () {
        (this.ctrlIdx(r),
          (this.invoke = function (e, t) {
            const n = e.syncReturn;
            try {
              return n("ok", 0, e.invokeGetPermissionBytes(t.indexes));
            } catch (e) {
              return n(e.message);
            }
          }));
      };
    },
    function (e, t, n) {
      const r = n(14).ApiCtrlIndexHardCodePass;
      e.exports = function () {
        (this.ctrlIdx(r),
          (this.invoke = function (e, t) {
            const n = e.syncReturn;
            try {
              const r = e.invokeGetPluginPermissionBytes(t.pluginList);
              return n("ok", 0, Object.assign({ pluginPermissionMap: r }));
            } catch (e) {
              return n(e.message);
            }
          }));
      };
    },
    function (e, t, n) {
      const r = n(36).mkdir;
      e.exports = function () {
        (this.ctrlIdx(374),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(36).mkdir;
      e.exports = function () {
        (this.ctrlIdx(375),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(37).open;
      e.exports = function () {
        (this.ctrlIdx(941),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(37).open;
      e.exports = function () {
        (this.ctrlIdx(945),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(38).read;
      e.exports = function () {
        (this.ctrlIdx(939),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(39).readFile;
      e.exports = function () {
        (this.ctrlIdx(233),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(39).readFile;
      e.exports = function () {
        (this.ctrlIdx(378),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(38).read;
      e.exports = function () {
        (this.ctrlIdx(940),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(40).readdir;
      e.exports = function () {
        (this.ctrlIdx(376),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(40).readdir;
      e.exports = function () {
        (this.ctrlIdx(377),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(41).rmdir;
      e.exports = function () {
        (this.ctrlIdx(380),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(41).rmdir;
      e.exports = function () {
        (this.ctrlIdx(381),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(17).truncate;
      e.exports = function () {
        (this.ctrlIdx(949),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(17).truncate;
      e.exports = function () {
        (this.ctrlIdx(952),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(42).unlink;
      e.exports = function () {
        (this.ctrlIdx(384),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(42).unlink;
      e.exports = function () {
        (this.ctrlIdx(385),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(43).write;
      e.exports = function () {
        (this.ctrlIdx(944),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(44).writeFile;
      e.exports = function () {
        (this.ctrlIdx(234),
          (this.invoke = function (e, t) {
            return r(e, t, !1);
          }));
      };
    },
    function (e, t, n) {
      const r = n(44).writeFile;
      e.exports = function () {
        (this.ctrlIdx(379),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
    function (e, t, n) {
      const r = n(43).write;
      e.exports = function () {
        (this.ctrlIdx(948),
          (this.invoke = function (e, t) {
            return r(e, t, !0);
          }));
      };
    },
  ]);
  delete process;
}
