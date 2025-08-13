import { b as zr } from "./bootstrap-B4mIeCsZ.js";
function Yn(We) {
  return We &&
    We.__esModule &&
    Object.prototype.hasOwnProperty.call(We, "default")
    ? We.default
    : We;
}
var $t = { exports: {} },
  Ur = $t.exports,
  Vn;
function Vr() {
  return (
    Vn ||
      ((Vn = 1),
      (function (We, O) {
        (function (ae, S) {
          We.exports = S();
        })(Ur, function () {
          return (function (ae) {
            function S(E) {
              if (q[E]) return q[E].exports;
              var V = (q[E] = { exports: {}, id: E, loaded: !1 });
              return (
                ae[E].call(V.exports, V, V.exports, S),
                (V.loaded = !0),
                V.exports
              );
            }
            var q = {};
            return (S.m = ae), (S.c = q), (S.p = "dist/"), S(0);
          })([
            function (ae, S, q) {
              function E(P) {
                return P && P.__esModule ? P : { default: P };
              }
              var V =
                  Object.assign ||
                  function (P) {
                    for (var pe = 1; pe < arguments.length; pe++) {
                      var Ne = arguments[pe];
                      for (var he in Ne)
                        Object.prototype.hasOwnProperty.call(Ne, he) &&
                          (P[he] = Ne[he]);
                    }
                    return P;
                  },
                ee = q(1),
                re = (E(ee), q(6)),
                R = E(re),
                Z = q(7),
                F = E(Z),
                Y = q(8),
                G = E(Y),
                C = q(9),
                D = E(C),
                fe = q(10),
                H = E(fe),
                ot = q(11),
                et = E(ot),
                De = q(14),
                Ge = E(De),
                xe = [],
                i = !1,
                ie = {
                  offset: 120,
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  disable: !1,
                  once: !1,
                  startEvent: "DOMContentLoaded",
                  throttleDelay: 99,
                  debounceDelay: 50,
                  disableMutationObserver: !1,
                },
                B = function () {
                  var P =
                    arguments.length > 0 &&
                    arguments[0] !== void 0 &&
                    arguments[0];
                  if ((P && (i = !0), i))
                    return (
                      (xe = (0, et.default)(xe, ie)),
                      (0, H.default)(xe, ie.once),
                      xe
                    );
                },
                Fe = function () {
                  (xe = (0, Ge.default)()), B();
                },
                M = function () {
                  xe.forEach(function (P, pe) {
                    P.node.removeAttribute("data-aos"),
                      P.node.removeAttribute("data-aos-easing"),
                      P.node.removeAttribute("data-aos-duration"),
                      P.node.removeAttribute("data-aos-delay");
                  });
                },
                k = function (P) {
                  return (
                    P === !0 ||
                    (P === "mobile" && D.default.mobile()) ||
                    (P === "phone" && D.default.phone()) ||
                    (P === "tablet" && D.default.tablet()) ||
                    (typeof P == "function" && P() === !0)
                  );
                },
                A = function (P) {
                  (ie = V(ie, P)), (xe = (0, Ge.default)());
                  var pe = document.all && !window.atob;
                  return k(ie.disable) || pe
                    ? M()
                    : (ie.disableMutationObserver ||
                        G.default.isSupported() ||
                        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                        (ie.disableMutationObserver = !0)),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-easing", ie.easing),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-duration", ie.duration),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-delay", ie.delay),
                      ie.startEvent === "DOMContentLoaded" &&
                      ["complete", "interactive"].indexOf(document.readyState) >
                        -1
                        ? B(!0)
                        : ie.startEvent === "load"
                        ? window.addEventListener(ie.startEvent, function () {
                            B(!0);
                          })
                        : document.addEventListener(ie.startEvent, function () {
                            B(!0);
                          }),
                      window.addEventListener(
                        "resize",
                        (0, F.default)(B, ie.debounceDelay, !0)
                      ),
                      window.addEventListener(
                        "orientationchange",
                        (0, F.default)(B, ie.debounceDelay, !0)
                      ),
                      window.addEventListener(
                        "scroll",
                        (0, R.default)(function () {
                          (0, H.default)(xe, ie.once);
                        }, ie.throttleDelay)
                      ),
                      ie.disableMutationObserver ||
                        G.default.ready("[data-aos]", Fe),
                      xe);
                };
              ae.exports = { init: A, refresh: B, refreshHard: Fe };
            },
            function (ae, S) {},
            ,
            ,
            ,
            ,
            function (ae, S) {
              (function (q) {
                function E(k, A, P) {
                  function pe(K) {
                    var me = we,
                      Le = Oe;
                    return (we = Oe = void 0), (le = K), (ce = k.apply(Le, me));
                  }
                  function Ne(K) {
                    return (le = K), (se = setTimeout(Ce, A)), $e ? pe(K) : ce;
                  }
                  function he(K) {
                    var me = K - ye,
                      Le = K - le,
                      ut = A - me;
                    return ve ? Fe(ut, qe - Le) : ut;
                  }
                  function _e(K) {
                    var me = K - ye,
                      Le = K - le;
                    return (
                      ye === void 0 || me >= A || me < 0 || (ve && Le >= qe)
                    );
                  }
                  function Ce() {
                    var K = M();
                    return _e(K) ? at(K) : void (se = setTimeout(Ce, he(K)));
                  }
                  function at(K) {
                    return (
                      (se = void 0), te && we ? pe(K) : ((we = Oe = void 0), ce)
                    );
                  }
                  function pt() {
                    se !== void 0 && clearTimeout(se),
                      (le = 0),
                      (we = ye = Oe = se = void 0);
                  }
                  function tt() {
                    return se === void 0 ? ce : at(M());
                  }
                  function Se() {
                    var K = M(),
                      me = _e(K);
                    if (((we = arguments), (Oe = this), (ye = K), me)) {
                      if (se === void 0) return Ne(ye);
                      if (ve) return (se = setTimeout(Ce, A)), pe(ye);
                    }
                    return se === void 0 && (se = setTimeout(Ce, A)), ce;
                  }
                  var we,
                    Oe,
                    qe,
                    ce,
                    se,
                    ye,
                    le = 0,
                    $e = !1,
                    ve = !1,
                    te = !0;
                  if (typeof k != "function") throw new TypeError(Y);
                  return (
                    (A = Z(A) || 0),
                    ee(P) &&
                      (($e = !!P.leading),
                      (ve = "maxWait" in P),
                      (qe = ve ? B(Z(P.maxWait) || 0, A) : qe),
                      (te = "trailing" in P ? !!P.trailing : te)),
                    (Se.cancel = pt),
                    (Se.flush = tt),
                    Se
                  );
                }
                function V(k, A, P) {
                  var pe = !0,
                    Ne = !0;
                  if (typeof k != "function") throw new TypeError(Y);
                  return (
                    ee(P) &&
                      ((pe = "leading" in P ? !!P.leading : pe),
                      (Ne = "trailing" in P ? !!P.trailing : Ne)),
                    E(k, A, { leading: pe, maxWait: A, trailing: Ne })
                  );
                }
                function ee(k) {
                  var A = typeof k > "u" ? "undefined" : F(k);
                  return !!k && (A == "object" || A == "function");
                }
                function re(k) {
                  return (
                    !!k && (typeof k > "u" ? "undefined" : F(k)) == "object"
                  );
                }
                function R(k) {
                  return (
                    (typeof k > "u" ? "undefined" : F(k)) == "symbol" ||
                    (re(k) && ie.call(k) == C)
                  );
                }
                function Z(k) {
                  if (typeof k == "number") return k;
                  if (R(k)) return G;
                  if (ee(k)) {
                    var A = typeof k.valueOf == "function" ? k.valueOf() : k;
                    k = ee(A) ? A + "" : A;
                  }
                  if (typeof k != "string") return k === 0 ? k : +k;
                  k = k.replace(D, "");
                  var P = H.test(k);
                  return P || ot.test(k)
                    ? et(k.slice(2), P ? 2 : 8)
                    : fe.test(k)
                    ? G
                    : +k;
                }
                var F =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (k) {
                          return typeof k;
                        }
                      : function (k) {
                          return k &&
                            typeof Symbol == "function" &&
                            k.constructor === Symbol &&
                            k !== Symbol.prototype
                            ? "symbol"
                            : typeof k;
                        },
                  Y = "Expected a function",
                  G = NaN,
                  C = "[object Symbol]",
                  D = /^\s+|\s+$/g,
                  fe = /^[-+]0x[0-9a-f]+$/i,
                  H = /^0b[01]+$/i,
                  ot = /^0o[0-7]+$/i,
                  et = parseInt,
                  De =
                    (typeof q > "u" ? "undefined" : F(q)) == "object" &&
                    q &&
                    q.Object === Object &&
                    q,
                  Ge =
                    (typeof self > "u" ? "undefined" : F(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  xe = De || Ge || Function("return this")(),
                  i = Object.prototype,
                  ie = i.toString,
                  B = Math.max,
                  Fe = Math.min,
                  M = function () {
                    return xe.Date.now();
                  };
                ae.exports = V;
              }).call(
                S,
                (function () {
                  return this;
                })()
              );
            },
            function (ae, S) {
              (function (q) {
                function E(M, k, A) {
                  function P(te) {
                    var K = Se,
                      me = we;
                    return (Se = we = void 0), (ye = te), (qe = M.apply(me, K));
                  }
                  function pe(te) {
                    return (ye = te), (ce = setTimeout(_e, k)), le ? P(te) : qe;
                  }
                  function Ne(te) {
                    var K = te - se,
                      me = te - ye,
                      Le = k - K;
                    return $e ? B(Le, Oe - me) : Le;
                  }
                  function he(te) {
                    var K = te - se,
                      me = te - ye;
                    return se === void 0 || K >= k || K < 0 || ($e && me >= Oe);
                  }
                  function _e() {
                    var te = Fe();
                    return he(te) ? Ce(te) : void (ce = setTimeout(_e, Ne(te)));
                  }
                  function Ce(te) {
                    return (
                      (ce = void 0), ve && Se ? P(te) : ((Se = we = void 0), qe)
                    );
                  }
                  function at() {
                    ce !== void 0 && clearTimeout(ce),
                      (ye = 0),
                      (Se = se = we = ce = void 0);
                  }
                  function pt() {
                    return ce === void 0 ? qe : Ce(Fe());
                  }
                  function tt() {
                    var te = Fe(),
                      K = he(te);
                    if (((Se = arguments), (we = this), (se = te), K)) {
                      if (ce === void 0) return pe(se);
                      if ($e) return (ce = setTimeout(_e, k)), P(se);
                    }
                    return ce === void 0 && (ce = setTimeout(_e, k)), qe;
                  }
                  var Se,
                    we,
                    Oe,
                    qe,
                    ce,
                    se,
                    ye = 0,
                    le = !1,
                    $e = !1,
                    ve = !0;
                  if (typeof M != "function") throw new TypeError(F);
                  return (
                    (k = R(k) || 0),
                    V(A) &&
                      ((le = !!A.leading),
                      ($e = "maxWait" in A),
                      (Oe = $e ? ie(R(A.maxWait) || 0, k) : Oe),
                      (ve = "trailing" in A ? !!A.trailing : ve)),
                    (tt.cancel = at),
                    (tt.flush = pt),
                    tt
                  );
                }
                function V(M) {
                  var k = typeof M > "u" ? "undefined" : Z(M);
                  return !!M && (k == "object" || k == "function");
                }
                function ee(M) {
                  return (
                    !!M && (typeof M > "u" ? "undefined" : Z(M)) == "object"
                  );
                }
                function re(M) {
                  return (
                    (typeof M > "u" ? "undefined" : Z(M)) == "symbol" ||
                    (ee(M) && i.call(M) == G)
                  );
                }
                function R(M) {
                  if (typeof M == "number") return M;
                  if (re(M)) return Y;
                  if (V(M)) {
                    var k = typeof M.valueOf == "function" ? M.valueOf() : M;
                    M = V(k) ? k + "" : k;
                  }
                  if (typeof M != "string") return M === 0 ? M : +M;
                  M = M.replace(C, "");
                  var A = fe.test(M);
                  return A || H.test(M)
                    ? ot(M.slice(2), A ? 2 : 8)
                    : D.test(M)
                    ? Y
                    : +M;
                }
                var Z =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (M) {
                          return typeof M;
                        }
                      : function (M) {
                          return M &&
                            typeof Symbol == "function" &&
                            M.constructor === Symbol &&
                            M !== Symbol.prototype
                            ? "symbol"
                            : typeof M;
                        },
                  F = "Expected a function",
                  Y = NaN,
                  G = "[object Symbol]",
                  C = /^\s+|\s+$/g,
                  D = /^[-+]0x[0-9a-f]+$/i,
                  fe = /^0b[01]+$/i,
                  H = /^0o[0-7]+$/i,
                  ot = parseInt,
                  et =
                    (typeof q > "u" ? "undefined" : Z(q)) == "object" &&
                    q &&
                    q.Object === Object &&
                    q,
                  De =
                    (typeof self > "u" ? "undefined" : Z(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  Ge = et || De || Function("return this")(),
                  xe = Object.prototype,
                  i = xe.toString,
                  ie = Math.max,
                  B = Math.min,
                  Fe = function () {
                    return Ge.Date.now();
                  };
                ae.exports = E;
              }).call(
                S,
                (function () {
                  return this;
                })()
              );
            },
            function (ae, S) {
              function q(Z) {
                var F = void 0,
                  Y = void 0;
                for (F = 0; F < Z.length; F += 1)
                  if (
                    ((Y = Z[F]),
                    (Y.dataset && Y.dataset.aos) ||
                      (Y.children && q(Y.children)))
                  )
                    return !0;
                return !1;
              }
              function E() {
                return (
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver
                );
              }
              function V() {
                return !!E();
              }
              function ee(Z, F) {
                var Y = window.document,
                  G = E(),
                  C = new G(re);
                (R = F),
                  C.observe(Y.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  });
              }
              function re(Z) {
                Z &&
                  Z.forEach(function (F) {
                    var Y = Array.prototype.slice.call(F.addedNodes),
                      G = Array.prototype.slice.call(F.removedNodes),
                      C = Y.concat(G);
                    if (q(C)) return R();
                  });
              }
              Object.defineProperty(S, "__esModule", { value: !0 });
              var R = function () {};
              S.default = { isSupported: V, ready: ee };
            },
            function (ae, S) {
              function q(Y, G) {
                if (!(Y instanceof G))
                  throw new TypeError("Cannot call a class as a function");
              }
              function E() {
                return (
                  navigator.userAgent || navigator.vendor || window.opera || ""
                );
              }
              Object.defineProperty(S, "__esModule", { value: !0 });
              var V = (function () {
                  function Y(G, C) {
                    for (var D = 0; D < C.length; D++) {
                      var fe = C[D];
                      (fe.enumerable = fe.enumerable || !1),
                        (fe.configurable = !0),
                        "value" in fe && (fe.writable = !0),
                        Object.defineProperty(G, fe.key, fe);
                    }
                  }
                  return function (G, C, D) {
                    return C && Y(G.prototype, C), D && Y(G, D), G;
                  };
                })(),
                ee =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                re =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                R =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                Z =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                F = (function () {
                  function Y() {
                    q(this, Y);
                  }
                  return (
                    V(Y, [
                      {
                        key: "phone",
                        value: function () {
                          var G = E();
                          return !(!ee.test(G) && !re.test(G.substr(0, 4)));
                        },
                      },
                      {
                        key: "mobile",
                        value: function () {
                          var G = E();
                          return !(!R.test(G) && !Z.test(G.substr(0, 4)));
                        },
                      },
                      {
                        key: "tablet",
                        value: function () {
                          return this.mobile() && !this.phone();
                        },
                      },
                    ]),
                    Y
                  );
                })();
              S.default = new F();
            },
            function (ae, S) {
              Object.defineProperty(S, "__esModule", { value: !0 });
              var q = function (V, ee, re) {
                  var R = V.node.getAttribute("data-aos-once");
                  ee > V.position
                    ? V.node.classList.add("aos-animate")
                    : typeof R < "u" &&
                      (R === "false" || (!re && R !== "true")) &&
                      V.node.classList.remove("aos-animate");
                },
                E = function (V, ee) {
                  var re = window.pageYOffset,
                    R = window.innerHeight;
                  V.forEach(function (Z, F) {
                    q(Z, R + re, ee);
                  });
                };
              S.default = E;
            },
            function (ae, S, q) {
              function E(R) {
                return R && R.__esModule ? R : { default: R };
              }
              Object.defineProperty(S, "__esModule", { value: !0 });
              var V = q(12),
                ee = E(V),
                re = function (R, Z) {
                  return (
                    R.forEach(function (F, Y) {
                      F.node.classList.add("aos-init"),
                        (F.position = (0, ee.default)(F.node, Z.offset));
                    }),
                    R
                  );
                };
              S.default = re;
            },
            function (ae, S, q) {
              function E(R) {
                return R && R.__esModule ? R : { default: R };
              }
              Object.defineProperty(S, "__esModule", { value: !0 });
              var V = q(13),
                ee = E(V),
                re = function (R, Z) {
                  var F = 0,
                    Y = 0,
                    G = window.innerHeight,
                    C = {
                      offset: R.getAttribute("data-aos-offset"),
                      anchor: R.getAttribute("data-aos-anchor"),
                      anchorPlacement: R.getAttribute(
                        "data-aos-anchor-placement"
                      ),
                    };
                  switch (
                    (C.offset && !isNaN(C.offset) && (Y = parseInt(C.offset)),
                    C.anchor &&
                      document.querySelectorAll(C.anchor) &&
                      (R = document.querySelectorAll(C.anchor)[0]),
                    (F = (0, ee.default)(R).top),
                    C.anchorPlacement)
                  ) {
                    case "top-bottom":
                      break;
                    case "center-bottom":
                      F += R.offsetHeight / 2;
                      break;
                    case "bottom-bottom":
                      F += R.offsetHeight;
                      break;
                    case "top-center":
                      F += G / 2;
                      break;
                    case "bottom-center":
                      F += G / 2 + R.offsetHeight;
                      break;
                    case "center-center":
                      F += G / 2 + R.offsetHeight / 2;
                      break;
                    case "top-top":
                      F += G;
                      break;
                    case "bottom-top":
                      F += R.offsetHeight + G;
                      break;
                    case "center-top":
                      F += R.offsetHeight / 2 + G;
                  }
                  return (
                    C.anchorPlacement || C.offset || isNaN(Z) || (Y = Z), F + Y
                  );
                };
              S.default = re;
            },
            function (ae, S) {
              Object.defineProperty(S, "__esModule", { value: !0 });
              var q = function (E) {
                for (
                  var V = 0, ee = 0;
                  E && !isNaN(E.offsetLeft) && !isNaN(E.offsetTop);

                )
                  (V +=
                    E.offsetLeft - (E.tagName != "BODY" ? E.scrollLeft : 0)),
                    (ee +=
                      E.offsetTop - (E.tagName != "BODY" ? E.scrollTop : 0)),
                    (E = E.offsetParent);
                return { top: ee, left: V };
              };
              S.default = q;
            },
            function (ae, S) {
              Object.defineProperty(S, "__esModule", { value: !0 });
              var q = function (E) {
                return (
                  (E = E || document.querySelectorAll("[data-aos]")),
                  Array.prototype.map.call(E, function (V) {
                    return { node: V };
                  })
                );
              };
              S.default = q;
            },
          ]);
        });
      })($t)),
    $t.exports
  );
}
var Xr = Vr();
const Yr = Yn(Xr);
var Bt = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */ var Gr = Bt.exports,
  Xn;
function Qr() {
  return (
    Xn ||
      ((Xn = 1),
      (function (We) {
        (function (O, ae) {
          We.exports = O.document
            ? ae(O, !0)
            : function (S) {
                if (!S.document)
                  throw new Error("jQuery requires a window with a document");
                return ae(S);
              };
        })(typeof window < "u" ? window : Gr, function (O, ae) {
          var S = [],
            q = Object.getPrototypeOf,
            E = S.slice,
            V = S.flat
              ? function (e) {
                  return S.flat.call(e);
                }
              : function (e) {
                  return S.concat.apply([], e);
                },
            ee = S.push,
            re = S.indexOf,
            R = {},
            Z = R.toString,
            F = R.hasOwnProperty,
            Y = F.toString,
            G = Y.call(Object),
            C = {},
            D = function (t) {
              return (
                typeof t == "function" &&
                typeof t.nodeType != "number" &&
                typeof t.item != "function"
              );
            },
            fe = function (t) {
              return t != null && t === t.window;
            },
            H = O.document,
            ot = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function et(e, t, n) {
            n = n || H;
            var r,
              o,
              a = n.createElement("script");
            if (((a.text = e), t))
              for (r in ot)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))),
                  o && a.setAttribute(r, o);
            n.head.appendChild(a).parentNode.removeChild(a);
          }
          function De(e) {
            return e == null
              ? e + ""
              : typeof e == "object" || typeof e == "function"
              ? R[Z.call(e)] || "object"
              : typeof e;
          }
          var Ge = "3.7.0",
            xe = /HTML$/i,
            i = function (e, t) {
              return new i.fn.init(e, t);
            };
          (i.fn = i.prototype =
            {
              jquery: Ge,
              constructor: i,
              length: 0,
              toArray: function () {
                return E.call(this);
              },
              get: function (e) {
                return e == null
                  ? E.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = i.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return i.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  i.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(E.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  i.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  i.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: ee,
              sort: S.sort,
              splice: S.splice,
            }),
            (i.extend = i.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  o,
                  a,
                  u = arguments[0] || {},
                  c = 1,
                  f = arguments.length,
                  d = !1;
                for (
                  typeof u == "boolean" &&
                    ((d = u), (u = arguments[c] || {}), c++),
                    typeof u != "object" && !D(u) && (u = {}),
                    c === f && ((u = this), c--);
                  c < f;
                  c++
                )
                  if ((e = arguments[c]) != null)
                    for (t in e)
                      (r = e[t]),
                        !(t === "__proto__" || u === r) &&
                          (d &&
                          r &&
                          (i.isPlainObject(r) || (o = Array.isArray(r)))
                            ? ((n = u[t]),
                              o && !Array.isArray(n)
                                ? (a = [])
                                : !o && !i.isPlainObject(n)
                                ? (a = {})
                                : (a = n),
                              (o = !1),
                              (u[t] = i.extend(d, a, r)))
                            : r !== void 0 && (u[t] = r));
                return u;
              }),
            i.extend({
              expando: "jQuery" + (Ge + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !e || Z.call(e) !== "[object Object]"
                  ? !1
                  : ((t = q(e)),
                    t
                      ? ((n = F.call(t, "constructor") && t.constructor),
                        typeof n == "function" && Y.call(n) === G)
                      : !0);
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                et(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (ie(e))
                  for (
                    n = e.length;
                    r < n && t.call(e[r], r, e[r]) !== !1;
                    r++
                  );
                else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
                return e;
              },
              text: function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (o === 1 || o === 9 || o === 11) return e.textContent;
                  if (o === 3 || o === 4) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i.text(t);
                return n;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  e != null &&
                    (ie(Object(e))
                      ? i.merge(n, typeof e == "string" ? [e] : e)
                      : ee.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return t == null ? -1 : re.call(t, e, n);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !xe.test(t || (n && n.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r, o = [], a = 0, u = e.length, c = !n; a < u; a++)
                  (r = !t(e[a], a)), r !== c && o.push(e[a]);
                return o;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  a = 0,
                  u = [];
                if (ie(e))
                  for (r = e.length; a < r; a++)
                    (o = t(e[a], a, n)), o != null && u.push(o);
                else for (a in e) (o = t(e[a], a, n)), o != null && u.push(o);
                return V(u);
              },
              guid: 1,
              support: C,
            }),
            typeof Symbol == "function" &&
              (i.fn[Symbol.iterator] = S[Symbol.iterator]),
            i.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                R["[object " + t + "]"] = t.toLowerCase();
              }
            );
          function ie(e) {
            var t = !!e && "length" in e && e.length,
              n = De(e);
            return D(e) || fe(e)
              ? !1
              : n === "array" ||
                  t === 0 ||
                  (typeof t == "number" && t > 0 && t - 1 in e);
          }
          function B(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var Fe = S.pop,
            M = S.sort,
            k = S.splice,
            A = "[\\x20\\t\\r\\n\\f]",
            P = new RegExp(
              "^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$",
              "g"
            );
          i.contains = function (e, t) {
            var n = t && t.parentNode;
            return (
              e === n ||
              !!(
                n &&
                n.nodeType === 1 &&
                (e.contains
                  ? e.contains(n)
                  : e.compareDocumentPosition &&
                    e.compareDocumentPosition(n) & 16)
              )
            );
          };
          var pe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function Ne(e, t) {
            return t
              ? e === "\0"
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
          i.escapeSelector = function (e) {
            return (e + "").replace(pe, Ne);
          };
          var he = H,
            _e = ee;
          (function () {
            var e,
              t,
              n,
              r,
              o,
              a = _e,
              u,
              c,
              f,
              d,
              y,
              m = i.expando,
              h = 0,
              b = 0,
              I = _t(),
              Q = _t(),
              $ = _t(),
              ge = _t(),
              de = function (s, l) {
                return s === l && (o = !0), 0;
              },
              ze =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              Ue =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                A +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              X =
                "\\[" +
                A +
                "*(" +
                Ue +
                ")(?:" +
                A +
                "*([*^$|!~]?=)" +
                A +
                `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
                Ue +
                "))|)" +
                A +
                "*\\]",
              lt =
                ":(" +
                Ue +
                `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
                X +
                ")*)|.*)\\)|)",
              J = new RegExp(A + "+", "g"),
              ue = new RegExp("^" + A + "*," + A + "*"),
              Dt = new RegExp("^" + A + "*([>+~]|" + A + ")" + A + "*"),
              on = new RegExp(A + "|>"),
              Ve = new RegExp(lt),
              Ot = new RegExp("^" + Ue + "$"),
              Xe = {
                ID: new RegExp("^#(" + Ue + ")"),
                CLASS: new RegExp("^\\.(" + Ue + ")"),
                TAG: new RegExp("^(" + Ue + "|[*])"),
                ATTR: new RegExp("^" + X),
                PSEUDO: new RegExp("^" + lt),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    A +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    A +
                    "*(?:([+-]|)" +
                    A +
                    "*(\\d+)|))" +
                    A +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + ze + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    A +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    A +
                    "*((?:-\\d)?\\d*)" +
                    A +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              nt = /^(?:input|select|textarea|button)$/i,
              rt = /^h\d$/i,
              Me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              an = /[+~]/,
              Ke = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + A + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              Ze = function (s, l) {
                var p = "0x" + s.slice(1) - 65536;
                return (
                  l ||
                  (p < 0
                    ? String.fromCharCode(p + 65536)
                    : String.fromCharCode(
                        (p >> 10) | 55296,
                        (p & 1023) | 56320
                      ))
                );
              },
              _r = function () {
                it();
              },
              Rr = Wt(
                function (s) {
                  return s.disabled === !0 && B(s, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            function Ir() {
              try {
                return u.activeElement;
              } catch {}
            }
            try {
              a.apply((S = E.call(he.childNodes)), he.childNodes),
                S[he.childNodes.length].nodeType;
            } catch {
              a = {
                apply: function (l, p) {
                  _e.apply(l, E.call(p));
                },
                call: function (l) {
                  _e.apply(l, E.call(arguments, 1));
                },
              };
            }
            function ne(s, l, p, g) {
              var v,
                x,
                w,
                j,
                T,
                z,
                _,
                W = l && l.ownerDocument,
                U = l ? l.nodeType : 9;
              if (
                ((p = p || []),
                typeof s != "string" || !s || (U !== 1 && U !== 9 && U !== 11))
              )
                return p;
              if (!g && (it(l), (l = l || u), f)) {
                if (U !== 11 && (T = Me.exec(s)))
                  if ((v = T[1])) {
                    if (U === 9)
                      if ((w = l.getElementById(v))) {
                        if (w.id === v) return a.call(p, w), p;
                      } else return p;
                    else if (
                      W &&
                      (w = W.getElementById(v)) &&
                      ne.contains(l, w) &&
                      w.id === v
                    )
                      return a.call(p, w), p;
                  } else {
                    if (T[2]) return a.apply(p, l.getElementsByTagName(s)), p;
                    if ((v = T[3]) && l.getElementsByClassName)
                      return a.apply(p, l.getElementsByClassName(v)), p;
                  }
                if (!ge[s + " "] && (!d || !d.test(s))) {
                  if (
                    ((_ = s), (W = l), U === 1 && (on.test(s) || Dt.test(s)))
                  ) {
                    for (
                      W = (an.test(s) && un(l.parentNode)) || l,
                        (W != l || !C.scope) &&
                          ((j = l.getAttribute("id"))
                            ? (j = i.escapeSelector(j))
                            : l.setAttribute("id", (j = m))),
                        z = Rt(s),
                        x = z.length;
                      x--;

                    )
                      z[x] = (j ? "#" + j : ":scope") + " " + It(z[x]);
                    _ = z.join(",");
                  }
                  try {
                    return a.apply(p, W.querySelectorAll(_)), p;
                  } catch {
                    ge(s, !0);
                  } finally {
                    j === m && l.removeAttribute("id");
                  }
                }
              }
              return Un(s.replace(P, "$1"), l, p, g);
            }
            function _t() {
              var s = [];
              function l(p, g) {
                return (
                  s.push(p + " ") > t.cacheLength && delete l[s.shift()],
                  (l[p + " "] = g)
                );
              }
              return l;
            }
            function Ie(s) {
              return (s[m] = !0), s;
            }
            function xt(s) {
              var l = u.createElement("fieldset");
              try {
                return !!s(l);
              } catch {
                return !1;
              } finally {
                l.parentNode && l.parentNode.removeChild(l), (l = null);
              }
            }
            function Wr(s) {
              return function (l) {
                return B(l, "input") && l.type === s;
              };
            }
            function Fr(s) {
              return function (l) {
                return (B(l, "input") || B(l, "button")) && l.type === s;
              };
            }
            function Bn(s) {
              return function (l) {
                return "form" in l
                  ? l.parentNode && l.disabled === !1
                    ? "label" in l
                      ? "label" in l.parentNode
                        ? l.parentNode.disabled === s
                        : l.disabled === s
                      : l.isDisabled === s ||
                        (l.isDisabled !== !s && Rr(l) === s)
                    : l.disabled === s
                  : "label" in l
                  ? l.disabled === s
                  : !1;
              };
            }
            function dt(s) {
              return Ie(function (l) {
                return (
                  (l = +l),
                  Ie(function (p, g) {
                    for (var v, x = s([], p.length, l), w = x.length; w--; )
                      p[(v = x[w])] && (p[v] = !(g[v] = p[v]));
                  })
                );
              });
            }
            function un(s) {
              return s && typeof s.getElementsByTagName < "u" && s;
            }
            function it(s) {
              var l,
                p = s ? s.ownerDocument || s : he;
              return (
                p == u ||
                  p.nodeType !== 9 ||
                  !p.documentElement ||
                  ((u = p),
                  (c = u.documentElement),
                  (f = !i.isXMLDoc(u)),
                  (y =
                    c.matches ||
                    c.webkitMatchesSelector ||
                    c.msMatchesSelector),
                  he != u &&
                    (l = u.defaultView) &&
                    l.top !== l &&
                    l.addEventListener("unload", _r),
                  (C.getById = xt(function (g) {
                    return (
                      (c.appendChild(g).id = i.expando),
                      !u.getElementsByName ||
                        !u.getElementsByName(i.expando).length
                    );
                  })),
                  (C.disconnectedMatch = xt(function (g) {
                    return y.call(g, "*");
                  })),
                  (C.scope = xt(function () {
                    return u.querySelectorAll(":scope");
                  })),
                  (C.cssHas = xt(function () {
                    try {
                      return u.querySelector(":has(*,:jqfake)"), !1;
                    } catch {
                      return !0;
                    }
                  })),
                  C.getById
                    ? ((t.filter.ID = function (g) {
                        var v = g.replace(Ke, Ze);
                        return function (x) {
                          return x.getAttribute("id") === v;
                        };
                      }),
                      (t.find.ID = function (g, v) {
                        if (typeof v.getElementById < "u" && f) {
                          var x = v.getElementById(g);
                          return x ? [x] : [];
                        }
                      }))
                    : ((t.filter.ID = function (g) {
                        var v = g.replace(Ke, Ze);
                        return function (x) {
                          var w =
                            typeof x.getAttributeNode < "u" &&
                            x.getAttributeNode("id");
                          return w && w.value === v;
                        };
                      }),
                      (t.find.ID = function (g, v) {
                        if (typeof v.getElementById < "u" && f) {
                          var x,
                            w,
                            j,
                            T = v.getElementById(g);
                          if (T) {
                            if (
                              ((x = T.getAttributeNode("id")),
                              x && x.value === g)
                            )
                              return [T];
                            for (
                              j = v.getElementsByName(g), w = 0;
                              (T = j[w++]);

                            )
                              if (
                                ((x = T.getAttributeNode("id")),
                                x && x.value === g)
                              )
                                return [T];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (g, v) {
                    return typeof v.getElementsByTagName < "u"
                      ? v.getElementsByTagName(g)
                      : v.querySelectorAll(g);
                  }),
                  (t.find.CLASS = function (g, v) {
                    if (typeof v.getElementsByClassName < "u" && f)
                      return v.getElementsByClassName(g);
                  }),
                  (d = []),
                  xt(function (g) {
                    var v;
                    (c.appendChild(g).innerHTML =
                      "<a id='" +
                      m +
                      "' href='' disabled='disabled'></a><select id='" +
                      m +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      g.querySelectorAll("[selected]").length ||
                        d.push("\\[" + A + "*(?:value|" + ze + ")"),
                      g.querySelectorAll("[id~=" + m + "-]").length ||
                        d.push("~="),
                      g.querySelectorAll("a#" + m + "+*").length ||
                        d.push(".#.+[+~]"),
                      g.querySelectorAll(":checked").length ||
                        d.push(":checked"),
                      (v = u.createElement("input")),
                      v.setAttribute("type", "hidden"),
                      g.appendChild(v).setAttribute("name", "D"),
                      (c.appendChild(g).disabled = !0),
                      g.querySelectorAll(":disabled").length !== 2 &&
                        d.push(":enabled", ":disabled"),
                      (v = u.createElement("input")),
                      v.setAttribute("name", ""),
                      g.appendChild(v),
                      g.querySelectorAll("[name='']").length ||
                        d.push(
                          "\\[" + A + "*name" + A + "*=" + A + `*(?:''|"")`
                        );
                  }),
                  C.cssHas || d.push(":has"),
                  (d = d.length && new RegExp(d.join("|"))),
                  (de = function (g, v) {
                    if (g === v) return (o = !0), 0;
                    var x =
                      !g.compareDocumentPosition - !v.compareDocumentPosition;
                    return (
                      x ||
                      ((x =
                        (g.ownerDocument || g) == (v.ownerDocument || v)
                          ? g.compareDocumentPosition(v)
                          : 1),
                      x & 1 ||
                      (!C.sortDetached && v.compareDocumentPosition(g) === x)
                        ? g === u ||
                          (g.ownerDocument == he && ne.contains(he, g))
                          ? -1
                          : v === u ||
                            (v.ownerDocument == he && ne.contains(he, v))
                          ? 1
                          : r
                          ? re.call(r, g) - re.call(r, v)
                          : 0
                        : x & 4
                        ? -1
                        : 1)
                    );
                  })),
                u
              );
            }
            (ne.matches = function (s, l) {
              return ne(s, null, null, l);
            }),
              (ne.matchesSelector = function (s, l) {
                if ((it(s), f && !ge[l + " "] && (!d || !d.test(l))))
                  try {
                    var p = y.call(s, l);
                    if (
                      p ||
                      C.disconnectedMatch ||
                      (s.document && s.document.nodeType !== 11)
                    )
                      return p;
                  } catch {
                    ge(l, !0);
                  }
                return ne(l, u, null, [s]).length > 0;
              }),
              (ne.contains = function (s, l) {
                return (s.ownerDocument || s) != u && it(s), i.contains(s, l);
              }),
              (ne.attr = function (s, l) {
                (s.ownerDocument || s) != u && it(s);
                var p = t.attrHandle[l.toLowerCase()],
                  g =
                    p && F.call(t.attrHandle, l.toLowerCase())
                      ? p(s, l, !f)
                      : void 0;
                return g !== void 0 ? g : s.getAttribute(l);
              }),
              (ne.error = function (s) {
                throw new Error("Syntax error, unrecognized expression: " + s);
              }),
              (i.uniqueSort = function (s) {
                var l,
                  p = [],
                  g = 0,
                  v = 0;
                if (
                  ((o = !C.sortStable),
                  (r = !C.sortStable && E.call(s, 0)),
                  M.call(s, de),
                  o)
                ) {
                  for (; (l = s[v++]); ) l === s[v] && (g = p.push(v));
                  for (; g--; ) k.call(s, p[g], 1);
                }
                return (r = null), s;
              }),
              (i.fn.uniqueSort = function () {
                return this.pushStack(i.uniqueSort(E.apply(this)));
              }),
              (t = i.expr =
                {
                  cacheLength: 50,
                  createPseudo: Ie,
                  match: Xe,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                  },
                  preFilter: {
                    ATTR: function (s) {
                      return (
                        (s[1] = s[1].replace(Ke, Ze)),
                        (s[3] = (s[3] || s[4] || s[5] || "").replace(Ke, Ze)),
                        s[2] === "~=" && (s[3] = " " + s[3] + " "),
                        s.slice(0, 4)
                      );
                    },
                    CHILD: function (s) {
                      return (
                        (s[1] = s[1].toLowerCase()),
                        s[1].slice(0, 3) === "nth"
                          ? (s[3] || ne.error(s[0]),
                            (s[4] = +(s[4]
                              ? s[5] + (s[6] || 1)
                              : 2 * (s[3] === "even" || s[3] === "odd"))),
                            (s[5] = +(s[7] + s[8] || s[3] === "odd")))
                          : s[3] && ne.error(s[0]),
                        s
                      );
                    },
                    PSEUDO: function (s) {
                      var l,
                        p = !s[6] && s[2];
                      return Xe.CHILD.test(s[0])
                        ? null
                        : (s[3]
                            ? (s[2] = s[4] || s[5] || "")
                            : p &&
                              Ve.test(p) &&
                              (l = Rt(p, !0)) &&
                              (l = p.indexOf(")", p.length - l) - p.length) &&
                              ((s[0] = s[0].slice(0, l)),
                              (s[2] = p.slice(0, l))),
                          s.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (s) {
                      var l = s.replace(Ke, Ze).toLowerCase();
                      return s === "*"
                        ? function () {
                            return !0;
                          }
                        : function (p) {
                            return B(p, l);
                          };
                    },
                    CLASS: function (s) {
                      var l = I[s + " "];
                      return (
                        l ||
                        ((l = new RegExp(
                          "(^|" + A + ")" + s + "(" + A + "|$)"
                        )) &&
                          I(s, function (p) {
                            return l.test(
                              (typeof p.className == "string" && p.className) ||
                                (typeof p.getAttribute < "u" &&
                                  p.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (s, l, p) {
                      return function (g) {
                        var v = ne.attr(g, s);
                        return v == null
                          ? l === "!="
                          : l
                          ? ((v += ""),
                            l === "="
                              ? v === p
                              : l === "!="
                              ? v !== p
                              : l === "^="
                              ? p && v.indexOf(p) === 0
                              : l === "*="
                              ? p && v.indexOf(p) > -1
                              : l === "$="
                              ? p && v.slice(-p.length) === p
                              : l === "~="
                              ? (" " + v.replace(J, " ") + " ").indexOf(p) > -1
                              : l === "|="
                              ? v === p || v.slice(0, p.length + 1) === p + "-"
                              : !1)
                          : !0;
                      };
                    },
                    CHILD: function (s, l, p, g, v) {
                      var x = s.slice(0, 3) !== "nth",
                        w = s.slice(-4) !== "last",
                        j = l === "of-type";
                      return g === 1 && v === 0
                        ? function (T) {
                            return !!T.parentNode;
                          }
                        : function (T, z, _) {
                            var W,
                              U,
                              L,
                              oe,
                              Ae,
                              be = x !== w ? "nextSibling" : "previousSibling",
                              Pe = T.parentNode,
                              Ye = j && T.nodeName.toLowerCase(),
                              wt = !_ && !j,
                              Te = !1;
                            if (Pe) {
                              if (x) {
                                for (; be; ) {
                                  for (L = T; (L = L[be]); )
                                    if (j ? B(L, Ye) : L.nodeType === 1)
                                      return !1;
                                  Ae = be =
                                    s === "only" && !Ae && "nextSibling";
                                }
                                return !0;
                              }
                              if (
                                ((Ae = [w ? Pe.firstChild : Pe.lastChild]),
                                w && wt)
                              ) {
                                for (
                                  U = Pe[m] || (Pe[m] = {}),
                                    W = U[s] || [],
                                    oe = W[0] === h && W[1],
                                    Te = oe && W[2],
                                    L = oe && Pe.childNodes[oe];
                                  (L =
                                    (++oe && L && L[be]) ||
                                    (Te = oe = 0) ||
                                    Ae.pop());

                                )
                                  if (L.nodeType === 1 && ++Te && L === T) {
                                    U[s] = [h, oe, Te];
                                    break;
                                  }
                              } else if (
                                (wt &&
                                  ((U = T[m] || (T[m] = {})),
                                  (W = U[s] || []),
                                  (oe = W[0] === h && W[1]),
                                  (Te = oe)),
                                Te === !1)
                              )
                                for (
                                  ;
                                  (L =
                                    (++oe && L && L[be]) ||
                                    (Te = oe = 0) ||
                                    Ae.pop()) &&
                                  !(
                                    (j ? B(L, Ye) : L.nodeType === 1) &&
                                    ++Te &&
                                    (wt &&
                                      ((U = L[m] || (L[m] = {})),
                                      (U[s] = [h, Te])),
                                    L === T)
                                  );

                                );
                              return (
                                (Te -= v),
                                Te === g || (Te % g === 0 && Te / g >= 0)
                              );
                            }
                          };
                    },
                    PSEUDO: function (s, l) {
                      var p,
                        g =
                          t.pseudos[s] ||
                          t.setFilters[s.toLowerCase()] ||
                          ne.error("unsupported pseudo: " + s);
                      return g[m]
                        ? g(l)
                        : g.length > 1
                        ? ((p = [s, s, "", l]),
                          t.setFilters.hasOwnProperty(s.toLowerCase())
                            ? Ie(function (v, x) {
                                for (var w, j = g(v, l), T = j.length; T--; )
                                  (w = re.call(v, j[T])),
                                    (v[w] = !(x[w] = j[T]));
                              })
                            : function (v) {
                                return g(v, 0, p);
                              })
                        : g;
                    },
                  },
                  pseudos: {
                    not: Ie(function (s) {
                      var l = [],
                        p = [],
                        g = ln(s.replace(P, "$1"));
                      return g[m]
                        ? Ie(function (v, x, w, j) {
                            for (
                              var T, z = g(v, null, j, []), _ = v.length;
                              _--;

                            )
                              (T = z[_]) && (v[_] = !(x[_] = T));
                          })
                        : function (v, x, w) {
                            return (
                              (l[0] = v),
                              g(l, null, w, p),
                              (l[0] = null),
                              !p.pop()
                            );
                          };
                    }),
                    has: Ie(function (s) {
                      return function (l) {
                        return ne(s, l).length > 0;
                      };
                    }),
                    contains: Ie(function (s) {
                      return (
                        (s = s.replace(Ke, Ze)),
                        function (l) {
                          return (l.textContent || i.text(l)).indexOf(s) > -1;
                        }
                      );
                    }),
                    lang: Ie(function (s) {
                      return (
                        Ot.test(s || "") || ne.error("unsupported lang: " + s),
                        (s = s.replace(Ke, Ze).toLowerCase()),
                        function (l) {
                          var p;
                          do
                            if (
                              (p = f
                                ? l.lang
                                : l.getAttribute("xml:lang") ||
                                  l.getAttribute("lang"))
                            )
                              return (
                                (p = p.toLowerCase()),
                                p === s || p.indexOf(s + "-") === 0
                              );
                          while ((l = l.parentNode) && l.nodeType === 1);
                          return !1;
                        }
                      );
                    }),
                    target: function (s) {
                      var l = O.location && O.location.hash;
                      return l && l.slice(1) === s.id;
                    },
                    root: function (s) {
                      return s === c;
                    },
                    focus: function (s) {
                      return (
                        s === Ir() &&
                        u.hasFocus() &&
                        !!(s.type || s.href || ~s.tabIndex)
                      );
                    },
                    enabled: Bn(!1),
                    disabled: Bn(!0),
                    checked: function (s) {
                      return (
                        (B(s, "input") && !!s.checked) ||
                        (B(s, "option") && !!s.selected)
                      );
                    },
                    selected: function (s) {
                      return (
                        s.parentNode && s.parentNode.selectedIndex,
                        s.selected === !0
                      );
                    },
                    empty: function (s) {
                      for (s = s.firstChild; s; s = s.nextSibling)
                        if (s.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (s) {
                      return !t.pseudos.empty(s);
                    },
                    header: function (s) {
                      return rt.test(s.nodeName);
                    },
                    input: function (s) {
                      return nt.test(s.nodeName);
                    },
                    button: function (s) {
                      return (
                        (B(s, "input") && s.type === "button") || B(s, "button")
                      );
                    },
                    text: function (s) {
                      var l;
                      return (
                        B(s, "input") &&
                        s.type === "text" &&
                        ((l = s.getAttribute("type")) == null ||
                          l.toLowerCase() === "text")
                      );
                    },
                    first: dt(function () {
                      return [0];
                    }),
                    last: dt(function (s, l) {
                      return [l - 1];
                    }),
                    eq: dt(function (s, l, p) {
                      return [p < 0 ? p + l : p];
                    }),
                    even: dt(function (s, l) {
                      for (var p = 0; p < l; p += 2) s.push(p);
                      return s;
                    }),
                    odd: dt(function (s, l) {
                      for (var p = 1; p < l; p += 2) s.push(p);
                      return s;
                    }),
                    lt: dt(function (s, l, p) {
                      var g;
                      for (
                        p < 0 ? (g = p + l) : p > l ? (g = l) : (g = p);
                        --g >= 0;

                      )
                        s.push(g);
                      return s;
                    }),
                    gt: dt(function (s, l, p) {
                      for (var g = p < 0 ? p + l : p; ++g < l; ) s.push(g);
                      return s;
                    }),
                  },
                }),
              (t.pseudos.nth = t.pseudos.eq);
            for (e in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0,
            })
              t.pseudos[e] = Wr(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = Fr(e);
            function zn() {}
            (zn.prototype = t.filters = t.pseudos), (t.setFilters = new zn());
            function Rt(s, l) {
              var p,
                g,
                v,
                x,
                w,
                j,
                T,
                z = Q[s + " "];
              if (z) return l ? 0 : z.slice(0);
              for (w = s, j = [], T = t.preFilter; w; ) {
                (!p || (g = ue.exec(w))) &&
                  (g && (w = w.slice(g[0].length) || w), j.push((v = []))),
                  (p = !1),
                  (g = Dt.exec(w)) &&
                    ((p = g.shift()),
                    v.push({ value: p, type: g[0].replace(P, " ") }),
                    (w = w.slice(p.length)));
                for (x in t.filter)
                  (g = Xe[x].exec(w)) &&
                    (!T[x] || (g = T[x](g))) &&
                    ((p = g.shift()),
                    v.push({ value: p, type: x, matches: g }),
                    (w = w.slice(p.length)));
                if (!p) break;
              }
              return l ? w.length : w ? ne.error(s) : Q(s, j).slice(0);
            }
            function It(s) {
              for (var l = 0, p = s.length, g = ""; l < p; l++) g += s[l].value;
              return g;
            }
            function Wt(s, l, p) {
              var g = l.dir,
                v = l.next,
                x = v || g,
                w = p && x === "parentNode",
                j = b++;
              return l.first
                ? function (T, z, _) {
                    for (; (T = T[g]); )
                      if (T.nodeType === 1 || w) return s(T, z, _);
                    return !1;
                  }
                : function (T, z, _) {
                    var W,
                      U,
                      L = [h, j];
                    if (_) {
                      for (; (T = T[g]); )
                        if ((T.nodeType === 1 || w) && s(T, z, _)) return !0;
                    } else
                      for (; (T = T[g]); )
                        if (T.nodeType === 1 || w)
                          if (((U = T[m] || (T[m] = {})), v && B(T, v)))
                            T = T[g] || T;
                          else {
                            if ((W = U[x]) && W[0] === h && W[1] === j)
                              return (L[2] = W[2]);
                            if (((U[x] = L), (L[2] = s(T, z, _)))) return !0;
                          }
                    return !1;
                  };
            }
            function sn(s) {
              return s.length > 1
                ? function (l, p, g) {
                    for (var v = s.length; v--; ) if (!s[v](l, p, g)) return !1;
                    return !0;
                  }
                : s[0];
            }
            function $r(s, l, p) {
              for (var g = 0, v = l.length; g < v; g++) ne(s, l[g], p);
              return p;
            }
            function Ft(s, l, p, g, v) {
              for (
                var x, w = [], j = 0, T = s.length, z = l != null;
                j < T;
                j++
              )
                (x = s[j]) && (!p || p(x, g, v)) && (w.push(x), z && l.push(j));
              return w;
            }
            function fn(s, l, p, g, v, x) {
              return (
                g && !g[m] && (g = fn(g)),
                v && !v[m] && (v = fn(v, x)),
                Ie(function (w, j, T, z) {
                  var _,
                    W,
                    U,
                    L,
                    oe = [],
                    Ae = [],
                    be = j.length,
                    Pe = w || $r(l || "*", T.nodeType ? [T] : T, []),
                    Ye = s && (w || !l) ? Ft(Pe, oe, s, T, z) : Pe;
                  if (
                    (p
                      ? ((L = v || (w ? s : be || g) ? [] : j), p(Ye, L, T, z))
                      : (L = Ye),
                    g)
                  )
                    for (_ = Ft(L, Ae), g(_, [], T, z), W = _.length; W--; )
                      (U = _[W]) && (L[Ae[W]] = !(Ye[Ae[W]] = U));
                  if (w) {
                    if (v || s) {
                      if (v) {
                        for (_ = [], W = L.length; W--; )
                          (U = L[W]) && _.push((Ye[W] = U));
                        v(null, (L = []), _, z);
                      }
                      for (W = L.length; W--; )
                        (U = L[W]) &&
                          (_ = v ? re.call(w, U) : oe[W]) > -1 &&
                          (w[_] = !(j[_] = U));
                    }
                  } else (L = Ft(L === j ? L.splice(be, L.length) : L)), v ? v(null, j, L, z) : a.apply(j, L);
                })
              );
            }
            function cn(s) {
              for (
                var l,
                  p,
                  g,
                  v = s.length,
                  x = t.relative[s[0].type],
                  w = x || t.relative[" "],
                  j = x ? 1 : 0,
                  T = Wt(
                    function (W) {
                      return W === l;
                    },
                    w,
                    !0
                  ),
                  z = Wt(
                    function (W) {
                      return re.call(l, W) > -1;
                    },
                    w,
                    !0
                  ),
                  _ = [
                    function (W, U, L) {
                      var oe =
                        (!x && (L || U != n)) ||
                        ((l = U).nodeType ? T(W, U, L) : z(W, U, L));
                      return (l = null), oe;
                    },
                  ];
                j < v;
                j++
              )
                if ((p = t.relative[s[j].type])) _ = [Wt(sn(_), p)];
                else {
                  if (
                    ((p = t.filter[s[j].type].apply(null, s[j].matches)), p[m])
                  ) {
                    for (g = ++j; g < v && !t.relative[s[g].type]; g++);
                    return fn(
                      j > 1 && sn(_),
                      j > 1 &&
                        It(
                          s
                            .slice(0, j - 1)
                            .concat({ value: s[j - 2].type === " " ? "*" : "" })
                        ).replace(P, "$1"),
                      p,
                      j < g && cn(s.slice(j, g)),
                      g < v && cn((s = s.slice(g))),
                      g < v && It(s)
                    );
                  }
                  _.push(p);
                }
              return sn(_);
            }
            function Br(s, l) {
              var p = l.length > 0,
                g = s.length > 0,
                v = function (x, w, j, T, z) {
                  var _,
                    W,
                    U,
                    L = 0,
                    oe = "0",
                    Ae = x && [],
                    be = [],
                    Pe = n,
                    Ye = x || (g && t.find.TAG("*", z)),
                    wt = (h += Pe == null ? 1 : Math.random() || 0.1),
                    Te = Ye.length;
                  for (
                    z && (n = w == u || w || z);
                    oe !== Te && (_ = Ye[oe]) != null;
                    oe++
                  ) {
                    if (g && _) {
                      for (
                        W = 0, !w && _.ownerDocument != u && (it(_), (j = !f));
                        (U = s[W++]);

                      )
                        if (U(_, w || u, j)) {
                          a.call(T, _);
                          break;
                        }
                      z && (h = wt);
                    }
                    p && ((_ = !U && _) && L--, x && Ae.push(_));
                  }
                  if (((L += oe), p && oe !== L)) {
                    for (W = 0; (U = l[W++]); ) U(Ae, be, w, j);
                    if (x) {
                      if (L > 0)
                        for (; oe--; )
                          Ae[oe] || be[oe] || (be[oe] = Fe.call(T));
                      be = Ft(be);
                    }
                    a.apply(T, be),
                      z &&
                        !x &&
                        be.length > 0 &&
                        L + l.length > 1 &&
                        i.uniqueSort(T);
                  }
                  return z && ((h = wt), (n = Pe)), Ae;
                };
              return p ? Ie(v) : v;
            }
            function ln(s, l) {
              var p,
                g = [],
                v = [],
                x = $[s + " "];
              if (!x) {
                for (l || (l = Rt(s)), p = l.length; p--; )
                  (x = cn(l[p])), x[m] ? g.push(x) : v.push(x);
                (x = $(s, Br(v, g))), (x.selector = s);
              }
              return x;
            }
            function Un(s, l, p, g) {
              var v,
                x,
                w,
                j,
                T,
                z = typeof s == "function" && s,
                _ = !g && Rt((s = z.selector || s));
              if (((p = p || []), _.length === 1)) {
                if (
                  ((x = _[0] = _[0].slice(0)),
                  x.length > 2 &&
                    (w = x[0]).type === "ID" &&
                    l.nodeType === 9 &&
                    f &&
                    t.relative[x[1].type])
                ) {
                  if (
                    ((l = (t.find.ID(w.matches[0].replace(Ke, Ze), l) ||
                      [])[0]),
                    l)
                  )
                    z && (l = l.parentNode);
                  else return p;
                  s = s.slice(x.shift().value.length);
                }
                for (
                  v = Xe.needsContext.test(s) ? 0 : x.length;
                  v-- && ((w = x[v]), !t.relative[(j = w.type)]);

                )
                  if (
                    (T = t.find[j]) &&
                    (g = T(
                      w.matches[0].replace(Ke, Ze),
                      (an.test(x[0].type) && un(l.parentNode)) || l
                    ))
                  ) {
                    if ((x.splice(v, 1), (s = g.length && It(x)), !s))
                      return a.apply(p, g), p;
                    break;
                  }
              }
              return (
                (z || ln(s, _))(
                  g,
                  l,
                  !f,
                  p,
                  !l || (an.test(s) && un(l.parentNode)) || l
                ),
                p
              );
            }
            (C.sortStable = m.split("").sort(de).join("") === m),
              it(),
              (C.sortDetached = xt(function (s) {
                return (
                  s.compareDocumentPosition(u.createElement("fieldset")) & 1
                );
              })),
              (i.find = ne),
              (i.expr[":"] = i.expr.pseudos),
              (i.unique = i.uniqueSort),
              (ne.compile = ln),
              (ne.select = Un),
              (ne.setDocument = it),
              (ne.escape = i.escapeSelector),
              (ne.getText = i.text),
              (ne.isXML = i.isXMLDoc),
              (ne.selectors = i.expr),
              (ne.support = i.support),
              (ne.uniqueSort = i.uniqueSort);
          })();
          var Ce = function (e, t, n) {
              for (
                var r = [], o = n !== void 0;
                (e = e[t]) && e.nodeType !== 9;

              )
                if (e.nodeType === 1) {
                  if (o && i(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            at = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
              return n;
            },
            pt = i.expr.match.needsContext,
            tt =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function Se(e, t, n) {
            return D(t)
              ? i.grep(e, function (r, o) {
                  return !!t.call(r, o, r) !== n;
                })
              : t.nodeType
              ? i.grep(e, function (r) {
                  return (r === t) !== n;
                })
              : typeof t != "string"
              ? i.grep(e, function (r) {
                  return re.call(t, r) > -1 !== n;
                })
              : i.filter(t, e, n);
          }
          (i.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              t.length === 1 && r.nodeType === 1
                ? i.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : i.find.matches(
                    e,
                    i.grep(t, function (o) {
                      return o.nodeType === 1;
                    })
                  )
            );
          }),
            i.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if (typeof e != "string")
                  return this.pushStack(
                    i(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (i.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  i.find(e, o[t], n);
                return r > 1 ? i.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(Se(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(Se(this, e || [], !0));
              },
              is: function (e) {
                return !!Se(
                  this,
                  typeof e == "string" && pt.test(e) ? i(e) : e || [],
                  !1
                ).length;
              },
            });
          var we,
            Oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            qe = (i.fn.init = function (e, t, n) {
              var r, o;
              if (!e) return this;
              if (((n = n || we), typeof e == "string"))
                if (
                  (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
                    ? (r = [null, e, null])
                    : (r = Oe.exec(e)),
                  r && (r[1] || !t))
                )
                  if (r[1]) {
                    if (
                      ((t = t instanceof i ? t[0] : t),
                      i.merge(
                        this,
                        i.parseHTML(
                          r[1],
                          t && t.nodeType ? t.ownerDocument || t : H,
                          !0
                        )
                      ),
                      tt.test(r[1]) && i.isPlainObject(t))
                    )
                      for (r in t)
                        D(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                  } else
                    return (
                      (o = H.getElementById(r[2])),
                      o && ((this[0] = o), (this.length = 1)),
                      this
                    );
                else
                  return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
              else {
                if (e.nodeType) return (this[0] = e), (this.length = 1), this;
                if (D(e)) return n.ready !== void 0 ? n.ready(e) : e(i);
              }
              return i.makeArray(e, this);
            });
          (qe.prototype = i.fn), (we = i(H));
          var ce = /^(?:parents|prev(?:Until|All))/,
            se = { children: !0, contents: !0, next: !0, prev: !0 };
          i.fn.extend({
            has: function (e) {
              var t = i(e, this),
                n = t.length;
              return this.filter(function () {
                for (var r = 0; r < n; r++)
                  if (i.contains(this, t[r])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                a = [],
                u = typeof e != "string" && i(e);
              if (!pt.test(e)) {
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (u
                        ? u.index(n) > -1
                        : n.nodeType === 1 && i.find.matchesSelector(n, e))
                    ) {
                      a.push(n);
                      break;
                    }
              }
              return this.pushStack(a.length > 1 ? i.uniqueSort(a) : a);
            },
            index: function (e) {
              return e
                ? typeof e == "string"
                  ? re.call(i(e), this[0])
                  : re.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))));
            },
            addBack: function (e) {
              return this.add(
                e == null ? this.prevObject : this.prevObject.filter(e)
              );
            },
          });
          function ye(e, t) {
            for (; (e = e[t]) && e.nodeType !== 1; );
            return e;
          }
          i.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null;
              },
              parents: function (e) {
                return Ce(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return Ce(e, "parentNode", n);
              },
              next: function (e) {
                return ye(e, "nextSibling");
              },
              prev: function (e) {
                return ye(e, "previousSibling");
              },
              nextAll: function (e) {
                return Ce(e, "nextSibling");
              },
              prevAll: function (e) {
                return Ce(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return Ce(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return Ce(e, "previousSibling", n);
              },
              siblings: function (e) {
                return at((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return at(e.firstChild);
              },
              contents: function (e) {
                return e.contentDocument != null && q(e.contentDocument)
                  ? e.contentDocument
                  : (B(e, "template") && (e = e.content || e),
                    i.merge([], e.childNodes));
              },
            },
            function (e, t) {
              i.fn[e] = function (n, r) {
                var o = i.map(this, t, n);
                return (
                  e.slice(-5) !== "Until" && (r = n),
                  r && typeof r == "string" && (o = i.filter(r, o)),
                  this.length > 1 &&
                    (se[e] || i.uniqueSort(o), ce.test(e) && o.reverse()),
                  this.pushStack(o)
                );
              };
            }
          );
          var le = /[^\x20\t\r\n\f]+/g;
          function $e(e) {
            var t = {};
            return (
              i.each(e.match(le) || [], function (n, r) {
                t[r] = !0;
              }),
              t
            );
          }
          i.Callbacks = function (e) {
            e = typeof e == "string" ? $e(e) : i.extend({}, e);
            var t,
              n,
              r,
              o,
              a = [],
              u = [],
              c = -1,
              f = function () {
                for (o = o || e.once, r = t = !0; u.length; c = -1)
                  for (n = u.shift(); ++c < a.length; )
                    a[c].apply(n[0], n[1]) === !1 &&
                      e.stopOnFalse &&
                      ((c = a.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (n ? (a = []) : (a = ""));
              },
              d = {
                add: function () {
                  return (
                    a &&
                      (n && !t && ((c = a.length - 1), u.push(n)),
                      (function y(m) {
                        i.each(m, function (h, b) {
                          D(b)
                            ? (!e.unique || !d.has(b)) && a.push(b)
                            : b && b.length && De(b) !== "string" && y(b);
                        });
                      })(arguments),
                      n && !t && f()),
                    this
                  );
                },
                remove: function () {
                  return (
                    i.each(arguments, function (y, m) {
                      for (var h; (h = i.inArray(m, a, h)) > -1; )
                        a.splice(h, 1), h <= c && c--;
                    }),
                    this
                  );
                },
                has: function (y) {
                  return y ? i.inArray(y, a) > -1 : a.length > 0;
                },
                empty: function () {
                  return a && (a = []), this;
                },
                disable: function () {
                  return (o = u = []), (a = n = ""), this;
                },
                disabled: function () {
                  return !a;
                },
                lock: function () {
                  return (o = u = []), !n && !t && (a = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (y, m) {
                  return (
                    o ||
                      ((m = m || []),
                      (m = [y, m.slice ? m.slice() : m]),
                      u.push(m),
                      t || f()),
                    this
                  );
                },
                fire: function () {
                  return d.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return d;
          };
          function ve(e) {
            return e;
          }
          function te(e) {
            throw e;
          }
          function K(e, t, n, r) {
            var o;
            try {
              e && D((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && D((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (a) {
              n.apply(void 0, [a]);
            }
          }
          i.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    i.Callbacks("memory"),
                    i.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    i.Callbacks("once memory"),
                    i.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    i.Callbacks("once memory"),
                    i.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                n = "pending",
                r = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (a) {
                    return r.then(null, a);
                  },
                  pipe: function () {
                    var a = arguments;
                    return i
                      .Deferred(function (u) {
                        i.each(t, function (c, f) {
                          var d = D(a[f[4]]) && a[f[4]];
                          o[f[1]](function () {
                            var y = d && d.apply(this, arguments);
                            y && D(y.promise)
                              ? y
                                  .promise()
                                  .progress(u.notify)
                                  .done(u.resolve)
                                  .fail(u.reject)
                              : u[f[0] + "With"](this, d ? [y] : arguments);
                          });
                        }),
                          (a = null);
                      })
                      .promise();
                  },
                  then: function (a, u, c) {
                    var f = 0;
                    function d(y, m, h, b) {
                      return function () {
                        var I = this,
                          Q = arguments,
                          $ = function () {
                            var de, ze;
                            if (!(y < f)) {
                              if (((de = h.apply(I, Q)), de === m.promise()))
                                throw new TypeError("Thenable self-resolution");
                              (ze =
                                de &&
                                (typeof de == "object" ||
                                  typeof de == "function") &&
                                de.then),
                                D(ze)
                                  ? b
                                    ? ze.call(
                                        de,
                                        d(f, m, ve, b),
                                        d(f, m, te, b)
                                      )
                                    : (f++,
                                      ze.call(
                                        de,
                                        d(f, m, ve, b),
                                        d(f, m, te, b),
                                        d(f, m, ve, m.notifyWith)
                                      ))
                                  : (h !== ve && ((I = void 0), (Q = [de])),
                                    (b || m.resolveWith)(I, Q));
                            }
                          },
                          ge = b
                            ? $
                            : function () {
                                try {
                                  $();
                                } catch (de) {
                                  i.Deferred.exceptionHook &&
                                    i.Deferred.exceptionHook(de, ge.error),
                                    y + 1 >= f &&
                                      (h !== te && ((I = void 0), (Q = [de])),
                                      m.rejectWith(I, Q));
                                }
                              };
                        y
                          ? ge()
                          : (i.Deferred.getErrorHook
                              ? (ge.error = i.Deferred.getErrorHook())
                              : i.Deferred.getStackHook &&
                                (ge.error = i.Deferred.getStackHook()),
                            O.setTimeout(ge));
                      };
                    }
                    return i
                      .Deferred(function (y) {
                        t[0][3].add(d(0, y, D(c) ? c : ve, y.notifyWith)),
                          t[1][3].add(d(0, y, D(a) ? a : ve)),
                          t[2][3].add(d(0, y, D(u) ? u : te));
                      })
                      .promise();
                  },
                  promise: function (a) {
                    return a != null ? i.extend(a, r) : r;
                  },
                },
                o = {};
              return (
                i.each(t, function (a, u) {
                  var c = u[2],
                    f = u[5];
                  (r[u[1]] = c.add),
                    f &&
                      c.add(
                        function () {
                          n = f;
                        },
                        t[3 - a][2].disable,
                        t[3 - a][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    c.add(u[3].fire),
                    (o[u[0]] = function () {
                      return (
                        o[u[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (o[u[0] + "With"] = c.fireWith);
                }),
                r.promise(o),
                e && e.call(o, o),
                o
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                o = E.call(arguments),
                a = i.Deferred(),
                u = function (c) {
                  return function (f) {
                    (r[c] = this),
                      (o[c] = arguments.length > 1 ? E.call(arguments) : f),
                      --t || a.resolveWith(r, o);
                  };
                };
              if (
                t <= 1 &&
                (K(e, a.done(u(n)).resolve, a.reject, !t),
                a.state() === "pending" || D(o[n] && o[n].then))
              )
                return a.then();
              for (; n--; ) K(o[n], u(n), a.reject);
              return a.promise();
            },
          });
          var me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (i.Deferred.exceptionHook = function (e, t) {
            O.console &&
              O.console.warn &&
              e &&
              me.test(e.name) &&
              O.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (i.readyException = function (e) {
              O.setTimeout(function () {
                throw e;
              });
            });
          var Le = i.Deferred();
          (i.fn.ready = function (e) {
            return (
              Le.then(e).catch(function (t) {
                i.readyException(t);
              }),
              this
            );
          }),
            i.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (e === !0 ? --i.readyWait : i.isReady) ||
                  ((i.isReady = !0),
                  !(e !== !0 && --i.readyWait > 0) && Le.resolveWith(H, [i]));
              },
            }),
            (i.ready.then = Le.then);
          function ut() {
            H.removeEventListener("DOMContentLoaded", ut),
              O.removeEventListener("load", ut),
              i.ready();
          }
          H.readyState === "complete" ||
          (H.readyState !== "loading" && !H.documentElement.doScroll)
            ? O.setTimeout(i.ready)
            : (H.addEventListener("DOMContentLoaded", ut),
              O.addEventListener("load", ut));
          var Qe = function (e, t, n, r, o, a, u) {
              var c = 0,
                f = e.length,
                d = n == null;
              if (De(n) === "object") {
                o = !0;
                for (c in n) Qe(e, t, c, n[c], !0, a, u);
              } else if (
                r !== void 0 &&
                ((o = !0),
                D(r) || (u = !0),
                d &&
                  (u
                    ? (t.call(e, r), (t = null))
                    : ((d = t),
                      (t = function (y, m, h) {
                        return d.call(i(y), h);
                      }))),
                t)
              )
                for (; c < f; c++)
                  t(e[c], n, u ? r : r.call(e[c], c, t(e[c], n)));
              return o ? e : d ? t.call(e) : f ? t(e[0], n) : a;
            },
            Gn = /^-ms-/,
            Qn = /-([a-z])/g;
          function Jn(e, t) {
            return t.toUpperCase();
          }
          function Be(e) {
            return e.replace(Gn, "ms-").replace(Qn, Jn);
          }
          var Tt = function (e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
          };
          function Ct() {
            this.expando = i.expando + Ct.uid++;
          }
          (Ct.uid = 1),
            (Ct.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Tt(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if (typeof t == "string") o[Be(t)] = n;
                else for (r in t) o[Be(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return t === void 0
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Be(t)];
              },
              access: function (e, t, n) {
                return t === void 0 ||
                  (t && typeof t == "string" && n === void 0)
                  ? this.get(e, t)
                  : (this.set(e, t, n), n !== void 0 ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (r !== void 0) {
                  if (t !== void 0)
                    for (
                      Array.isArray(t)
                        ? (t = t.map(Be))
                        : ((t = Be(t)),
                          (t = (t in r) ? [t] : t.match(le) || [])),
                        n = t.length;
                      n--;

                    )
                      delete r[t[n]];
                  (t === void 0 || i.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return t !== void 0 && !i.isEmptyObject(t);
              },
            });
          var N = new Ct(),
            ke = new Ct(),
            Kn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Zn = /[A-Z]/g;
          function er(e) {
            return e === "true"
              ? !0
              : e === "false"
              ? !1
              : e === "null"
              ? null
              : e === +e + ""
              ? +e
              : Kn.test(e)
              ? JSON.parse(e)
              : e;
          }
          function dn(e, t, n) {
            var r;
            if (n === void 0 && e.nodeType === 1)
              if (
                ((r = "data-" + t.replace(Zn, "-$&").toLowerCase()),
                (n = e.getAttribute(r)),
                typeof n == "string")
              ) {
                try {
                  n = er(n);
                } catch {}
                ke.set(e, t, n);
              } else n = void 0;
            return n;
          }
          i.extend({
            hasData: function (e) {
              return ke.hasData(e) || N.hasData(e);
            },
            data: function (e, t, n) {
              return ke.access(e, t, n);
            },
            removeData: function (e, t) {
              ke.remove(e, t);
            },
            _data: function (e, t, n) {
              return N.access(e, t, n);
            },
            _removeData: function (e, t) {
              N.remove(e, t);
            },
          }),
            i.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  a = this[0],
                  u = a && a.attributes;
                if (e === void 0) {
                  if (
                    this.length &&
                    ((o = ke.get(a)),
                    a.nodeType === 1 && !N.get(a, "hasDataAttrs"))
                  ) {
                    for (n = u.length; n--; )
                      u[n] &&
                        ((r = u[n].name),
                        r.indexOf("data-") === 0 &&
                          ((r = Be(r.slice(5))), dn(a, r, o[r])));
                    N.set(a, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return typeof e == "object"
                  ? this.each(function () {
                      ke.set(this, e);
                    })
                  : Qe(
                      this,
                      function (c) {
                        var f;
                        if (a && c === void 0)
                          return (
                            (f = ke.get(a, e)),
                            f !== void 0 || ((f = dn(a, e)), f !== void 0)
                              ? f
                              : void 0
                          );
                        this.each(function () {
                          ke.set(this, e, c);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  ke.remove(this, e);
                });
              },
            }),
            i.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = N.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = N.access(e, t, i.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = i.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  a = i._queueHooks(e, t),
                  u = function () {
                    i.dequeue(e, t);
                  };
                o === "inprogress" && ((o = n.shift()), r--),
                  o &&
                    (t === "fx" && n.unshift("inprogress"),
                    delete a.stop,
                    o.call(e, u, a)),
                  !r && a && a.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  N.get(e, n) ||
                  N.access(e, n, {
                    empty: i.Callbacks("once memory").add(function () {
                      N.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            i.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  typeof e != "string" && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? i.queue(this[0], e)
                    : t === void 0
                    ? this
                    : this.each(function () {
                        var r = i.queue(this, e, t);
                        i._queueHooks(this, e),
                          e === "fx" &&
                            r[0] !== "inprogress" &&
                            i.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  i.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = i.Deferred(),
                  a = this,
                  u = this.length,
                  c = function () {
                    --r || o.resolveWith(a, [a]);
                  };
                for (
                  typeof e != "string" && ((t = e), (e = void 0)),
                    e = e || "fx";
                  u--;

                )
                  (n = N.get(a[u], e + "queueHooks")),
                    n && n.empty && (r++, n.empty.add(c));
                return c(), o.promise(t);
              },
            });
          var pn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            St = new RegExp("^(?:([+-])=|)(" + pn + ")([a-z%]*)$", "i"),
            Je = ["Top", "Right", "Bottom", "Left"],
            st = H.documentElement,
            ht = function (e) {
              return i.contains(e.ownerDocument, e);
            },
            tr = { composed: !0 };
          st.getRootNode &&
            (ht = function (e) {
              return (
                i.contains(e.ownerDocument, e) ||
                e.getRootNode(tr) === e.ownerDocument
              );
            });
          var qt = function (e, t) {
            return (
              (e = t || e),
              e.style.display === "none" ||
                (e.style.display === "" &&
                  ht(e) &&
                  i.css(e, "display") === "none")
            );
          };
          function hn(e, t, n, r) {
            var o,
              a,
              u = 20,
              c = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return i.css(e, t, "");
                  },
              f = c(),
              d = (n && n[3]) || (i.cssNumber[t] ? "" : "px"),
              y =
                e.nodeType &&
                (i.cssNumber[t] || (d !== "px" && +f)) &&
                St.exec(i.css(e, t));
            if (y && y[3] !== d) {
              for (f = f / 2, d = d || y[3], y = +f || 1; u--; )
                i.style(e, t, y + d),
                  (1 - a) * (1 - (a = c() / f || 0.5)) <= 0 && (u = 0),
                  (y = y / a);
              (y = y * 2), i.style(e, t, y + d), (n = n || []);
            }
            return (
              n &&
                ((y = +y || +f || 0),
                (o = n[1] ? y + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = d), (r.start = y), (r.end = o))),
              o
            );
          }
          var gn = {};
          function nr(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = gn[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = i.css(t, "display")),
              t.parentNode.removeChild(t),
              o === "none" && (o = "block"),
              (gn[r] = o),
              o)
            );
          }
          function gt(e, t) {
            for (var n, r, o = [], a = 0, u = e.length; a < u; a++)
              (r = e[a]),
                r.style &&
                  ((n = r.style.display),
                  t
                    ? (n === "none" &&
                        ((o[a] = N.get(r, "display") || null),
                        o[a] || (r.style.display = "")),
                      r.style.display === "" && qt(r) && (o[a] = nr(r)))
                    : n !== "none" &&
                      ((o[a] = "none"), N.set(r, "display", n)));
            for (a = 0; a < u; a++) o[a] != null && (e[a].style.display = o[a]);
            return e;
          }
          i.fn.extend({
            show: function () {
              return gt(this, !0);
            },
            hide: function () {
              return gt(this);
            },
            toggle: function (e) {
              return typeof e == "boolean"
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    qt(this) ? i(this).show() : i(this).hide();
                  });
            },
          });
          var kt = /^(?:checkbox|radio)$/i,
            yn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            vn = /^$|^module$|\/(?:java|ecma)script/i;
          (function () {
            var e = H.createDocumentFragment(),
              t = e.appendChild(H.createElement("div")),
              n = H.createElement("input");
            n.setAttribute("type", "radio"),
              n.setAttribute("checked", "checked"),
              n.setAttribute("name", "t"),
              t.appendChild(n),
              (C.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (t.innerHTML = "<textarea>x</textarea>"),
              (C.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
              (t.innerHTML = "<option></option>"),
              (C.option = !!t.lastChild);
          })();
          var He = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          (He.tbody = He.tfoot = He.colgroup = He.caption = He.thead),
            (He.th = He.td),
            C.option ||
              (He.optgroup = He.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          function Ee(e, t) {
            var n;
            return (
              typeof e.getElementsByTagName < "u"
                ? (n = e.getElementsByTagName(t || "*"))
                : typeof e.querySelectorAll < "u"
                ? (n = e.querySelectorAll(t || "*"))
                : (n = []),
              t === void 0 || (t && B(e, t)) ? i.merge([e], n) : n
            );
          }
          function zt(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              N.set(e[n], "globalEval", !t || N.get(t[n], "globalEval"));
          }
          var rr = /<|&#?\w+;/;
          function mn(e, t, n, r, o) {
            for (
              var a,
                u,
                c,
                f,
                d,
                y,
                m = t.createDocumentFragment(),
                h = [],
                b = 0,
                I = e.length;
              b < I;
              b++
            )
              if (((a = e[b]), a || a === 0))
                if (De(a) === "object") i.merge(h, a.nodeType ? [a] : a);
                else if (!rr.test(a)) h.push(t.createTextNode(a));
                else {
                  for (
                    u = u || m.appendChild(t.createElement("div")),
                      c = (yn.exec(a) || ["", ""])[1].toLowerCase(),
                      f = He[c] || He._default,
                      u.innerHTML = f[1] + i.htmlPrefilter(a) + f[2],
                      y = f[0];
                    y--;

                  )
                    u = u.lastChild;
                  i.merge(h, u.childNodes),
                    (u = m.firstChild),
                    (u.textContent = "");
                }
            for (m.textContent = "", b = 0; (a = h[b++]); ) {
              if (r && i.inArray(a, r) > -1) {
                o && o.push(a);
                continue;
              }
              if (
                ((d = ht(a)),
                (u = Ee(m.appendChild(a), "script")),
                d && zt(u),
                n)
              )
                for (y = 0; (a = u[y++]); ) vn.test(a.type || "") && n.push(a);
            }
            return m;
          }
          var bn = /^([^.]*)(?:\.(.+)|)/;
          function yt() {
            return !0;
          }
          function vt() {
            return !1;
          }
          function Ut(e, t, n, r, o, a) {
            var u, c;
            if (typeof t == "object") {
              typeof n != "string" && ((r = r || n), (n = void 0));
              for (c in t) Ut(e, c, n, r, t[c], a);
              return e;
            }
            if (
              (r == null && o == null
                ? ((o = n), (r = n = void 0))
                : o == null &&
                  (typeof n == "string"
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              o === !1)
            )
              o = vt;
            else if (!o) return e;
            return (
              a === 1 &&
                ((u = o),
                (o = function (f) {
                  return i().off(f), u.apply(this, arguments);
                }),
                (o.guid = u.guid || (u.guid = i.guid++))),
              e.each(function () {
                i.event.add(this, t, o, r, n);
              })
            );
          }
          i.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var a,
                u,
                c,
                f,
                d,
                y,
                m,
                h,
                b,
                I,
                Q,
                $ = N.get(e);
              if (Tt(e))
                for (
                  n.handler && ((a = n), (n = a.handler), (o = a.selector)),
                    o && i.find.matchesSelector(st, o),
                    n.guid || (n.guid = i.guid++),
                    (f = $.events) || (f = $.events = Object.create(null)),
                    (u = $.handle) ||
                      (u = $.handle =
                        function (ge) {
                          return typeof i < "u" && i.event.triggered !== ge.type
                            ? i.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    t = (t || "").match(le) || [""],
                    d = t.length;
                  d--;

                )
                  (c = bn.exec(t[d]) || []),
                    (b = Q = c[1]),
                    (I = (c[2] || "").split(".").sort()),
                    b &&
                      ((m = i.event.special[b] || {}),
                      (b = (o ? m.delegateType : m.bindType) || b),
                      (m = i.event.special[b] || {}),
                      (y = i.extend(
                        {
                          type: b,
                          origType: Q,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && i.expr.match.needsContext.test(o),
                          namespace: I.join("."),
                        },
                        a
                      )),
                      (h = f[b]) ||
                        ((h = f[b] = []),
                        (h.delegateCount = 0),
                        (!m.setup || m.setup.call(e, r, I, u) === !1) &&
                          e.addEventListener &&
                          e.addEventListener(b, u)),
                      m.add &&
                        (m.add.call(e, y),
                        y.handler.guid || (y.handler.guid = n.guid)),
                      o ? h.splice(h.delegateCount++, 0, y) : h.push(y),
                      (i.event.global[b] = !0));
            },
            remove: function (e, t, n, r, o) {
              var a,
                u,
                c,
                f,
                d,
                y,
                m,
                h,
                b,
                I,
                Q,
                $ = N.hasData(e) && N.get(e);
              if (!(!$ || !(f = $.events))) {
                for (t = (t || "").match(le) || [""], d = t.length; d--; ) {
                  if (
                    ((c = bn.exec(t[d]) || []),
                    (b = Q = c[1]),
                    (I = (c[2] || "").split(".").sort()),
                    !b)
                  ) {
                    for (b in f) i.event.remove(e, b + t[d], n, r, !0);
                    continue;
                  }
                  for (
                    m = i.event.special[b] || {},
                      b = (r ? m.delegateType : m.bindType) || b,
                      h = f[b] || [],
                      c =
                        c[2] &&
                        new RegExp(
                          "(^|\\.)" + I.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      u = a = h.length;
                    a--;

                  )
                    (y = h[a]),
                      (o || Q === y.origType) &&
                        (!n || n.guid === y.guid) &&
                        (!c || c.test(y.namespace)) &&
                        (!r ||
                          r === y.selector ||
                          (r === "**" && y.selector)) &&
                        (h.splice(a, 1),
                        y.selector && h.delegateCount--,
                        m.remove && m.remove.call(e, y));
                  u &&
                    !h.length &&
                    ((!m.teardown || m.teardown.call(e, I, $.handle) === !1) &&
                      i.removeEvent(e, b, $.handle),
                    delete f[b]);
                }
                i.isEmptyObject(f) && N.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                a,
                u,
                c = new Array(arguments.length),
                f = i.event.fix(e),
                d =
                  (N.get(this, "events") || Object.create(null))[f.type] || [],
                y = i.event.special[f.type] || {};
              for (c[0] = f, t = 1; t < arguments.length; t++)
                c[t] = arguments[t];
              if (
                ((f.delegateTarget = this),
                !(y.preDispatch && y.preDispatch.call(this, f) === !1))
              ) {
                for (
                  u = i.event.handlers.call(this, f, d), t = 0;
                  (o = u[t++]) && !f.isPropagationStopped();

                )
                  for (
                    f.currentTarget = o.elem, n = 0;
                    (a = o.handlers[n++]) && !f.isImmediatePropagationStopped();

                  )
                    (!f.rnamespace ||
                      a.namespace === !1 ||
                      f.rnamespace.test(a.namespace)) &&
                      ((f.handleObj = a),
                      (f.data = a.data),
                      (r = (
                        (i.event.special[a.origType] || {}).handle || a.handler
                      ).apply(o.elem, c)),
                      r !== void 0 &&
                        (f.result = r) === !1 &&
                        (f.preventDefault(), f.stopPropagation()));
                return y.postDispatch && y.postDispatch.call(this, f), f.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                a,
                u,
                c = [],
                f = t.delegateCount,
                d = e.target;
              if (f && d.nodeType && !(e.type === "click" && e.button >= 1)) {
                for (; d !== this; d = d.parentNode || this)
                  if (
                    d.nodeType === 1 &&
                    !(e.type === "click" && d.disabled === !0)
                  ) {
                    for (a = [], u = {}, n = 0; n < f; n++)
                      (r = t[n]),
                        (o = r.selector + " "),
                        u[o] === void 0 &&
                          (u[o] = r.needsContext
                            ? i(o, this).index(d) > -1
                            : i.find(o, this, null, [d]).length),
                        u[o] && a.push(r);
                    a.length && c.push({ elem: d, handlers: a });
                  }
              }
              return (
                (d = this),
                f < t.length && c.push({ elem: d, handlers: t.slice(f) }),
                c
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(i.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: D(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (n) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n,
                  });
                },
              });
            },
            fix: function (e) {
              return e[i.expando] ? e : new i.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    kt.test(t.type) &&
                      t.click &&
                      B(t, "input") &&
                      Lt(t, "click", !0),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    kt.test(t.type) &&
                      t.click &&
                      B(t, "input") &&
                      Lt(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (kt.test(t.type) &&
                      t.click &&
                      B(t, "input") &&
                      N.get(t, "click")) ||
                    B(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  e.result !== void 0 &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          };
          function Lt(e, t, n) {
            if (!n) {
              N.get(e, t) === void 0 && i.event.add(e, t, yt);
              return;
            }
            N.set(e, t, !1),
              i.event.add(e, t, {
                namespace: !1,
                handler: function (r) {
                  var o,
                    a = N.get(this, t);
                  if (r.isTrigger & 1 && this[t]) {
                    if (a)
                      (i.event.special[t] || {}).delegateType &&
                        r.stopPropagation();
                    else if (
                      ((a = E.call(arguments)),
                      N.set(this, t, a),
                      this[t](),
                      (o = N.get(this, t)),
                      N.set(this, t, !1),
                      a !== o)
                    )
                      return (
                        r.stopImmediatePropagation(), r.preventDefault(), o
                      );
                  } else
                    a &&
                      (N.set(this, t, i.event.trigger(a[0], a.slice(1), this)),
                      r.stopPropagation(),
                      (r.isImmediatePropagationStopped = yt));
                },
              });
          }
          (i.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
            (i.Event = function (e, t) {
              if (!(this instanceof i.Event)) return new i.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (e.defaultPrevented === void 0 && e.returnValue === !1)
                      ? yt
                      : vt),
                  (this.target =
                    e.target && e.target.nodeType === 3
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && i.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[i.expando] = !0);
            }),
            (i.Event.prototype = {
              constructor: i.Event,
              isDefaultPrevented: vt,
              isPropagationStopped: vt,
              isImmediatePropagationStopped: vt,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = yt),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = yt),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = yt),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            i.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              i.event.addProp
            ),
            i.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function n(r) {
                if (H.documentMode) {
                  var o = N.get(this, "handle"),
                    a = i.event.fix(r);
                  (a.type = r.type === "focusin" ? "focus" : "blur"),
                    (a.isSimulated = !0),
                    o(r),
                    a.target === a.currentTarget && o(a);
                } else i.event.simulate(t, r.target, i.event.fix(r));
              }
              (i.event.special[e] = {
                setup: function () {
                  var r;
                  if ((Lt(this, e, !0), H.documentMode))
                    (r = N.get(this, t)),
                      r || this.addEventListener(t, n),
                      N.set(this, t, (r || 0) + 1);
                  else return !1;
                },
                trigger: function () {
                  return Lt(this, e), !0;
                },
                teardown: function () {
                  var r;
                  if (H.documentMode)
                    (r = N.get(this, t) - 1),
                      r
                        ? N.set(this, t, r)
                        : (this.removeEventListener(t, n), N.remove(this, t));
                  else return !1;
                },
                _default: function (r) {
                  return N.get(r.target, e);
                },
                delegateType: t,
              }),
                (i.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = H.documentMode ? this : r,
                      a = N.get(o, t);
                    a ||
                      (H.documentMode
                        ? this.addEventListener(t, n)
                        : r.addEventListener(e, n, !0)),
                      N.set(o, t, (a || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = H.documentMode ? this : r,
                      a = N.get(o, t) - 1;
                    a
                      ? N.set(o, t, a)
                      : (H.documentMode
                          ? this.removeEventListener(t, n)
                          : r.removeEventListener(e, n, !0),
                        N.remove(o, t));
                  },
                });
            }),
            i.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                i.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (n) {
                    var r,
                      o = this,
                      a = n.relatedTarget,
                      u = n.handleObj;
                    return (
                      (!a || (a !== o && !i.contains(o, a))) &&
                        ((n.type = u.origType),
                        (r = u.handler.apply(this, arguments)),
                        (n.type = t)),
                      r
                    );
                  },
                };
              }
            ),
            i.fn.extend({
              on: function (e, t, n, r) {
                return Ut(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Ut(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    i(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if (typeof e == "object") {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (t === !1 || typeof t == "function") &&
                    ((n = t), (t = void 0)),
                  n === !1 && (n = vt),
                  this.each(function () {
                    i.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var ir = /<script|<style|<link/i,
            or = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ar = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function xn(e, t) {
            return (
              (B(e, "table") &&
                B(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
                i(e).children("tbody")[0]) ||
              e
            );
          }
          function ur(e) {
            return (
              (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e
            );
          }
          function sr(e) {
            return (
              (e.type || "").slice(0, 5) === "true/"
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function wn(e, t) {
            var n, r, o, a, u, c, f;
            if (t.nodeType === 1) {
              if (N.hasData(e) && ((a = N.get(e)), (f = a.events), f)) {
                N.remove(t, "handle events");
                for (o in f)
                  for (n = 0, r = f[o].length; n < r; n++)
                    i.event.add(t, o, f[o][n]);
              }
              ke.hasData(e) &&
                ((u = ke.access(e)), (c = i.extend({}, u)), ke.set(t, c));
            }
          }
          function fr(e, t) {
            var n = t.nodeName.toLowerCase();
            n === "input" && kt.test(e.type)
              ? (t.checked = e.checked)
              : (n === "input" || n === "textarea") &&
                (t.defaultValue = e.defaultValue);
          }
          function mt(e, t, n, r) {
            t = V(t);
            var o,
              a,
              u,
              c,
              f,
              d,
              y = 0,
              m = e.length,
              h = m - 1,
              b = t[0],
              I = D(b);
            if (
              I ||
              (m > 1 && typeof b == "string" && !C.checkClone && or.test(b))
            )
              return e.each(function (Q) {
                var $ = e.eq(Q);
                I && (t[0] = b.call(this, Q, $.html())), mt($, t, n, r);
              });
            if (
              m &&
              ((o = mn(t, e[0].ownerDocument, !1, e, r)),
              (a = o.firstChild),
              o.childNodes.length === 1 && (o = a),
              a || r)
            ) {
              for (u = i.map(Ee(o, "script"), ur), c = u.length; y < m; y++)
                (f = o),
                  y !== h &&
                    ((f = i.clone(f, !0, !0)),
                    c && i.merge(u, Ee(f, "script"))),
                  n.call(e[y], f, y);
              if (c)
                for (
                  d = u[u.length - 1].ownerDocument, i.map(u, sr), y = 0;
                  y < c;
                  y++
                )
                  (f = u[y]),
                    vn.test(f.type || "") &&
                      !N.access(f, "globalEval") &&
                      i.contains(d, f) &&
                      (f.src && (f.type || "").toLowerCase() !== "module"
                        ? i._evalUrl &&
                          !f.noModule &&
                          i._evalUrl(
                            f.src,
                            { nonce: f.nonce || f.getAttribute("nonce") },
                            d
                          )
                        : et(f.textContent.replace(ar, ""), f, d));
            }
            return e;
          }
          function Tn(e, t, n) {
            for (
              var r, o = t ? i.filter(t, e) : e, a = 0;
              (r = o[a]) != null;
              a++
            )
              !n && r.nodeType === 1 && i.cleanData(Ee(r)),
                r.parentNode &&
                  (n && ht(r) && zt(Ee(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          i.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                a,
                u,
                c = e.cloneNode(!0),
                f = ht(e);
              if (
                !C.noCloneChecked &&
                (e.nodeType === 1 || e.nodeType === 11) &&
                !i.isXMLDoc(e)
              )
                for (u = Ee(c), a = Ee(e), r = 0, o = a.length; r < o; r++)
                  fr(a[r], u[r]);
              if (t)
                if (n)
                  for (
                    a = a || Ee(e), u = u || Ee(c), r = 0, o = a.length;
                    r < o;
                    r++
                  )
                    wn(a[r], u[r]);
                else wn(e, c);
              return (
                (u = Ee(c, "script")),
                u.length > 0 && zt(u, !f && Ee(e, "script")),
                c
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = i.event.special, a = 0;
                (n = e[a]) !== void 0;
                a++
              )
                if (Tt(n)) {
                  if ((t = n[N.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? i.event.remove(n, r)
                          : i.removeEvent(n, r, t.handle);
                    n[N.expando] = void 0;
                  }
                  n[ke.expando] && (n[ke.expando] = void 0);
                }
            },
          }),
            i.fn.extend({
              detach: function (e) {
                return Tn(this, e, !0);
              },
              remove: function (e) {
                return Tn(this, e);
              },
              text: function (e) {
                return Qe(
                  this,
                  function (t) {
                    return t === void 0
                      ? i.text(this)
                      : this.empty().each(function () {
                          (this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9) &&
                            (this.textContent = t);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return mt(this, arguments, function (e) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    var t = xn(this, e);
                    t.appendChild(e);
                  }
                });
              },
              prepend: function () {
                return mt(this, arguments, function (e) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    var t = xn(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return mt(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return mt(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; (e = this[t]) != null; t++)
                  e.nodeType === 1 &&
                    (i.cleanData(Ee(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = e ?? !1),
                  (t = t ?? e),
                  this.map(function () {
                    return i.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return Qe(
                  this,
                  function (t) {
                    var n = this[0] || {},
                      r = 0,
                      o = this.length;
                    if (t === void 0 && n.nodeType === 1) return n.innerHTML;
                    if (
                      typeof t == "string" &&
                      !ir.test(t) &&
                      !He[(yn.exec(t) || ["", ""])[1].toLowerCase()]
                    ) {
                      t = i.htmlPrefilter(t);
                      try {
                        for (; r < o; r++)
                          (n = this[r] || {}),
                            n.nodeType === 1 &&
                              (i.cleanData(Ee(n, !1)), (n.innerHTML = t));
                        n = 0;
                      } catch {}
                    }
                    n && this.empty().append(t);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return mt(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    i.inArray(this, e) < 0 &&
                      (i.cleanData(Ee(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            i.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                i.fn[e] = function (n) {
                  for (
                    var r, o = [], a = i(n), u = a.length - 1, c = 0;
                    c <= u;
                    c++
                  )
                    (r = c === u ? this : this.clone(!0)),
                      i(a[c])[t](r),
                      ee.apply(o, r.get());
                  return this.pushStack(o);
                };
              }
            );
          var Vt = new RegExp("^(" + pn + ")(?!px)[a-z%]+$", "i"),
            Xt = /^--/,
            Ht = function (e) {
              var t = e.ownerDocument.defaultView;
              return (!t || !t.opener) && (t = O), t.getComputedStyle(e);
            },
            Cn = function (e, t, n) {
              var r,
                o,
                a = {};
              for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
              r = n.call(e);
              for (o in t) e.style[o] = a[o];
              return r;
            },
            cr = new RegExp(Je.join("|"), "i");
          (function () {
            function e() {
              if (d) {
                (f.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (d.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  st.appendChild(f).appendChild(d);
                var y = O.getComputedStyle(d);
                (n = y.top !== "1%"),
                  (c = t(y.marginLeft) === 12),
                  (d.style.right = "60%"),
                  (a = t(y.right) === 36),
                  (r = t(y.width) === 36),
                  (d.style.position = "absolute"),
                  (o = t(d.offsetWidth / 3) === 12),
                  st.removeChild(f),
                  (d = null);
              }
            }
            function t(y) {
              return Math.round(parseFloat(y));
            }
            var n,
              r,
              o,
              a,
              u,
              c,
              f = H.createElement("div"),
              d = H.createElement("div");
            d.style &&
              ((d.style.backgroundClip = "content-box"),
              (d.cloneNode(!0).style.backgroundClip = ""),
              (C.clearCloneStyle = d.style.backgroundClip === "content-box"),
              i.extend(C, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), c;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var y, m, h, b;
                  return (
                    u == null &&
                      ((y = H.createElement("table")),
                      (m = H.createElement("tr")),
                      (h = H.createElement("div")),
                      (y.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (m.style.cssText = "border:1px solid"),
                      (m.style.height = "1px"),
                      (h.style.height = "9px"),
                      (h.style.display = "block"),
                      st.appendChild(y).appendChild(m).appendChild(h),
                      (b = O.getComputedStyle(m)),
                      (u =
                        parseInt(b.height, 10) +
                          parseInt(b.borderTopWidth, 10) +
                          parseInt(b.borderBottomWidth, 10) ===
                        m.offsetHeight),
                      st.removeChild(y)),
                    u
                  );
                },
              }));
          })();
          function Et(e, t, n) {
            var r,
              o,
              a,
              u,
              c = Xt.test(t),
              f = e.style;
            return (
              (n = n || Ht(e)),
              n &&
                ((u = n.getPropertyValue(t) || n[t]),
                c && u && (u = u.replace(P, "$1") || void 0),
                u === "" && !ht(e) && (u = i.style(e, t)),
                !C.pixelBoxStyles() &&
                  Vt.test(u) &&
                  cr.test(t) &&
                  ((r = f.width),
                  (o = f.minWidth),
                  (a = f.maxWidth),
                  (f.minWidth = f.maxWidth = f.width = u),
                  (u = n.width),
                  (f.width = r),
                  (f.minWidth = o),
                  (f.maxWidth = a))),
              u !== void 0 ? u + "" : u
            );
          }
          function Sn(e, t) {
            return {
              get: function () {
                if (e()) {
                  delete this.get;
                  return;
                }
                return (this.get = t).apply(this, arguments);
              },
            };
          }
          var kn = ["Webkit", "Moz", "ms"],
            En = H.createElement("div").style,
            jn = {};
          function lr(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = kn.length; n--; )
              if (((e = kn[n] + t), e in En)) return e;
          }
          function Yt(e) {
            var t = i.cssProps[e] || jn[e];
            return t || (e in En ? e : (jn[e] = lr(e) || e));
          }
          var dr = /^(none|table(?!-c[ea]).+)/,
            pr = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            An = { letterSpacing: "0", fontWeight: "400" };
          function Nn(e, t, n) {
            var r = St.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function Gt(e, t, n, r, o, a) {
            var u = t === "width" ? 1 : 0,
              c = 0,
              f = 0,
              d = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; u < 4; u += 2)
              n === "margin" && (d += i.css(e, n + Je[u], !0, o)),
                r
                  ? (n === "content" &&
                      (f -= i.css(e, "padding" + Je[u], !0, o)),
                    n !== "margin" &&
                      (f -= i.css(e, "border" + Je[u] + "Width", !0, o)))
                  : ((f += i.css(e, "padding" + Je[u], !0, o)),
                    n !== "padding"
                      ? (f += i.css(e, "border" + Je[u] + "Width", !0, o))
                      : (c += i.css(e, "border" + Je[u] + "Width", !0, o)));
            return (
              !r &&
                a >= 0 &&
                (f +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        a -
                        f -
                        c -
                        0.5
                    )
                  ) || 0),
              f + d
            );
          }
          function Dn(e, t, n) {
            var r = Ht(e),
              o = !C.boxSizingReliable() || n,
              a = o && i.css(e, "boxSizing", !1, r) === "border-box",
              u = a,
              c = Et(e, t, r),
              f = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Vt.test(c)) {
              if (!n) return c;
              c = "auto";
            }
            return (
              ((!C.boxSizingReliable() && a) ||
                (!C.reliableTrDimensions() && B(e, "tr")) ||
                c === "auto" ||
                (!parseFloat(c) && i.css(e, "display", !1, r) === "inline")) &&
                e.getClientRects().length &&
                ((a = i.css(e, "boxSizing", !1, r) === "border-box"),
                (u = f in e),
                u && (c = e[f])),
              (c = parseFloat(c) || 0),
              c + Gt(e, t, n || (a ? "border" : "content"), u, r, c) + "px"
            );
          }
          i.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Et(e, "opacity");
                    return n === "" ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
                var o,
                  a,
                  u,
                  c = Be(t),
                  f = Xt.test(t),
                  d = e.style;
                if (
                  (f || (t = Yt(c)),
                  (u = i.cssHooks[t] || i.cssHooks[c]),
                  n !== void 0)
                ) {
                  if (
                    ((a = typeof n),
                    a === "string" &&
                      (o = St.exec(n)) &&
                      o[1] &&
                      ((n = hn(e, t, o)), (a = "number")),
                    n == null || n !== n)
                  )
                    return;
                  a === "number" &&
                    !f &&
                    (n += (o && o[3]) || (i.cssNumber[c] ? "" : "px")),
                    !C.clearCloneStyle &&
                      n === "" &&
                      t.indexOf("background") === 0 &&
                      (d[t] = "inherit"),
                    (!u || !("set" in u) || (n = u.set(e, n, r)) !== void 0) &&
                      (f ? d.setProperty(t, n) : (d[t] = n));
                } else
                  return u && "get" in u && (o = u.get(e, !1, r)) !== void 0
                    ? o
                    : d[t];
              }
            },
            css: function (e, t, n, r) {
              var o,
                a,
                u,
                c = Be(t),
                f = Xt.test(t);
              return (
                f || (t = Yt(c)),
                (u = i.cssHooks[t] || i.cssHooks[c]),
                u && "get" in u && (o = u.get(e, !0, n)),
                o === void 0 && (o = Et(e, t, r)),
                o === "normal" && t in An && (o = An[t]),
                n === "" || n
                  ? ((a = parseFloat(o)), n === !0 || isFinite(a) ? a || 0 : o)
                  : o
              );
            },
          }),
            i.each(["height", "width"], function (e, t) {
              i.cssHooks[t] = {
                get: function (n, r, o) {
                  if (r)
                    return dr.test(i.css(n, "display")) &&
                      (!n.getClientRects().length ||
                        !n.getBoundingClientRect().width)
                      ? Cn(n, pr, function () {
                          return Dn(n, t, o);
                        })
                      : Dn(n, t, o);
                },
                set: function (n, r, o) {
                  var a,
                    u = Ht(n),
                    c = !C.scrollboxSize() && u.position === "absolute",
                    f = c || o,
                    d = f && i.css(n, "boxSizing", !1, u) === "border-box",
                    y = o ? Gt(n, t, o, d, u) : 0;
                  return (
                    d &&
                      c &&
                      (y -= Math.ceil(
                        n["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(u[t]) -
                          Gt(n, t, "border", !1, u) -
                          0.5
                      )),
                    y &&
                      (a = St.exec(r)) &&
                      (a[3] || "px") !== "px" &&
                      ((n.style[t] = r), (r = i.css(n, t))),
                    Nn(n, r, y)
                  );
                },
              };
            }),
            (i.cssHooks.marginLeft = Sn(C.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Et(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Cn(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            i.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (i.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        o = {},
                        a = typeof n == "string" ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      o[e + Je[r] + t] = a[r] || a[r - 2] || a[0];
                    return o;
                  },
                }),
                  e !== "margin" && (i.cssHooks[e + t].set = Nn);
              }
            ),
            i.fn.extend({
              css: function (e, t) {
                return Qe(
                  this,
                  function (n, r, o) {
                    var a,
                      u,
                      c = {},
                      f = 0;
                    if (Array.isArray(r)) {
                      for (a = Ht(n), u = r.length; f < u; f++)
                        c[r[f]] = i.css(n, r[f], !1, a);
                      return c;
                    }
                    return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            });
          function je(e, t, n, r, o) {
            return new je.prototype.init(e, t, n, r, o);
          }
          (i.Tween = je),
            (je.prototype = {
              constructor: je,
              init: function (e, t, n, r, o, a) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || i.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = a || (i.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = je.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : je.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = je.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        i.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : je.propHooks._default.set(this),
                  this
                );
              },
            }),
            (je.prototype.init.prototype = je.prototype),
            (je.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return e.elem.nodeType !== 1 ||
                    (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
                    ? e.elem[e.prop]
                    : ((t = i.css(e.elem, e.prop, "")),
                      !t || t === "auto" ? 0 : t);
                },
                set: function (e) {
                  i.fx.step[e.prop]
                    ? i.fx.step[e.prop](e)
                    : e.elem.nodeType === 1 &&
                      (i.cssHooks[e.prop] || e.elem.style[Yt(e.prop)] != null)
                    ? i.style(e.elem, e.prop, e.now + e.unit)
                    : (e.elem[e.prop] = e.now);
                },
              },
            }),
            (je.propHooks.scrollTop = je.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (i.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (i.fx = je.prototype.init),
            (i.fx.step = {});
          var bt,
            Mt,
            hr = /^(?:toggle|show|hide)$/,
            gr = /queueHooks$/;
          function Qt() {
            Mt &&
              (H.hidden === !1 && O.requestAnimationFrame
                ? O.requestAnimationFrame(Qt)
                : O.setTimeout(Qt, i.fx.interval),
              i.fx.tick());
          }
          function On() {
            return (
              O.setTimeout(function () {
                bt = void 0;
              }),
              (bt = Date.now())
            );
          }
          function Pt(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              (n = Je[r]), (o["margin" + n] = o["padding" + n] = e);
            return t && (o.opacity = o.width = e), o;
          }
          function qn(e, t, n) {
            for (
              var r,
                o = (Re.tweeners[t] || []).concat(Re.tweeners["*"]),
                a = 0,
                u = o.length;
              a < u;
              a++
            )
              if ((r = o[a].call(n, t, e))) return r;
          }
          function yr(e, t, n) {
            var r,
              o,
              a,
              u,
              c,
              f,
              d,
              y,
              m = "width" in t || "height" in t,
              h = this,
              b = {},
              I = e.style,
              Q = e.nodeType && qt(e),
              $ = N.get(e, "fxshow");
            n.queue ||
              ((u = i._queueHooks(e, "fx")),
              u.unqueued == null &&
                ((u.unqueued = 0),
                (c = u.empty.fire),
                (u.empty.fire = function () {
                  u.unqueued || c();
                })),
              u.unqueued++,
              h.always(function () {
                h.always(function () {
                  u.unqueued--, i.queue(e, "fx").length || u.empty.fire();
                });
              }));
            for (r in t)
              if (((o = t[r]), hr.test(o))) {
                if (
                  (delete t[r],
                  (a = a || o === "toggle"),
                  o === (Q ? "hide" : "show"))
                )
                  if (o === "show" && $ && $[r] !== void 0) Q = !0;
                  else continue;
                b[r] = ($ && $[r]) || i.style(e, r);
              }
            if (((f = !i.isEmptyObject(t)), !(!f && i.isEmptyObject(b)))) {
              m &&
                e.nodeType === 1 &&
                ((n.overflow = [I.overflow, I.overflowX, I.overflowY]),
                (d = $ && $.display),
                d == null && (d = N.get(e, "display")),
                (y = i.css(e, "display")),
                y === "none" &&
                  (d
                    ? (y = d)
                    : (gt([e], !0),
                      (d = e.style.display || d),
                      (y = i.css(e, "display")),
                      gt([e]))),
                (y === "inline" || (y === "inline-block" && d != null)) &&
                  i.css(e, "float") === "none" &&
                  (f ||
                    (h.done(function () {
                      I.display = d;
                    }),
                    d == null &&
                      ((y = I.display), (d = y === "none" ? "" : y))),
                  (I.display = "inline-block"))),
                n.overflow &&
                  ((I.overflow = "hidden"),
                  h.always(function () {
                    (I.overflow = n.overflow[0]),
                      (I.overflowX = n.overflow[1]),
                      (I.overflowY = n.overflow[2]);
                  })),
                (f = !1);
              for (r in b)
                f ||
                  ($
                    ? "hidden" in $ && (Q = $.hidden)
                    : ($ = N.access(e, "fxshow", { display: d })),
                  a && ($.hidden = !Q),
                  Q && gt([e], !0),
                  h.done(function () {
                    Q || gt([e]), N.remove(e, "fxshow");
                    for (r in b) i.style(e, r, b[r]);
                  })),
                  (f = qn(Q ? $[r] : 0, r, h)),
                  r in $ ||
                    (($[r] = f.start), Q && ((f.end = f.start), (f.start = 0)));
            }
          }
          function vr(e, t) {
            var n, r, o, a, u;
            for (n in e)
              if (
                ((r = Be(n)),
                (o = t[r]),
                (a = e[n]),
                Array.isArray(a) && ((o = a[1]), (a = e[n] = a[0])),
                n !== r && ((e[r] = a), delete e[n]),
                (u = i.cssHooks[r]),
                u && "expand" in u)
              ) {
                (a = u.expand(a)), delete e[r];
                for (n in a) n in e || ((e[n] = a[n]), (t[n] = o));
              } else t[r] = o;
          }
          function Re(e, t, n) {
            var r,
              o,
              a = 0,
              u = Re.prefilters.length,
              c = i.Deferred().always(function () {
                delete f.elem;
              }),
              f = function () {
                if (o) return !1;
                for (
                  var m = bt || On(),
                    h = Math.max(0, d.startTime + d.duration - m),
                    b = h / d.duration || 0,
                    I = 1 - b,
                    Q = 0,
                    $ = d.tweens.length;
                  Q < $;
                  Q++
                )
                  d.tweens[Q].run(I);
                return (
                  c.notifyWith(e, [d, I, h]),
                  I < 1 && $
                    ? h
                    : ($ || c.notifyWith(e, [d, 1, 0]),
                      c.resolveWith(e, [d]),
                      !1)
                );
              },
              d = c.promise({
                elem: e,
                props: i.extend({}, t),
                opts: i.extend(
                  !0,
                  { specialEasing: {}, easing: i.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: bt || On(),
                duration: n.duration,
                tweens: [],
                createTween: function (m, h) {
                  var b = i.Tween(
                    e,
                    d.opts,
                    m,
                    h,
                    d.opts.specialEasing[m] || d.opts.easing
                  );
                  return d.tweens.push(b), b;
                },
                stop: function (m) {
                  var h = 0,
                    b = m ? d.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; h < b; h++) d.tweens[h].run(1);
                  return (
                    m
                      ? (c.notifyWith(e, [d, 1, 0]), c.resolveWith(e, [d, m]))
                      : c.rejectWith(e, [d, m]),
                    this
                  );
                },
              }),
              y = d.props;
            for (vr(y, d.opts.specialEasing); a < u; a++)
              if (((r = Re.prefilters[a].call(d, e, y, d.opts)), r))
                return (
                  D(r.stop) &&
                    (i._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              i.map(y, qn, d),
              D(d.opts.start) && d.opts.start.call(e, d),
              d
                .progress(d.opts.progress)
                .done(d.opts.done, d.opts.complete)
                .fail(d.opts.fail)
                .always(d.opts.always),
              i.fx.timer(
                i.extend(f, { elem: e, anim: d, queue: d.opts.queue })
              ),
              d
            );
          }
          (i.Animation = i.extend(Re, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return hn(n.elem, e, St.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              D(e) ? ((t = e), (e = ["*"])) : (e = e.match(le));
              for (var n, r = 0, o = e.length; r < o; r++)
                (n = e[r]),
                  (Re.tweeners[n] = Re.tweeners[n] || []),
                  Re.tweeners[n].unshift(t);
            },
            prefilters: [yr],
            prefilter: function (e, t) {
              t ? Re.prefilters.unshift(e) : Re.prefilters.push(e);
            },
          })),
            (i.speed = function (e, t, n) {
              var r =
                e && typeof e == "object"
                  ? i.extend({}, e)
                  : {
                      complete: n || (!n && t) || (D(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !D(t) && t),
                    };
              return (
                i.fx.off
                  ? (r.duration = 0)
                  : typeof r.duration != "number" &&
                    (r.duration in i.fx.speeds
                      ? (r.duration = i.fx.speeds[r.duration])
                      : (r.duration = i.fx.speeds._default)),
                (r.queue == null || r.queue === !0) && (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  D(r.old) && r.old.call(this),
                    r.queue && i.dequeue(this, r.queue);
                }),
                r
              );
            }),
            i.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(qt)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = i.isEmptyObject(e),
                  a = i.speed(t, n, r),
                  u = function () {
                    var c = Re(this, i.extend({}, e), a);
                    (o || N.get(this, "finish")) && c.stop(!0);
                  };
                return (
                  (u.finish = u),
                  o || a.queue === !1 ? this.each(u) : this.queue(a.queue, u)
                );
              },
              stop: function (e, t, n) {
                var r = function (o) {
                  var a = o.stop;
                  delete o.stop, a(n);
                };
                return (
                  typeof e != "string" && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var o = !0,
                      a = e != null && e + "queueHooks",
                      u = i.timers,
                      c = N.get(this);
                    if (a) c[a] && c[a].stop && r(c[a]);
                    else
                      for (a in c) c[a] && c[a].stop && gr.test(a) && r(c[a]);
                    for (a = u.length; a--; )
                      u[a].elem === this &&
                        (e == null || u[a].queue === e) &&
                        (u[a].anim.stop(n), (o = !1), u.splice(a, 1));
                    (o || !n) && i.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  e !== !1 && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = N.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      a = i.timers,
                      u = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        i.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = a.length;
                      t--;

                    )
                      a[t].elem === this &&
                        a[t].queue === e &&
                        (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; t < u; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            i.each(["toggle", "show", "hide"], function (e, t) {
              var n = i.fn[t];
              i.fn[t] = function (r, o, a) {
                return r == null || typeof r == "boolean"
                  ? n.apply(this, arguments)
                  : this.animate(Pt(t, !0), r, o, a);
              };
            }),
            i.each(
              {
                slideDown: Pt("show"),
                slideUp: Pt("hide"),
                slideToggle: Pt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                i.fn[e] = function (n, r, o) {
                  return this.animate(t, n, r, o);
                };
              }
            ),
            (i.timers = []),
            (i.fx.tick = function () {
              var e,
                t = 0,
                n = i.timers;
              for (bt = Date.now(); t < n.length; t++)
                (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
              n.length || i.fx.stop(), (bt = void 0);
            }),
            (i.fx.timer = function (e) {
              i.timers.push(e), i.fx.start();
            }),
            (i.fx.interval = 13),
            (i.fx.start = function () {
              Mt || ((Mt = !0), Qt());
            }),
            (i.fx.stop = function () {
              Mt = null;
            }),
            (i.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (i.fn.delay = function (e, t) {
              return (
                (e = (i.fx && i.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (n, r) {
                  var o = O.setTimeout(n, e);
                  r.stop = function () {
                    O.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = H.createElement("input"),
                t = H.createElement("select"),
                n = t.appendChild(H.createElement("option"));
              (e.type = "checkbox"),
                (C.checkOn = e.value !== ""),
                (C.optSelected = n.selected),
                (e = H.createElement("input")),
                (e.value = "t"),
                (e.type = "radio"),
                (C.radioValue = e.value === "t");
            })();
          var Ln,
            jt = i.expr.attrHandle;
          i.fn.extend({
            attr: function (e, t) {
              return Qe(this, i.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                i.removeAttr(this, e);
              });
            },
          }),
            i.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  a = e.nodeType;
                if (!(a === 3 || a === 8 || a === 2)) {
                  if (typeof e.getAttribute > "u") return i.prop(e, t, n);
                  if (
                    ((a !== 1 || !i.isXMLDoc(e)) &&
                      (o =
                        i.attrHooks[t.toLowerCase()] ||
                        (i.expr.match.bool.test(t) ? Ln : void 0)),
                    n !== void 0)
                  ) {
                    if (n === null) {
                      i.removeAttr(e, t);
                      return;
                    }
                    return o && "set" in o && (r = o.set(e, n, t)) !== void 0
                      ? r
                      : (e.setAttribute(t, n + ""), n);
                  }
                  return o && "get" in o && (r = o.get(e, t)) !== null
                    ? r
                    : ((r = i.find.attr(e, t)), r ?? void 0);
                }
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!C.radioValue && t === "radio" && B(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(le);
                if (o && e.nodeType === 1)
                  for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (Ln = {
              set: function (e, t, n) {
                return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            i.each(i.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = jt[t] || i.find.attr;
              jt[t] = function (r, o, a) {
                var u,
                  c,
                  f = o.toLowerCase();
                return (
                  a ||
                    ((c = jt[f]),
                    (jt[f] = u),
                    (u = n(r, o, a) != null ? f : null),
                    (jt[f] = c)),
                  u
                );
              };
            });
          var mr = /^(?:input|select|textarea|button)$/i,
            br = /^(?:a|area)$/i;
          i.fn.extend({
            prop: function (e, t) {
              return Qe(this, i.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[i.propFix[e] || e];
              });
            },
          }),
            i.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  a = e.nodeType;
                if (!(a === 3 || a === 8 || a === 2))
                  return (
                    (a !== 1 || !i.isXMLDoc(e)) &&
                      ((t = i.propFix[t] || t), (o = i.propHooks[t])),
                    n !== void 0
                      ? o && "set" in o && (r = o.set(e, n, t)) !== void 0
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && (r = o.get(e, t)) !== null
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = i.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : mr.test(e.nodeName) || (br.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            C.optSelected ||
              (i.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            i.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                i.propFix[this.toLowerCase()] = this;
              }
            );
          function ft(e) {
            var t = e.match(le) || [];
            return t.join(" ");
          }
          function ct(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function Jt(e) {
            return Array.isArray(e)
              ? e
              : typeof e == "string"
              ? e.match(le) || []
              : [];
          }
          i.fn.extend({
            addClass: function (e) {
              var t, n, r, o, a, u;
              return D(e)
                ? this.each(function (c) {
                    i(this).addClass(e.call(this, c, ct(this)));
                  })
                : ((t = Jt(e)),
                  t.length
                    ? this.each(function () {
                        if (
                          ((r = ct(this)),
                          (n = this.nodeType === 1 && " " + ft(r) + " "),
                          n)
                        ) {
                          for (a = 0; a < t.length; a++)
                            (o = t[a]),
                              n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                          (u = ft(n)), r !== u && this.setAttribute("class", u);
                        }
                      })
                    : this);
            },
            removeClass: function (e) {
              var t, n, r, o, a, u;
              return D(e)
                ? this.each(function (c) {
                    i(this).removeClass(e.call(this, c, ct(this)));
                  })
                : arguments.length
                ? ((t = Jt(e)),
                  t.length
                    ? this.each(function () {
                        if (
                          ((r = ct(this)),
                          (n = this.nodeType === 1 && " " + ft(r) + " "),
                          n)
                        ) {
                          for (a = 0; a < t.length; a++)
                            for (o = t[a]; n.indexOf(" " + o + " ") > -1; )
                              n = n.replace(" " + o + " ", " ");
                          (u = ft(n)), r !== u && this.setAttribute("class", u);
                        }
                      })
                    : this)
                : this.attr("class", "");
            },
            toggleClass: function (e, t) {
              var n,
                r,
                o,
                a,
                u = typeof e,
                c = u === "string" || Array.isArray(e);
              return D(e)
                ? this.each(function (f) {
                    i(this).toggleClass(e.call(this, f, ct(this), t), t);
                  })
                : typeof t == "boolean" && c
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : ((n = Jt(e)),
                  this.each(function () {
                    if (c)
                      for (a = i(this), o = 0; o < n.length; o++)
                        (r = n[o]),
                          a.hasClass(r) ? a.removeClass(r) : a.addClass(r);
                    else
                      (e === void 0 || u === "boolean") &&
                        ((r = ct(this)),
                        r && N.set(this, "__className__", r),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            r || e === !1
                              ? ""
                              : N.get(this, "__className__") || ""
                          ));
                  }));
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); )
                if (n.nodeType === 1 && (" " + ft(ct(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
          var xr = /\r/g;
          i.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = D(e)),
                  this.each(function (a) {
                    var u;
                    this.nodeType === 1 &&
                      (r ? (u = e.call(this, a, i(this).val())) : (u = e),
                      u == null
                        ? (u = "")
                        : typeof u == "number"
                        ? (u += "")
                        : Array.isArray(u) &&
                          (u = i.map(u, function (c) {
                            return c == null ? "" : c + "";
                          })),
                      (t =
                        i.valHooks[this.type] ||
                        i.valHooks[this.nodeName.toLowerCase()]),
                      (!t ||
                        !("set" in t) ||
                        t.set(this, u, "value") === void 0) &&
                        (this.value = u));
                  }))
                : o
                ? ((t =
                    i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]),
                  t && "get" in t && (n = t.get(o, "value")) !== void 0
                    ? n
                    : ((n = o.value),
                      typeof n == "string" ? n.replace(xr, "") : n ?? ""))
                : void 0;
            },
          }),
            i.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = i.find.attr(e, "value");
                    return t ?? ft(i.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      a = e.selectedIndex,
                      u = e.type === "select-one",
                      c = u ? null : [],
                      f = u ? a + 1 : o.length;
                    for (a < 0 ? (r = f) : (r = u ? a : 0); r < f; r++)
                      if (
                        ((n = o[r]),
                        (n.selected || r === a) &&
                          !n.disabled &&
                          (!n.parentNode.disabled ||
                            !B(n.parentNode, "optgroup")))
                      ) {
                        if (((t = i(n).val()), u)) return t;
                        c.push(t);
                      }
                    return c;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, o = e.options, a = i.makeArray(t), u = o.length;
                      u--;

                    )
                      (r = o[u]),
                        (r.selected =
                          i.inArray(i.valHooks.option.get(r), a) > -1) &&
                          (n = !0);
                    return n || (e.selectedIndex = -1), a;
                  },
                },
              },
            }),
            i.each(["radio", "checkbox"], function () {
              (i.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = i.inArray(i(e).val(), t) > -1);
                },
              }),
                C.checkOn ||
                  (i.valHooks[this].get = function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value;
                  });
            });
          var At = O.location,
            Hn = { guid: Date.now() },
            Kt = /\?/;
          i.parseXML = function (e) {
            var t, n;
            if (!e || typeof e != "string") return null;
            try {
              t = new O.DOMParser().parseFromString(e, "text/xml");
            } catch {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (!t || n) &&
                i.error(
                  "Invalid XML: " +
                    (n
                      ? i.map(n.childNodes, function (r) {
                          return r.textContent;
                        }).join(`
`)
                      : e)
                ),
              t
            );
          };
          var Mn = /^(?:focusinfocus|focusoutblur)$/,
            Pn = function (e) {
              e.stopPropagation();
            };
          i.extend(i.event, {
            trigger: function (e, t, n, r) {
              var o,
                a,
                u,
                c,
                f,
                d,
                y,
                m,
                h = [n || H],
                b = F.call(e, "type") ? e.type : e,
                I = F.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = m = u = n = n || H),
                !(n.nodeType === 3 || n.nodeType === 8) &&
                  !Mn.test(b + i.event.triggered) &&
                  (b.indexOf(".") > -1 &&
                    ((I = b.split(".")), (b = I.shift()), I.sort()),
                  (f = b.indexOf(":") < 0 && "on" + b),
                  (e = e[i.expando]
                    ? e
                    : new i.Event(b, typeof e == "object" && e)),
                  (e.isTrigger = r ? 2 : 3),
                  (e.namespace = I.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + I.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = t == null ? [e] : i.makeArray(t, [e])),
                  (y = i.event.special[b] || {}),
                  !(!r && y.trigger && y.trigger.apply(n, t) === !1)))
              ) {
                if (!r && !y.noBubble && !fe(n)) {
                  for (
                    c = y.delegateType || b,
                      Mn.test(c + b) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (u = a);
                  u === (n.ownerDocument || H) &&
                    h.push(u.defaultView || u.parentWindow || O);
                }
                for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                  (m = a),
                    (e.type = o > 1 ? c : y.bindType || b),
                    (d =
                      (N.get(a, "events") || Object.create(null))[e.type] &&
                      N.get(a, "handle")),
                    d && d.apply(a, t),
                    (d = f && a[f]),
                    d &&
                      d.apply &&
                      Tt(a) &&
                      ((e.result = d.apply(a, t)),
                      e.result === !1 && e.preventDefault());
                return (
                  (e.type = b),
                  !r &&
                    !e.isDefaultPrevented() &&
                    (!y._default || y._default.apply(h.pop(), t) === !1) &&
                    Tt(n) &&
                    f &&
                    D(n[b]) &&
                    !fe(n) &&
                    ((u = n[f]),
                    u && (n[f] = null),
                    (i.event.triggered = b),
                    e.isPropagationStopped() && m.addEventListener(b, Pn),
                    n[b](),
                    e.isPropagationStopped() && m.removeEventListener(b, Pn),
                    (i.event.triggered = void 0),
                    u && (n[f] = u)),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = i.extend(new i.Event(), n, { type: e, isSimulated: !0 });
              i.event.trigger(r, null, t);
            },
          }),
            i.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  i.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return i.event.trigger(e, t, n, !0);
              },
            });
          var wr = /\[\]$/,
            _n = /\r?\n/g,
            Tr = /^(?:submit|button|image|reset|file)$/i,
            Cr = /^(?:input|select|textarea|keygen)/i;
          function Zt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              i.each(t, function (a, u) {
                n || wr.test(e)
                  ? r(e, u)
                  : Zt(
                      e +
                        "[" +
                        (typeof u == "object" && u != null ? a : "") +
                        "]",
                      u,
                      n,
                      r
                    );
              });
            else if (!n && De(t) === "object")
              for (o in t) Zt(e + "[" + o + "]", t[o], n, r);
            else r(e, t);
          }
          (i.param = function (e, t) {
            var n,
              r = [],
              o = function (a, u) {
                var c = D(u) ? u() : u;
                r[r.length] =
                  encodeURIComponent(a) + "=" + encodeURIComponent(c ?? "");
              };
            if (e == null) return "";
            if (Array.isArray(e) || (e.jquery && !i.isPlainObject(e)))
              i.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) Zt(n, e[n], t, o);
            return r.join("&");
          }),
            i.fn.extend({
              serialize: function () {
                return i.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = i.prop(this, "elements");
                  return e ? i.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !i(this).is(":disabled") &&
                      Cr.test(this.nodeName) &&
                      !Tr.test(e) &&
                      (this.checked || !kt.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = i(this).val();
                    return n == null
                      ? null
                      : Array.isArray(n)
                      ? i.map(n, function (r) {
                          return {
                            name: t.name,
                            value: r.replace(
                              _n,
                              `\r
`
                            ),
                          };
                        })
                      : {
                          name: t.name,
                          value: n.replace(
                            _n,
                            `\r
`
                          ),
                        };
                  })
                  .get();
              },
            });
          var Sr = /%20/g,
            kr = /#.*$/,
            Er = /([?&])_=[^&]*/,
            jr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ar = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Nr = /^(?:GET|HEAD)$/,
            Dr = /^\/\//,
            Rn = {},
            en = {},
            In = "*/".concat("*"),
            tn = H.createElement("a");
          tn.href = At.href;
          function Wn(e) {
            return function (t, n) {
              typeof t != "string" && ((n = t), (t = "*"));
              var r,
                o = 0,
                a = t.toLowerCase().match(le) || [];
              if (D(n))
                for (; (r = a[o++]); )
                  r[0] === "+"
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Fn(e, t, n, r) {
            var o = {},
              a = e === en;
            function u(c) {
              var f;
              return (
                (o[c] = !0),
                i.each(e[c] || [], function (d, y) {
                  var m = y(t, n, r);
                  if (typeof m == "string" && !a && !o[m])
                    return t.dataTypes.unshift(m), u(m), !1;
                  if (a) return !(f = m);
                }),
                f
              );
            }
            return u(t.dataTypes[0]) || (!o["*"] && u("*"));
          }
          function nn(e, t) {
            var n,
              r,
              o = i.ajaxSettings.flatOptions || {};
            for (n in t)
              t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && i.extend(!0, e, r), e;
          }
          function Or(e, t, n) {
            for (
              var r, o, a, u, c = e.contents, f = e.dataTypes;
              f[0] === "*";

            )
              f.shift(),
                r === void 0 &&
                  (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) {
              for (o in c)
                if (c[o] && c[o].test(r)) {
                  f.unshift(o);
                  break;
                }
            }
            if (f[0] in n) a = f[0];
            else {
              for (o in n) {
                if (!f[0] || e.converters[o + " " + f[0]]) {
                  a = o;
                  break;
                }
                u || (u = o);
              }
              a = a || u;
            }
            if (a) return a !== f[0] && f.unshift(a), n[a];
          }
          function qr(e, t, n, r) {
            var o,
              a,
              u,
              c,
              f,
              d = {},
              y = e.dataTypes.slice();
            if (y[1])
              for (u in e.converters) d[u.toLowerCase()] = e.converters[u];
            for (a = y.shift(); a; )
              if (
                (e.responseFields[a] && (n[e.responseFields[a]] = t),
                !f && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (f = a),
                (a = y.shift()),
                a)
              ) {
                if (a === "*") a = f;
                else if (f !== "*" && f !== a) {
                  if (((u = d[f + " " + a] || d["* " + a]), !u)) {
                    for (o in d)
                      if (
                        ((c = o.split(" ")),
                        c[1] === a &&
                          ((u = d[f + " " + c[0]] || d["* " + c[0]]), u))
                      ) {
                        u === !0
                          ? (u = d[o])
                          : d[o] !== !0 && ((a = c[0]), y.unshift(c[1]));
                        break;
                      }
                  }
                  if (u !== !0)
                    if (u && e.throws) t = u(t);
                    else
                      try {
                        t = u(t);
                      } catch (m) {
                        return {
                          state: "parsererror",
                          error: u ? m : "No conversion from " + f + " to " + a,
                        };
                      }
                }
              }
            return { state: "success", data: t };
          }
          i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: At.href,
              type: "GET",
              isLocal: Ar.test(At.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": In,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? nn(nn(e, i.ajaxSettings), t) : nn(i.ajaxSettings, e);
            },
            ajaxPrefilter: Wn(Rn),
            ajaxTransport: Wn(en),
            ajax: function (e, t) {
              typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
              var n,
                r,
                o,
                a,
                u,
                c,
                f,
                d,
                y,
                m,
                h = i.ajaxSetup({}, t),
                b = h.context || h,
                I = h.context && (b.nodeType || b.jquery) ? i(b) : i.event,
                Q = i.Deferred(),
                $ = i.Callbacks("once memory"),
                ge = h.statusCode || {},
                de = {},
                ze = {},
                Ue = "canceled",
                X = {
                  readyState: 0,
                  getResponseHeader: function (J) {
                    var ue;
                    if (f) {
                      if (!a)
                        for (a = {}; (ue = jr.exec(o)); )
                          a[ue[1].toLowerCase() + " "] = (
                            a[ue[1].toLowerCase() + " "] || []
                          ).concat(ue[2]);
                      ue = a[J.toLowerCase() + " "];
                    }
                    return ue == null ? null : ue.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return f ? o : null;
                  },
                  setRequestHeader: function (J, ue) {
                    return (
                      f == null &&
                        ((J = ze[J.toLowerCase()] = ze[J.toLowerCase()] || J),
                        (de[J] = ue)),
                      this
                    );
                  },
                  overrideMimeType: function (J) {
                    return f == null && (h.mimeType = J), this;
                  },
                  statusCode: function (J) {
                    var ue;
                    if (J)
                      if (f) X.always(J[X.status]);
                      else for (ue in J) ge[ue] = [ge[ue], J[ue]];
                    return this;
                  },
                  abort: function (J) {
                    var ue = J || Ue;
                    return n && n.abort(ue), lt(0, ue), this;
                  },
                };
              if (
                (Q.promise(X),
                (h.url = ((e || h.url || At.href) + "").replace(
                  Dr,
                  At.protocol + "//"
                )),
                (h.type = t.method || t.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(le) || [
                  "",
                ]),
                h.crossDomain == null)
              ) {
                c = H.createElement("a");
                try {
                  (c.href = h.url),
                    (c.href = c.href),
                    (h.crossDomain =
                      tn.protocol + "//" + tn.host !=
                      c.protocol + "//" + c.host);
                } catch {
                  h.crossDomain = !0;
                }
              }
              if (
                (h.data &&
                  h.processData &&
                  typeof h.data != "string" &&
                  (h.data = i.param(h.data, h.traditional)),
                Fn(Rn, h, t, X),
                f)
              )
                return X;
              (d = i.event && h.global),
                d && i.active++ === 0 && i.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Nr.test(h.type)),
                (r = h.url.replace(kr, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    (h.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) === 0 &&
                    (h.data = h.data.replace(Sr, "+"))
                  : ((m = h.url.slice(r.length)),
                    h.data &&
                      (h.processData || typeof h.data == "string") &&
                      ((r += (Kt.test(r) ? "&" : "?") + h.data), delete h.data),
                    h.cache === !1 &&
                      ((r = r.replace(Er, "$1")),
                      (m = (Kt.test(r) ? "&" : "?") + "_=" + Hn.guid++ + m)),
                    (h.url = r + m)),
                h.ifModified &&
                  (i.lastModified[r] &&
                    X.setRequestHeader("If-Modified-Since", i.lastModified[r]),
                  i.etag[r] && X.setRequestHeader("If-None-Match", i.etag[r])),
                ((h.data && h.hasContent && h.contentType !== !1) ||
                  t.contentType) &&
                  X.setRequestHeader("Content-Type", h.contentType),
                X.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        (h.dataTypes[0] !== "*" ? ", " + In + "; q=0.01" : "")
                    : h.accepts["*"]
                );
              for (y in h.headers) X.setRequestHeader(y, h.headers[y]);
              if (h.beforeSend && (h.beforeSend.call(b, X, h) === !1 || f))
                return X.abort();
              if (
                ((Ue = "abort"),
                $.add(h.complete),
                X.done(h.success),
                X.fail(h.error),
                (n = Fn(en, h, t, X)),
                !n)
              )
                lt(-1, "No Transport");
              else {
                if (((X.readyState = 1), d && I.trigger("ajaxSend", [X, h]), f))
                  return X;
                h.async &&
                  h.timeout > 0 &&
                  (u = O.setTimeout(function () {
                    X.abort("timeout");
                  }, h.timeout));
                try {
                  (f = !1), n.send(de, lt);
                } catch (J) {
                  if (f) throw J;
                  lt(-1, J);
                }
              }
              function lt(J, ue, Dt, on) {
                var Ve,
                  Ot,
                  Xe,
                  nt,
                  rt,
                  Me = ue;
                f ||
                  ((f = !0),
                  u && O.clearTimeout(u),
                  (n = void 0),
                  (o = on || ""),
                  (X.readyState = J > 0 ? 4 : 0),
                  (Ve = (J >= 200 && J < 300) || J === 304),
                  Dt && (nt = Or(h, X, Dt)),
                  !Ve &&
                    i.inArray("script", h.dataTypes) > -1 &&
                    i.inArray("json", h.dataTypes) < 0 &&
                    (h.converters["text script"] = function () {}),
                  (nt = qr(h, nt, X, Ve)),
                  Ve
                    ? (h.ifModified &&
                        ((rt = X.getResponseHeader("Last-Modified")),
                        rt && (i.lastModified[r] = rt),
                        (rt = X.getResponseHeader("etag")),
                        rt && (i.etag[r] = rt)),
                      J === 204 || h.type === "HEAD"
                        ? (Me = "nocontent")
                        : J === 304
                        ? (Me = "notmodified")
                        : ((Me = nt.state),
                          (Ot = nt.data),
                          (Xe = nt.error),
                          (Ve = !Xe)))
                    : ((Xe = Me),
                      (J || !Me) && ((Me = "error"), J < 0 && (J = 0))),
                  (X.status = J),
                  (X.statusText = (ue || Me) + ""),
                  Ve
                    ? Q.resolveWith(b, [Ot, Me, X])
                    : Q.rejectWith(b, [X, Me, Xe]),
                  X.statusCode(ge),
                  (ge = void 0),
                  d &&
                    I.trigger(Ve ? "ajaxSuccess" : "ajaxError", [
                      X,
                      h,
                      Ve ? Ot : Xe,
                    ]),
                  $.fireWith(b, [X, Me]),
                  d &&
                    (I.trigger("ajaxComplete", [X, h]),
                    --i.active || i.event.trigger("ajaxStop")));
              }
              return X;
            },
            getJSON: function (e, t, n) {
              return i.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return i.get(e, void 0, t, "script");
            },
          }),
            i.each(["get", "post"], function (e, t) {
              i[t] = function (n, r, o, a) {
                return (
                  D(r) && ((a = a || o), (o = r), (r = void 0)),
                  i.ajax(
                    i.extend(
                      { url: n, type: t, dataType: a, data: r, success: o },
                      i.isPlainObject(n) && n
                    )
                  )
                );
              };
            }),
            i.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                t.toLowerCase() === "content-type" &&
                  (e.contentType = e.headers[t] || "");
            }),
            (i._evalUrl = function (e, t, n) {
              return i.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (r) {
                  i.globalEval(r, t, n);
                },
              });
            }),
            i.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (D(e) && (e = e.call(this[0])),
                    (t = i(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var n = this; n.firstElementChild; )
                          n = n.firstElementChild;
                        return n;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return D(e)
                  ? this.each(function (t) {
                      i(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = i(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = D(e);
                return this.each(function (n) {
                  i(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      i(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (i.expr.pseudos.hidden = function (e) {
              return !i.expr.pseudos.visible(e);
            }),
            (i.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (i.ajaxSettings.xhr = function () {
              try {
                return new O.XMLHttpRequest();
              } catch {}
            });
          var Lr = { 0: 200, 1223: 204 },
            Nt = i.ajaxSettings.xhr();
          (C.cors = !!Nt && "withCredentials" in Nt),
            (C.ajax = Nt = !!Nt),
            i.ajaxTransport(function (e) {
              var t, n;
              if (C.cors || (Nt && !e.crossDomain))
                return {
                  send: function (r, o) {
                    var a,
                      u = e.xhr();
                    if (
                      (u.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) u[a] = e.xhrFields[a];
                    e.mimeType &&
                      u.overrideMimeType &&
                      u.overrideMimeType(e.mimeType),
                      !e.crossDomain &&
                        !r["X-Requested-With"] &&
                        (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r) u.setRequestHeader(a, r[a]);
                    (t = function (c) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            u.onload =
                            u.onerror =
                            u.onabort =
                            u.ontimeout =
                            u.onreadystatechange =
                              null),
                          c === "abort"
                            ? u.abort()
                            : c === "error"
                            ? typeof u.status != "number"
                              ? o(0, "error")
                              : o(u.status, u.statusText)
                            : o(
                                Lr[u.status] || u.status,
                                u.statusText,
                                (u.responseType || "text") !== "text" ||
                                  typeof u.responseText != "string"
                                  ? { binary: u.response }
                                  : { text: u.responseText },
                                u.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (u.onload = t()),
                      (n = u.onerror = u.ontimeout = t("error")),
                      u.onabort !== void 0
                        ? (u.onabort = n)
                        : (u.onreadystatechange = function () {
                            u.readyState === 4 &&
                              O.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      u.send((e.hasContent && e.data) || null);
                    } catch (c) {
                      if (t) throw c;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            i.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            i.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return i.globalEval(e), e;
                },
              },
            }),
            i.ajaxPrefilter("script", function (e) {
              e.cache === void 0 && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            i.ajaxTransport("script", function (e) {
              if (e.crossDomain || e.scriptAttrs) {
                var t, n;
                return {
                  send: function (r, o) {
                    (t = i("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (a) {
                          t.remove(),
                            (n = null),
                            a && o(a.type === "error" ? 404 : 200, a.type);
                        })
                      )),
                      H.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
              }
            });
          var $n = [],
            rn = /(=)\?(?=&|$)|\?\?/;
          i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = $n.pop() || i.expando + "_" + Hn.guid++;
              return (this[e] = !0), e;
            },
          }),
            i.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                o,
                a,
                u =
                  e.jsonp !== !1 &&
                  (rn.test(e.url)
                    ? "url"
                    : typeof e.data == "string" &&
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) === 0 &&
                      rn.test(e.data) &&
                      "data");
              if (u || e.dataTypes[0] === "jsonp")
                return (
                  (r = e.jsonpCallback =
                    D(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  u
                    ? (e[u] = e[u].replace(rn, "$1" + r))
                    : e.jsonp !== !1 &&
                      (e.url +=
                        (Kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return a || i.error(r + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = O[r]),
                  (O[r] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    o === void 0 ? i(O).removeProp(r) : (O[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), $n.push(r)),
                      a && D(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (C.createHTMLDocument = (function () {
              var e = H.implementation.createHTMLDocument("").body;
              return (
                (e.innerHTML = "<form></form><form></form>"),
                e.childNodes.length === 2
              );
            })()),
            (i.parseHTML = function (e, t, n) {
              if (typeof e != "string") return [];
              typeof t == "boolean" && ((n = t), (t = !1));
              var r, o, a;
              return (
                t ||
                  (C.createHTMLDocument
                    ? ((t = H.implementation.createHTMLDocument("")),
                      (r = t.createElement("base")),
                      (r.href = H.location.href),
                      t.head.appendChild(r))
                    : (t = H)),
                (o = tt.exec(e)),
                (a = !n && []),
                o
                  ? [t.createElement(o[1])]
                  : ((o = mn([e], t, a)),
                    a && a.length && i(a).remove(),
                    i.merge([], o.childNodes))
              );
            }),
            (i.fn.load = function (e, t, n) {
              var r,
                o,
                a,
                u = this,
                c = e.indexOf(" ");
              return (
                c > -1 && ((r = ft(e.slice(c))), (e = e.slice(0, c))),
                D(t)
                  ? ((n = t), (t = void 0))
                  : t && typeof t == "object" && (o = "POST"),
                u.length > 0 &&
                  i
                    .ajax({
                      url: e,
                      type: o || "GET",
                      dataType: "html",
                      data: t,
                    })
                    .done(function (f) {
                      (a = arguments),
                        u.html(
                          r ? i("<div>").append(i.parseHTML(f)).find(r) : f
                        );
                    })
                    .always(
                      n &&
                        function (f, d) {
                          u.each(function () {
                            n.apply(this, a || [f.responseText, d, f]);
                          });
                        }
                    ),
                this
              );
            }),
            (i.expr.pseudos.animated = function (e) {
              return i.grep(i.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (i.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  a,
                  u,
                  c,
                  f,
                  d,
                  y = i.css(e, "position"),
                  m = i(e),
                  h = {};
                y === "static" && (e.style.position = "relative"),
                  (c = m.offset()),
                  (a = i.css(e, "top")),
                  (f = i.css(e, "left")),
                  (d =
                    (y === "absolute" || y === "fixed") &&
                    (a + f).indexOf("auto") > -1),
                  d
                    ? ((r = m.position()), (u = r.top), (o = r.left))
                    : ((u = parseFloat(a) || 0), (o = parseFloat(f) || 0)),
                  D(t) && (t = t.call(e, n, i.extend({}, c))),
                  t.top != null && (h.top = t.top - c.top + u),
                  t.left != null && (h.left = t.left - c.left + o),
                  "using" in t ? t.using.call(e, h) : m.css(h);
              },
            }),
            i.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return e === void 0
                    ? this
                    : this.each(function (o) {
                        i.offset.setOffset(this, e, o);
                      });
                var t,
                  n,
                  r = this[0];
                if (r)
                  return r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 };
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 };
                  if (i.css(r, "position") === "fixed")
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      i.css(e, "position") === "static";

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      e.nodeType === 1 &&
                      ((o = i(e).offset()),
                      (o.top += i.css(e, "borderTopWidth", !0)),
                      (o.left += i.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - i.css(r, "marginTop", !0),
                    left: t.left - o.left - i.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && i.css(e, "position") === "static";

                  )
                    e = e.offsetParent;
                  return e || st;
                });
              },
            }),
            i.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = t === "pageYOffset";
                i.fn[e] = function (r) {
                  return Qe(
                    this,
                    function (o, a, u) {
                      var c;
                      if (
                        (fe(o)
                          ? (c = o)
                          : o.nodeType === 9 && (c = o.defaultView),
                        u === void 0)
                      )
                        return c ? c[t] : o[a];
                      c
                        ? c.scrollTo(
                            n ? c.pageXOffset : u,
                            n ? u : c.pageYOffset
                          )
                        : (o[a] = u);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            i.each(["top", "left"], function (e, t) {
              i.cssHooks[t] = Sn(C.pixelPosition, function (n, r) {
                if (r)
                  return (
                    (r = Et(n, t)), Vt.test(r) ? i(n).position()[t] + "px" : r
                  );
              });
            }),
            i.each({ Height: "height", Width: "width" }, function (e, t) {
              i.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  i.fn[r] = function (o, a) {
                    var u = arguments.length && (n || typeof o != "boolean"),
                      c = n || (o === !0 || a === !0 ? "margin" : "border");
                    return Qe(
                      this,
                      function (f, d, y) {
                        var m;
                        return fe(f)
                          ? r.indexOf("outer") === 0
                            ? f["inner" + e]
                            : f.document.documentElement["client" + e]
                          : f.nodeType === 9
                          ? ((m = f.documentElement),
                            Math.max(
                              f.body["scroll" + e],
                              m["scroll" + e],
                              f.body["offset" + e],
                              m["offset" + e],
                              m["client" + e]
                            ))
                          : y === void 0
                          ? i.css(f, d, c)
                          : i.style(f, d, y, c);
                      },
                      t,
                      u ? o : void 0,
                      u
                    );
                  };
                }
              );
            }),
            i.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                i.fn[t] = function (n) {
                  return this.on(t, n);
                };
              }
            ),
            i.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return arguments.length === 1
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            i.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                i.fn[t] = function (n, r) {
                  return arguments.length > 0
                    ? this.on(t, null, n, r)
                    : this.trigger(t);
                };
              }
            );
          var Hr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (i.proxy = function (e, t) {
            var n, r, o;
            if (
              (typeof t == "string" && ((n = e[t]), (t = e), (e = n)), !!D(e))
            )
              return (
                (r = E.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, r.concat(E.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || i.guid++),
                o
              );
          }),
            (i.holdReady = function (e) {
              e ? i.readyWait++ : i.ready(!0);
            }),
            (i.isArray = Array.isArray),
            (i.parseJSON = JSON.parse),
            (i.nodeName = B),
            (i.isFunction = D),
            (i.isWindow = fe),
            (i.camelCase = Be),
            (i.type = De),
            (i.now = Date.now),
            (i.isNumeric = function (e) {
              var t = i.type(e);
              return (
                (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
              );
            }),
            (i.trim = function (e) {
              return e == null ? "" : (e + "").replace(Hr, "$1");
            });
          var Mr = O.jQuery,
            Pr = O.$;
          return (
            (i.noConflict = function (e) {
              return (
                O.$ === i && (O.$ = Pr),
                e && O.jQuery === i && (O.jQuery = Mr),
                i
              );
            }),
            typeof ae > "u" && (O.jQuery = O.$ = i),
            i
          );
        });
      })(Bt)),
    Bt.exports
  );
}
var Jr = Qr();
const Kr = Yn(Jr);
(function (We, O) {
  Yr.init(),
    document.querySelectorAll('[id^="connectLoading"]').forEach((S) => {
      let q;
      S.addEventListener("shown.bs.modal", (E) => {
        (q = setTimeout(function () {
          O(S).find("#loading").text("Connecting.");
        }, 1)),
          (q = setTimeout(function () {
            O(S).find("#loading").text("Connecting..");
          }, 600)),
          (q = setTimeout(function () {
            O(S).find("#loading").text("Connecting...");
          }, 1200)),
          (q = setTimeout(function () {
            O(S).find("#loading").text("Connecting.");
          }, 1800)),
          (q = setTimeout(function () {
            O(S).find("#loading").text("Connecting..");
          }, 2400)),
          (q = setTimeout(function () {
            O(S).find("#loading").text("Connecting...");
          }, 3e3)),
          (q = setTimeout(function () {
            O(S).find("#loading").text("Error Connecting.."),
              O(S).find("#connectManually").show();
          }, 3600));
      }),
        S.addEventListener("hide.bs.modal", (E) => {
          clearTimeout(q),
            O(S).find("#connectManually").hide(),
            O(S).find("#loading").text("");
        });
    });
})(zr, Kr);
