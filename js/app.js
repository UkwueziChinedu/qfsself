var P = "top",
  V = "bottom",
  H = "right",
  x = "left",
  Me = "auto",
  Ut = [P, V, H, x],
  Tt = "start",
  kt = "end",
  zs = "clippingParents",
  Sn = "viewport",
  It = "popper",
  qs = "reference",
  _n = Ut.reduce(function (e, t) {
    return e.concat([t + "-" + Tt, t + "-" + kt]);
  }, []),
  Cn = [].concat(Ut, [Me]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Tt, t + "-" + kt]);
  }, []),
  Gs = "beforeRead",
  Xs = "read",
  Js = "afterRead",
  Qs = "beforeMain",
  Zs = "main",
  tr = "afterMain",
  er = "beforeWrite",
  nr = "write",
  sr = "afterWrite",
  rr = [Gs, Xs, Js, Qs, Zs, tr, er, nr, sr];
function Z(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function F(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function wt(e) {
  var t = F(e).Element;
  return e instanceof t || e instanceof Element;
}
function B(e) {
  var t = F(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Nn(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = F(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ei(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var s = t.styles[n] || {},
      r = t.attributes[n] || {},
      i = t.elements[n];
    !B(i) ||
      !Z(i) ||
      (Object.assign(i.style, s),
      Object.keys(r).forEach(function (o) {
        var a = r[o];
        a === !1 ? i.removeAttribute(o) : i.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function bi(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (s) {
        var r = t.elements[s],
          i = t.attributes[s] || {},
          o = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : n[s]),
          a = o.reduce(function (u, c) {
            return (u[c] = ""), u;
          }, {});
        !B(r) ||
          !Z(r) ||
          (Object.assign(r.style, a),
          Object.keys(i).forEach(function (u) {
            r.removeAttribute(u);
          }));
      });
    }
  );
}
const Dn = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ei,
  effect: bi,
  requires: ["computeStyles"],
};
function Q(e) {
  return e.split("-")[0];
}
var yt = Math.max,
  Re = Math.min,
  Vt = Math.round;
function mn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function ir() {
  return !/^((?!chrome|android).)*safari/i.test(mn());
}
function Ht(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(),
    r = 1,
    i = 1;
  t &&
    B(e) &&
    ((r = (e.offsetWidth > 0 && Vt(s.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Vt(s.height) / e.offsetHeight) || 1));
  var o = wt(e) ? F(e) : window,
    a = o.visualViewport,
    u = !ir() && n,
    c = (s.left + (u && a ? a.offsetLeft : 0)) / r,
    l = (s.top + (u && a ? a.offsetTop : 0)) / i,
    h = s.width / r,
    g = s.height / i;
  return {
    width: h,
    height: g,
    top: l,
    right: c + h,
    bottom: l + g,
    left: c,
    x: c,
    y: l,
  };
}
function Ln(e) {
  var t = Ht(e),
    n = e.offsetWidth,
    s = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - s) <= 1 && (s = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: s }
  );
}
function or(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Nn(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s)) return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function st(e) {
  return F(e).getComputedStyle(e);
}
function vi(e) {
  return ["table", "td", "th"].indexOf(Z(e)) >= 0;
}
function ft(e) {
  return ((wt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function ke(e) {
  return Z(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Nn(e) ? e.host : null) || ft(e);
}
function es(e) {
  return !B(e) || st(e).position === "fixed" ? null : e.offsetParent;
}
function yi(e) {
  var t = /firefox/i.test(mn()),
    n = /Trident/i.test(mn());
  if (n && B(e)) {
    var s = st(e);
    if (s.position === "fixed") return null;
  }
  var r = ke(e);
  for (Nn(r) && (r = r.host); B(r) && ["html", "body"].indexOf(Z(r)) < 0; ) {
    var i = st(r);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return r;
    r = r.parentNode;
  }
  return null;
}
function re(e) {
  for (var t = F(e), n = es(e); n && vi(n) && st(n).position === "static"; )
    n = es(n);
  return n &&
    (Z(n) === "html" || (Z(n) === "body" && st(n).position === "static"))
    ? t
    : n || yi(e) || t;
}
function $n(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ee(e, t, n) {
  return yt(e, Re(t, n));
}
function Ai(e, t, n) {
  var s = ee(e, t, n);
  return s > n ? n : s;
}
function ar() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function cr(e) {
  return Object.assign({}, ar(), e);
}
function lr(e, t) {
  return t.reduce(function (n, s) {
    return (n[s] = e), n;
  }, {});
}
var Ti = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    cr(typeof t != "number" ? t : lr(t, Ut))
  );
};
function wi(e) {
  var t,
    n = e.state,
    s = e.name,
    r = e.options,
    i = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    a = Q(n.placement),
    u = $n(a),
    c = [x, H].indexOf(a) >= 0,
    l = c ? "height" : "width";
  if (!(!i || !o)) {
    var h = Ti(r.padding, n),
      g = Ln(i),
      m = u === "y" ? P : x,
      p = u === "y" ? V : H,
      _ =
        n.rects.reference[l] + n.rects.reference[u] - o[u] - n.rects.popper[l],
      b = o[u] - n.rects.reference[u],
      y = re(i),
      T = y ? (u === "y" ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      S = _ / 2 - b / 2,
      v = h[m],
      w = T - g[l] - h[p],
      O = T / 2 - g[l] / 2 + S,
      C = ee(v, O, w),
      $ = u;
    n.modifiersData[s] = ((t = {}), (t[$] = C), (t.centerOffset = C - O), t);
  }
}
function Oi(e) {
  var t = e.state,
    n = e.options,
    s = n.element,
    r = s === void 0 ? "[data-popper-arrow]" : s;
  r != null &&
    ((typeof r == "string" && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (or(t.elements.popper, r) && (t.elements.arrow = r)));
}
const ur = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wi,
  effect: Oi,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Ft(e) {
  return e.split("-")[1];
}
var Si = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ci(e, t) {
  var n = e.x,
    s = e.y,
    r = t.devicePixelRatio || 1;
  return { x: Vt(n * r) / r || 0, y: Vt(s * r) / r || 0 };
}
function ns(e) {
  var t,
    n = e.popper,
    s = e.popperRect,
    r = e.placement,
    i = e.variation,
    o = e.offsets,
    a = e.position,
    u = e.gpuAcceleration,
    c = e.adaptive,
    l = e.roundOffsets,
    h = e.isFixed,
    g = o.x,
    m = g === void 0 ? 0 : g,
    p = o.y,
    _ = p === void 0 ? 0 : p,
    b = typeof l == "function" ? l({ x: m, y: _ }) : { x: m, y: _ };
  (m = b.x), (_ = b.y);
  var y = o.hasOwnProperty("x"),
    T = o.hasOwnProperty("y"),
    S = x,
    v = P,
    w = window;
  if (c) {
    var O = re(n),
      C = "clientHeight",
      $ = "clientWidth";
    if (
      (O === F(n) &&
        ((O = ft(n)),
        st(O).position !== "static" &&
          a === "absolute" &&
          ((C = "scrollHeight"), ($ = "scrollWidth"))),
      (O = O),
      r === P || ((r === x || r === H) && i === kt))
    ) {
      v = V;
      var L = h && O === w && w.visualViewport ? w.visualViewport.height : O[C];
      (_ -= L - s.height), (_ *= u ? 1 : -1);
    }
    if (r === x || ((r === P || r === V) && i === kt)) {
      S = H;
      var D = h && O === w && w.visualViewport ? w.visualViewport.width : O[$];
      (m -= D - s.width), (m *= u ? 1 : -1);
    }
  }
  var R = Object.assign({ position: a }, c && Si),
    z = l === !0 ? Ci({ x: m, y: _ }, F(n)) : { x: m, y: _ };
  if (((m = z.x), (_ = z.y), u)) {
    var I;
    return Object.assign(
      {},
      R,
      ((I = {}),
      (I[v] = T ? "0" : ""),
      (I[S] = y ? "0" : ""),
      (I.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + m + "px, " + _ + "px)"
          : "translate3d(" + m + "px, " + _ + "px, 0)"),
      I)
    );
  }
  return Object.assign(
    {},
    R,
    ((t = {}),
    (t[v] = T ? _ + "px" : ""),
    (t[S] = y ? m + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function Ni(e) {
  var t = e.state,
    n = e.options,
    s = n.gpuAcceleration,
    r = s === void 0 ? !0 : s,
    i = n.adaptive,
    o = i === void 0 ? !0 : i,
    a = n.roundOffsets,
    u = a === void 0 ? !0 : a,
    c = {
      placement: Q(t.placement),
      variation: Ft(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ns(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: u,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ns(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: u,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const Rn = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ni,
  data: {},
};
var be = { passive: !0 };
function Di(e) {
  var t = e.state,
    n = e.instance,
    s = e.options,
    r = s.scroll,
    i = r === void 0 ? !0 : r,
    o = s.resize,
    a = o === void 0 ? !0 : o,
    u = F(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (l) {
        l.addEventListener("scroll", n.update, be);
      }),
    a && u.addEventListener("resize", n.update, be),
    function () {
      i &&
        c.forEach(function (l) {
          l.removeEventListener("scroll", n.update, be);
        }),
        a && u.removeEventListener("resize", n.update, be);
    }
  );
}
const In = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Di,
  data: {},
};
var Li = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Se(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Li[t];
  });
}
var $i = { start: "end", end: "start" };
function ss(e) {
  return e.replace(/start|end/g, function (t) {
    return $i[t];
  });
}
function Pn(e) {
  var t = F(e),
    n = t.pageXOffset,
    s = t.pageYOffset;
  return { scrollLeft: n, scrollTop: s };
}
function xn(e) {
  return Ht(ft(e)).left + Pn(e).scrollLeft;
}
function Ri(e, t) {
  var n = F(e),
    s = ft(e),
    r = n.visualViewport,
    i = s.clientWidth,
    o = s.clientHeight,
    a = 0,
    u = 0;
  if (r) {
    (i = r.width), (o = r.height);
    var c = ir();
    (c || (!c && t === "fixed")) && ((a = r.offsetLeft), (u = r.offsetTop));
  }
  return { width: i, height: o, x: a + xn(e), y: u };
}
function Ii(e) {
  var t,
    n = ft(e),
    s = Pn(e),
    r = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = yt(
      n.scrollWidth,
      n.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0
    ),
    o = yt(
      n.scrollHeight,
      n.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0
    ),
    a = -s.scrollLeft + xn(e),
    u = -s.scrollTop;
  return (
    st(r || n).direction === "rtl" &&
      (a += yt(n.clientWidth, r ? r.clientWidth : 0) - i),
    { width: i, height: o, x: a, y: u }
  );
}
function Mn(e) {
  var t = st(e),
    n = t.overflow,
    s = t.overflowX,
    r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + s);
}
function fr(e) {
  return ["html", "body", "#document"].indexOf(Z(e)) >= 0
    ? e.ownerDocument.body
    : B(e) && Mn(e)
    ? e
    : fr(ke(e));
}
function ne(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = fr(e),
    r = s === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = F(s),
    o = r ? [i].concat(i.visualViewport || [], Mn(s) ? s : []) : s,
    a = t.concat(o);
  return r ? a : a.concat(ne(ke(o)));
}
function gn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Pi(e, t) {
  var n = Ht(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function rs(e, t, n) {
  return t === Sn ? gn(Ri(e, n)) : wt(t) ? Pi(t, n) : gn(Ii(ft(e)));
}
function xi(e) {
  var t = ne(ke(e)),
    n = ["absolute", "fixed"].indexOf(st(e).position) >= 0,
    s = n && B(e) ? re(e) : e;
  return wt(s)
    ? t.filter(function (r) {
        return wt(r) && or(r, s) && Z(r) !== "body";
      })
    : [];
}
function Mi(e, t, n, s) {
  var r = t === "clippingParents" ? xi(e) : [].concat(t),
    i = [].concat(r, [n]),
    o = i[0],
    a = i.reduce(function (u, c) {
      var l = rs(e, c, s);
      return (
        (u.top = yt(l.top, u.top)),
        (u.right = Re(l.right, u.right)),
        (u.bottom = Re(l.bottom, u.bottom)),
        (u.left = yt(l.left, u.left)),
        u
      );
    }, rs(e, o, s));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function dr(e) {
  var t = e.reference,
    n = e.element,
    s = e.placement,
    r = s ? Q(s) : null,
    i = s ? Ft(s) : null,
    o = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    u;
  switch (r) {
    case P:
      u = { x: o, y: t.y - n.height };
      break;
    case V:
      u = { x: o, y: t.y + t.height };
      break;
    case H:
      u = { x: t.x + t.width, y: a };
      break;
    case x:
      u = { x: t.x - n.width, y: a };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = r ? $n(r) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case Tt:
        u[c] = u[c] - (t[l] / 2 - n[l] / 2);
        break;
      case kt:
        u[c] = u[c] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return u;
}
function Bt(e, t) {
  t === void 0 && (t = {});
  var n = t,
    s = n.placement,
    r = s === void 0 ? e.placement : s,
    i = n.strategy,
    o = i === void 0 ? e.strategy : i,
    a = n.boundary,
    u = a === void 0 ? zs : a,
    c = n.rootBoundary,
    l = c === void 0 ? Sn : c,
    h = n.elementContext,
    g = h === void 0 ? It : h,
    m = n.altBoundary,
    p = m === void 0 ? !1 : m,
    _ = n.padding,
    b = _ === void 0 ? 0 : _,
    y = cr(typeof b != "number" ? b : lr(b, Ut)),
    T = g === It ? qs : It,
    S = e.rects.popper,
    v = e.elements[p ? T : g],
    w = Mi(wt(v) ? v : v.contextElement || ft(e.elements.popper), u, l, o),
    O = Ht(e.elements.reference),
    C = dr({ reference: O, element: S, placement: r }),
    $ = gn(Object.assign({}, S, C)),
    L = g === It ? $ : O,
    D = {
      top: w.top - L.top + y.top,
      bottom: L.bottom - w.bottom + y.bottom,
      left: w.left - L.left + y.left,
      right: L.right - w.right + y.right,
    },
    R = e.modifiersData.offset;
  if (g === It && R) {
    var z = R[r];
    Object.keys(D).forEach(function (I) {
      var pt = [H, V].indexOf(I) >= 0 ? 1 : -1,
        _t = [P, V].indexOf(I) >= 0 ? "y" : "x";
      D[I] += z[_t] * pt;
    });
  }
  return D;
}
function ki(e, t) {
  t === void 0 && (t = {});
  var n = t,
    s = n.placement,
    r = n.boundary,
    i = n.rootBoundary,
    o = n.padding,
    a = n.flipVariations,
    u = n.allowedAutoPlacements,
    c = u === void 0 ? Cn : u,
    l = Ft(s),
    h = l
      ? a
        ? _n
        : _n.filter(function (p) {
            return Ft(p) === l;
          })
      : Ut,
    g = h.filter(function (p) {
      return c.indexOf(p) >= 0;
    });
  g.length === 0 && (g = h);
  var m = g.reduce(function (p, _) {
    return (
      (p[_] = Bt(e, { placement: _, boundary: r, rootBoundary: i, padding: o })[
        Q(_)
      ]),
      p
    );
  }, {});
  return Object.keys(m).sort(function (p, _) {
    return m[p] - m[_];
  });
}
function Vi(e) {
  if (Q(e) === Me) return [];
  var t = Se(e);
  return [ss(e), t, ss(t)];
}
function Hi(e) {
  var t = e.state,
    n = e.options,
    s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (
      var r = n.mainAxis,
        i = r === void 0 ? !0 : r,
        o = n.altAxis,
        a = o === void 0 ? !0 : o,
        u = n.fallbackPlacements,
        c = n.padding,
        l = n.boundary,
        h = n.rootBoundary,
        g = n.altBoundary,
        m = n.flipVariations,
        p = m === void 0 ? !0 : m,
        _ = n.allowedAutoPlacements,
        b = t.options.placement,
        y = Q(b),
        T = y === b,
        S = u || (T || !p ? [Se(b)] : Vi(b)),
        v = [b].concat(S).reduce(function (Lt, ot) {
          return Lt.concat(
            Q(ot) === Me
              ? ki(t, {
                  placement: ot,
                  boundary: l,
                  rootBoundary: h,
                  padding: c,
                  flipVariations: p,
                  allowedAutoPlacements: _,
                })
              : ot
          );
        }, []),
        w = t.rects.reference,
        O = t.rects.popper,
        C = new Map(),
        $ = !0,
        L = v[0],
        D = 0;
      D < v.length;
      D++
    ) {
      var R = v[D],
        z = Q(R),
        I = Ft(R) === Tt,
        pt = [P, V].indexOf(z) >= 0,
        _t = pt ? "width" : "height",
        k = Bt(t, {
          placement: R,
          boundary: l,
          rootBoundary: h,
          altBoundary: g,
          padding: c,
        }),
        q = pt ? (I ? H : x) : I ? V : P;
      w[_t] > O[_t] && (q = Se(q));
      var pe = Se(q),
        mt = [];
      if (
        (i && mt.push(k[z] <= 0),
        a && mt.push(k[q] <= 0, k[pe] <= 0),
        mt.every(function (Lt) {
          return Lt;
        }))
      ) {
        (L = R), ($ = !1);
        break;
      }
      C.set(R, mt);
    }
    if ($)
      for (
        var _e = p ? 3 : 1,
          Ke = function (ot) {
            var Jt = v.find(function (ge) {
              var gt = C.get(ge);
              if (gt)
                return gt.slice(0, ot).every(function (Ye) {
                  return Ye;
                });
            });
            if (Jt) return (L = Jt), "break";
          },
          Xt = _e;
        Xt > 0;
        Xt--
      ) {
        var me = Ke(Xt);
        if (me === "break") break;
      }
    t.placement !== L &&
      ((t.modifiersData[s]._skip = !0), (t.placement = L), (t.reset = !0));
  }
}
const hr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Hi,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function is(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function os(e) {
  return [P, H, V, x].some(function (t) {
    return e[t] >= 0;
  });
}
function Fi(e) {
  var t = e.state,
    n = e.name,
    s = t.rects.reference,
    r = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = Bt(t, { elementContext: "reference" }),
    a = Bt(t, { altBoundary: !0 }),
    u = is(o, s),
    c = is(a, r, i),
    l = os(u),
    h = os(c);
  (t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: c,
    isReferenceHidden: l,
    hasPopperEscaped: h,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": l,
      "data-popper-escaped": h,
    }));
}
const pr = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Fi,
};
function Bi(e, t, n) {
  var s = Q(e),
    r = [x, P].indexOf(s) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    o = i[0],
    a = i[1];
  return (
    (o = o || 0),
    (a = (a || 0) * r),
    [x, H].indexOf(s) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function ji(e) {
  var t = e.state,
    n = e.options,
    s = e.name,
    r = n.offset,
    i = r === void 0 ? [0, 0] : r,
    o = Cn.reduce(function (l, h) {
      return (l[h] = Bi(h, t.rects, i)), l;
    }, {}),
    a = o[t.placement],
    u = a.x,
    c = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[s] = o);
}
const _r = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ji,
};
function Wi(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = dr({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement,
  });
}
const kn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Wi,
  data: {},
};
function Ui(e) {
  return e === "x" ? "y" : "x";
}
function Ki(e) {
  var t = e.state,
    n = e.options,
    s = e.name,
    r = n.mainAxis,
    i = r === void 0 ? !0 : r,
    o = n.altAxis,
    a = o === void 0 ? !1 : o,
    u = n.boundary,
    c = n.rootBoundary,
    l = n.altBoundary,
    h = n.padding,
    g = n.tether,
    m = g === void 0 ? !0 : g,
    p = n.tetherOffset,
    _ = p === void 0 ? 0 : p,
    b = Bt(t, { boundary: u, rootBoundary: c, padding: h, altBoundary: l }),
    y = Q(t.placement),
    T = Ft(t.placement),
    S = !T,
    v = $n(y),
    w = Ui(v),
    O = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    $ = t.rects.popper,
    L =
      typeof _ == "function"
        ? _(Object.assign({}, t.rects, { placement: t.placement }))
        : _,
    D =
      typeof L == "number"
        ? { mainAxis: L, altAxis: L }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, L),
    R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 };
  if (O) {
    if (i) {
      var I,
        pt = v === "y" ? P : x,
        _t = v === "y" ? V : H,
        k = v === "y" ? "height" : "width",
        q = O[v],
        pe = q + b[pt],
        mt = q - b[_t],
        _e = m ? -$[k] / 2 : 0,
        Ke = T === Tt ? C[k] : $[k],
        Xt = T === Tt ? -$[k] : -C[k],
        me = t.elements.arrow,
        Lt = m && me ? Ln(me) : { width: 0, height: 0 },
        ot = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : ar(),
        Jt = ot[pt],
        ge = ot[_t],
        gt = ee(0, C[k], Lt[k]),
        Ye = S
          ? C[k] / 2 - _e - gt - Jt - D.mainAxis
          : Ke - gt - Jt - D.mainAxis,
        di = S
          ? -C[k] / 2 + _e + gt + ge + D.mainAxis
          : Xt + gt + ge + D.mainAxis,
        ze = t.elements.arrow && re(t.elements.arrow),
        hi = ze ? (v === "y" ? ze.clientTop || 0 : ze.clientLeft || 0) : 0,
        Yn = (I = R == null ? void 0 : R[v]) != null ? I : 0,
        pi = q + Ye - Yn - hi,
        _i = q + di - Yn,
        zn = ee(m ? Re(pe, pi) : pe, q, m ? yt(mt, _i) : mt);
      (O[v] = zn), (z[v] = zn - q);
    }
    if (a) {
      var qn,
        mi = v === "x" ? P : x,
        gi = v === "x" ? V : H,
        Et = O[w],
        Ee = w === "y" ? "height" : "width",
        Gn = Et + b[mi],
        Xn = Et - b[gi],
        qe = [P, x].indexOf(y) !== -1,
        Jn = (qn = R == null ? void 0 : R[w]) != null ? qn : 0,
        Qn = qe ? Gn : Et - C[Ee] - $[Ee] - Jn + D.altAxis,
        Zn = qe ? Et + C[Ee] + $[Ee] - Jn - D.altAxis : Xn,
        ts = m && qe ? Ai(Qn, Et, Zn) : ee(m ? Qn : Gn, Et, m ? Zn : Xn);
      (O[w] = ts), (z[w] = ts - Et);
    }
    t.modifiersData[s] = z;
  }
}
const mr = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ki,
  requiresIfExists: ["offset"],
};
function Yi(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function zi(e) {
  return e === F(e) || !B(e) ? Pn(e) : Yi(e);
}
function qi(e) {
  var t = e.getBoundingClientRect(),
    n = Vt(t.width) / e.offsetWidth || 1,
    s = Vt(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function Gi(e, t, n) {
  n === void 0 && (n = !1);
  var s = B(t),
    r = B(t) && qi(t),
    i = ft(t),
    o = Ht(e, r, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (s || (!s && !n)) &&
      ((Z(t) !== "body" || Mn(i)) && (a = zi(t)),
      B(t)
        ? ((u = Ht(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop))
        : i && (u.x = xn(i))),
    {
      x: o.left + a.scrollLeft - u.x,
      y: o.top + a.scrollTop - u.y,
      width: o.width,
      height: o.height,
    }
  );
}
function Xi(e) {
  var t = new Map(),
    n = new Set(),
    s = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function r(i) {
    n.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function (a) {
      if (!n.has(a)) {
        var u = t.get(a);
        u && r(u);
      }
    }),
      s.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || r(i);
    }),
    s
  );
}
function Ji(e) {
  var t = Xi(e);
  return rr.reduce(function (n, s) {
    return n.concat(
      t.filter(function (r) {
        return r.phase === s;
      })
    );
  }, []);
}
function Qi(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function Zi(e) {
  var t = e.reduce(function (n, s) {
    var r = n[s.name];
    return (
      (n[s.name] = r
        ? Object.assign({}, r, s, {
            options: Object.assign({}, r.options, s.options),
            data: Object.assign({}, r.data, s.data),
          })
        : s),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var as = { placement: "bottom", modifiers: [], strategy: "absolute" };
function cs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Ve(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    s = n === void 0 ? [] : n,
    r = t.defaultOptions,
    i = r === void 0 ? as : r;
  return function (a, u, c) {
    c === void 0 && (c = i);
    var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, as, i),
        modifiersData: {},
        elements: { reference: a, popper: u },
        attributes: {},
        styles: {},
      },
      h = [],
      g = !1,
      m = {
        state: l,
        setOptions: function (y) {
          var T = typeof y == "function" ? y(l.options) : y;
          _(),
            (l.options = Object.assign({}, i, l.options, T)),
            (l.scrollParents = {
              reference: wt(a)
                ? ne(a)
                : a.contextElement
                ? ne(a.contextElement)
                : [],
              popper: ne(u),
            });
          var S = Ji(Zi([].concat(s, l.options.modifiers)));
          return (
            (l.orderedModifiers = S.filter(function (v) {
              return v.enabled;
            })),
            p(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!g) {
            var y = l.elements,
              T = y.reference,
              S = y.popper;
            if (cs(T, S)) {
              (l.rects = {
                reference: Gi(T, re(S), l.options.strategy === "fixed"),
                popper: Ln(S),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (D) {
                  return (l.modifiersData[D.name] = Object.assign({}, D.data));
                });
              for (var v = 0; v < l.orderedModifiers.length; v++) {
                if (l.reset === !0) {
                  (l.reset = !1), (v = -1);
                  continue;
                }
                var w = l.orderedModifiers[v],
                  O = w.fn,
                  C = w.options,
                  $ = C === void 0 ? {} : C,
                  L = w.name;
                typeof O == "function" &&
                  (l = O({ state: l, options: $, name: L, instance: m }) || l);
              }
            }
          }
        },
        update: Qi(function () {
          return new Promise(function (b) {
            m.forceUpdate(), b(l);
          });
        }),
        destroy: function () {
          _(), (g = !0);
        },
      };
    if (!cs(a, u)) return m;
    m.setOptions(c).then(function (b) {
      !g && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function p() {
      l.orderedModifiers.forEach(function (b) {
        var y = b.name,
          T = b.options,
          S = T === void 0 ? {} : T,
          v = b.effect;
        if (typeof v == "function") {
          var w = v({ state: l, name: y, instance: m, options: S }),
            O = function () {};
          h.push(w || O);
        }
      });
    }
    function _() {
      h.forEach(function (b) {
        return b();
      }),
        (h = []);
    }
    return m;
  };
}
var to = Ve(),
  eo = [In, kn, Rn, Dn],
  no = Ve({ defaultModifiers: eo }),
  so = [In, kn, Rn, Dn, _r, hr, mr, ur, pr],
  Vn = Ve({ defaultModifiers: so });
const gr = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: tr,
      afterRead: Js,
      afterWrite: sr,
      applyStyles: Dn,
      arrow: ur,
      auto: Me,
      basePlacements: Ut,
      beforeMain: Qs,
      beforeRead: Gs,
      beforeWrite: er,
      bottom: V,
      clippingParents: zs,
      computeStyles: Rn,
      createPopper: Vn,
      createPopperBase: to,
      createPopperLite: no,
      detectOverflow: Bt,
      end: kt,
      eventListeners: In,
      flip: hr,
      hide: pr,
      left: x,
      main: Zs,
      modifierPhases: rr,
      offset: _r,
      placements: Cn,
      popper: It,
      popperGenerator: Ve,
      popperOffsets: kn,
      preventOverflow: mr,
      read: Xs,
      reference: qs,
      right: H,
      start: Tt,
      top: P,
      variationPlacements: _n,
      viewport: Sn,
      write: nr,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/*!
 * Bootstrap v5.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const at = new Map(),
  Ge = {
    set(e, t, n) {
      at.has(e) || at.set(e, new Map());
      const s = at.get(e);
      if (!s.has(t) && s.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
            Array.from(s.keys())[0]
          }.`
        );
        return;
      }
      s.set(t, n);
    },
    get(e, t) {
      return (at.has(e) && at.get(e).get(t)) || null;
    },
    remove(e, t) {
      if (!at.has(e)) return;
      const n = at.get(e);
      n.delete(t), n.size === 0 && at.delete(e);
    },
  },
  ro = 1e6,
  io = 1e3,
  En = "transitionend",
  Er = (e) => (
    e &&
      window.CSS &&
      window.CSS.escape &&
      (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)),
    e
  ),
  oo = (e) =>
    e == null
      ? `${e}`
      : Object.prototype.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  ao = (e) => {
    do e += Math.floor(Math.random() * ro);
    while (document.getElementById(e));
    return e;
  },
  co = (e) => {
    if (!e) return 0;
    let { transitionDuration: t, transitionDelay: n } =
      window.getComputedStyle(e);
    const s = Number.parseFloat(t),
      r = Number.parseFloat(n);
    return !s && !r
      ? 0
      : ((t = t.split(",")[0]),
        (n = n.split(",")[0]),
        (Number.parseFloat(t) + Number.parseFloat(n)) * io);
  },
  br = (e) => {
    e.dispatchEvent(new Event(En));
  },
  et = (e) =>
    !e || typeof e != "object"
      ? !1
      : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"),
  lt = (e) =>
    et(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e == "string" && e.length > 0
      ? document.querySelector(Er(e))
      : null,
  Kt = (e) => {
    if (!et(e) || e.getClientRects().length === 0) return !1;
    const t = getComputedStyle(e).getPropertyValue("visibility") === "visible",
      n = e.closest("details:not([open])");
    if (!n) return t;
    if (n !== e) {
      const s = e.closest("summary");
      if ((s && s.parentNode !== n) || s === null) return !1;
    }
    return t;
  },
  ut = (e) =>
    !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")
      ? !0
      : typeof e.disabled < "u"
      ? e.disabled
      : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false",
  vr = (e) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof e.getRootNode == "function") {
      const t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? vr(e.parentNode) : null;
  },
  Ie = () => {},
  ie = (e) => {
    e.offsetHeight;
  },
  yr = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  Xe = [],
  lo = (e) => {
    document.readyState === "loading"
      ? (Xe.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const t of Xe) t();
          }),
        Xe.push(e))
      : e();
  },
  U = () => document.documentElement.dir === "rtl",
  Y = (e) => {
    lo(() => {
      const t = yr();
      if (t) {
        const n = e.NAME,
          s = t.fn[n];
        (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = s), e.jQueryInterface));
      }
    });
  },
  M = (e, t = [], n = e) => (typeof e == "function" ? e(...t) : n),
  Ar = (e, t, n = !0) => {
    if (!n) {
      M(e);
      return;
    }
    const r = co(t) + 5;
    let i = !1;
    const o = ({ target: a }) => {
      a === t && ((i = !0), t.removeEventListener(En, o), M(e));
    };
    t.addEventListener(En, o),
      setTimeout(() => {
        i || br(t);
      }, r);
  },
  Hn = (e, t, n, s) => {
    const r = e.length;
    let i = e.indexOf(t);
    return i === -1
      ? !n && s
        ? e[r - 1]
        : e[0]
      : ((i += n ? 1 : -1),
        s && (i = (i + r) % r),
        e[Math.max(0, Math.min(i, r - 1))]);
  },
  uo = /[^.]*(?=\..*)\.|.*/,
  fo = /\..*/,
  ho = /::\d+$/,
  Je = {};
let ls = 1;
const Tr = { mouseenter: "mouseover", mouseleave: "mouseout" },
  po = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function wr(e, t) {
  return (t && `${t}::${ls++}`) || e.uidEvent || ls++;
}
function Or(e) {
  const t = wr(e);
  return (e.uidEvent = t), (Je[t] = Je[t] || {}), Je[t];
}
function _o(e, t) {
  return function n(s) {
    return (
      Fn(s, { delegateTarget: e }),
      n.oneOff && d.off(e, s.type, t),
      t.apply(e, [s])
    );
  };
}
function mo(e, t, n) {
  return function s(r) {
    const i = e.querySelectorAll(t);
    for (let { target: o } = r; o && o !== this; o = o.parentNode)
      for (const a of i)
        if (a === o)
          return (
            Fn(r, { delegateTarget: o }),
            s.oneOff && d.off(e, r.type, t, n),
            n.apply(o, [r])
          );
  };
}
function Sr(e, t, n = null) {
  return Object.values(e).find(
    (s) => s.callable === t && s.delegationSelector === n
  );
}
function Cr(e, t, n) {
  const s = typeof t == "string",
    r = s ? n : t || n;
  let i = Nr(e);
  return po.has(i) || (i = e), [s, r, i];
}
function us(e, t, n, s, r) {
  if (typeof t != "string" || !e) return;
  let [i, o, a] = Cr(t, n, s);
  t in Tr &&
    (o = ((p) =>
      function (_) {
        if (
          !_.relatedTarget ||
          (_.relatedTarget !== _.delegateTarget &&
            !_.delegateTarget.contains(_.relatedTarget))
        )
          return p.call(this, _);
      })(o));
  const u = Or(e),
    c = u[a] || (u[a] = {}),
    l = Sr(c, o, i ? n : null);
  if (l) {
    l.oneOff = l.oneOff && r;
    return;
  }
  const h = wr(o, t.replace(uo, "")),
    g = i ? mo(e, n, o) : _o(e, o);
  (g.delegationSelector = i ? n : null),
    (g.callable = o),
    (g.oneOff = r),
    (g.uidEvent = h),
    (c[h] = g),
    e.addEventListener(a, g, i);
}
function bn(e, t, n, s, r) {
  const i = Sr(t[n], s, r);
  i && (e.removeEventListener(n, i, !!r), delete t[n][i.uidEvent]);
}
function go(e, t, n, s) {
  const r = t[n] || {};
  for (const [i, o] of Object.entries(r))
    i.includes(s) && bn(e, t, n, o.callable, o.delegationSelector);
}
function Nr(e) {
  return (e = e.replace(fo, "")), Tr[e] || e;
}
const d = {
  on(e, t, n, s) {
    us(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    us(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e) return;
    const [r, i, o] = Cr(t, n, s),
      a = o !== t,
      u = Or(e),
      c = u[o] || {},
      l = t.startsWith(".");
    if (typeof i < "u") {
      if (!Object.keys(c).length) return;
      bn(e, u, o, i, r ? n : null);
      return;
    }
    if (l) for (const h of Object.keys(u)) go(e, u, h, t.slice(1));
    for (const [h, g] of Object.entries(c)) {
      const m = h.replace(ho, "");
      (!a || t.includes(m)) && bn(e, u, o, g.callable, g.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e) return null;
    const s = yr(),
      r = Nr(t),
      i = t !== r;
    let o = null,
      a = !0,
      u = !0,
      c = !1;
    i &&
      s &&
      ((o = s.Event(t, n)),
      s(e).trigger(o),
      (a = !o.isPropagationStopped()),
      (u = !o.isImmediatePropagationStopped()),
      (c = o.isDefaultPrevented()));
    const l = Fn(new Event(t, { bubbles: a, cancelable: !0 }), n);
    return (
      c && l.preventDefault(),
      u && e.dispatchEvent(l),
      l.defaultPrevented && o && o.preventDefault(),
      l
    );
  },
};
function Fn(e, t = {}) {
  for (const [n, s] of Object.entries(t))
    try {
      e[n] = s;
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return s;
        },
      });
    }
  return e;
}
function fs(e) {
  if (e === "true") return !0;
  if (e === "false") return !1;
  if (e === Number(e).toString()) return Number(e);
  if (e === "" || e === "null") return null;
  if (typeof e != "string") return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function Qe(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const nt = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${Qe(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${Qe(t)}`);
  },
  getDataAttributes(e) {
    if (!e) return {};
    const t = {},
      n = Object.keys(e.dataset).filter(
        (s) => s.startsWith("bs") && !s.startsWith("bsConfig")
      );
    for (const s of n) {
      let r = s.replace(/^bs/, "");
      (r = r.charAt(0).toLowerCase() + r.slice(1, r.length)),
        (t[r] = fs(e.dataset[s]));
    }
    return t;
  },
  getDataAttribute(e, t) {
    return fs(e.getAttribute(`data-bs-${Qe(t)}`));
  },
};
class oe {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, n) {
    const s = et(n) ? nt.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...(typeof s == "object" ? s : {}),
      ...(et(n) ? nt.getDataAttributes(n) : {}),
      ...(typeof t == "object" ? t : {}),
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, r] of Object.entries(n)) {
      const i = t[s],
        o = et(i) ? "element" : oo(i);
      if (!new RegExp(r).test(o))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${r}".`
        );
    }
  }
}
const Eo = "5.3.1";
class X extends oe {
  constructor(t, n) {
    super(),
      (t = lt(t)),
      t &&
        ((this._element = t),
        (this._config = this._getConfig(n)),
        Ge.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Ge.remove(this._element, this.constructor.DATA_KEY),
      d.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
  }
  _queueCallback(t, n, s = !0) {
    Ar(t, n, s);
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t, this._element)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  static getInstance(t) {
    return Ge.get(lt(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return Eo;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const Ze = (e) => {
    let t = e.getAttribute("data-bs-target");
    if (!t || t === "#") {
      let n = e.getAttribute("href");
      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
      n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
        (t = n && n !== "#" ? n.trim() : null);
    }
    return Er(t);
  },
  E = {
    find(e, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, e));
    },
    findOne(e, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, e);
    },
    children(e, t) {
      return [].concat(...e.children).filter((n) => n.matches(t));
    },
    parents(e, t) {
      const n = [];
      let s = e.parentNode.closest(t);
      for (; s; ) n.push(s), (s = s.parentNode.closest(t));
      return n;
    },
    prev(e, t) {
      let n = e.previousElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(e, t) {
      let n = e.nextElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(e) {
      const t = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]',
      ]
        .map((n) => `${n}:not([tabindex^="-"])`)
        .join(",");
      return this.find(t, e).filter((n) => !ut(n) && Kt(n));
    },
    getSelectorFromElement(e) {
      const t = Ze(e);
      return t && E.findOne(t) ? t : null;
    },
    getElementFromSelector(e) {
      const t = Ze(e);
      return t ? E.findOne(t) : null;
    },
    getMultipleElementsFromSelector(e) {
      const t = Ze(e);
      return t ? E.find(t) : [];
    },
  },
  He = (e, t = "hide") => {
    const n = `click.dismiss${e.EVENT_KEY}`,
      s = e.NAME;
    d.on(document, n, `[data-bs-dismiss="${s}"]`, function (r) {
      if (
        (["A", "AREA"].includes(this.tagName) && r.preventDefault(), ut(this))
      )
        return;
      const i = E.getElementFromSelector(this) || this.closest(`.${s}`);
      e.getOrCreateInstance(i)[t]();
    });
  },
  bo = "alert",
  vo = "bs.alert",
  Dr = `.${vo}`,
  yo = `close${Dr}`,
  Ao = `closed${Dr}`,
  To = "fade",
  wo = "show";
class ae extends X {
  static get NAME() {
    return bo;
  }
  close() {
    if (d.trigger(this._element, yo).defaultPrevented) return;
    this._element.classList.remove(wo);
    const n = this._element.classList.contains(To);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    this._element.remove(), d.trigger(this._element, Ao), this.dispose();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ae.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
He(ae, "close");
Y(ae);
const Oo = "button",
  So = "bs.button",
  Co = `.${So}`,
  No = ".data-api",
  Do = "active",
  ds = '[data-bs-toggle="button"]',
  Lo = `click${Co}${No}`;
class ce extends X {
  static get NAME() {
    return Oo;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(Do)
    );
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ce.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
d.on(document, Lo, ds, (e) => {
  e.preventDefault();
  const t = e.target.closest(ds);
  ce.getOrCreateInstance(t).toggle();
});
Y(ce);
const $o = "swipe",
  Yt = ".bs.swipe",
  Ro = `touchstart${Yt}`,
  Io = `touchmove${Yt}`,
  Po = `touchend${Yt}`,
  xo = `pointerdown${Yt}`,
  Mo = `pointerup${Yt}`,
  ko = "touch",
  Vo = "pen",
  Ho = "pointer-event",
  Fo = 40,
  Bo = { endCallback: null, leftCallback: null, rightCallback: null },
  jo = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
  };
class Pe extends oe {
  constructor(t, n) {
    super(),
      (this._element = t),
      !(!t || !Pe.isSupported()) &&
        ((this._config = this._getConfig(n)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents());
  }
  static get Default() {
    return Bo;
  }
  static get DefaultType() {
    return jo;
  }
  static get NAME() {
    return $o;
  }
  dispose() {
    d.off(this._element, Yt);
  }
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) &&
      (this._deltaX = t.clientX - this._deltaX),
      this._handleSwipe(),
      M(this._config.endCallback);
  }
  _move(t) {
    this._deltaX =
      t.touches && t.touches.length > 1
        ? 0
        : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= Fo) return;
    const n = t / this._deltaX;
    (this._deltaX = 0),
      n && M(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents
      ? (d.on(this._element, xo, (t) => this._start(t)),
        d.on(this._element, Mo, (t) => this._end(t)),
        this._element.classList.add(Ho))
      : (d.on(this._element, Ro, (t) => this._start(t)),
        d.on(this._element, Io, (t) => this._move(t)),
        d.on(this._element, Po, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return (
      this._supportPointerEvents &&
      (t.pointerType === Vo || t.pointerType === ko)
    );
  }
  static isSupported() {
    return (
      "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    );
  }
}
const Wo = "carousel",
  Uo = "bs.carousel",
  dt = `.${Uo}`,
  Lr = ".data-api",
  Ko = "ArrowLeft",
  Yo = "ArrowRight",
  zo = 500,
  Qt = "next",
  $t = "prev",
  Pt = "left",
  Ce = "right",
  qo = `slide${dt}`,
  tn = `slid${dt}`,
  Go = `keydown${dt}`,
  Xo = `mouseenter${dt}`,
  Jo = `mouseleave${dt}`,
  Qo = `dragstart${dt}`,
  Zo = `load${dt}${Lr}`,
  ta = `click${dt}${Lr}`,
  $r = "carousel",
  ve = "active",
  ea = "slide",
  na = "carousel-item-end",
  sa = "carousel-item-start",
  ra = "carousel-item-next",
  ia = "carousel-item-prev",
  Rr = ".active",
  Ir = ".carousel-item",
  oa = Rr + Ir,
  aa = ".carousel-item img",
  ca = ".carousel-indicators",
  la = "[data-bs-slide], [data-bs-slide-to]",
  ua = '[data-bs-ride="carousel"]',
  fa = { [Ko]: Ce, [Yo]: Pt },
  da = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  ha = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean",
  };
class zt extends X {
  constructor(t, n) {
    super(t, n),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = E.findOne(ca, this._element)),
      this._addEventListeners(),
      this._config.ride === $r && this.cycle();
  }
  static get Default() {
    return da;
  }
  static get DefaultType() {
    return ha;
  }
  static get NAME() {
    return Wo;
  }
  next() {
    this._slide(Qt);
  }
  nextWhenVisible() {
    !document.hidden && Kt(this._element) && this.next();
  }
  prev() {
    this._slide($t);
  }
  pause() {
    this._isSliding && br(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(),
      this._updateInterval(),
      (this._interval = setInterval(
        () => this.nextWhenVisible(),
        this._config.interval
      ));
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        d.one(this._element, tn, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const n = this._getItems();
    if (t > n.length - 1 || t < 0) return;
    if (this._isSliding) {
      d.one(this._element, tn, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t) return;
    const r = t > s ? Qt : $t;
    this._slide(r, n[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(t) {
    return (t.defaultInterval = t.interval), t;
  }
  _addEventListeners() {
    this._config.keyboard && d.on(this._element, Go, (t) => this._keydown(t)),
      this._config.pause === "hover" &&
        (d.on(this._element, Xo, () => this.pause()),
        d.on(this._element, Jo, () => this._maybeEnableCycle())),
      this._config.touch && Pe.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of E.find(aa, this._element))
      d.on(s, Qo, (r) => r.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(Pt)),
      rightCallback: () => this._slide(this._directionToOrder(Ce)),
      endCallback: () => {
        this._config.pause === "hover" &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            zo + this._config.interval
          )));
      },
    };
    this._swipeHelper = new Pe(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName)) return;
    const n = fa[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement) return;
    const n = E.findOne(Rr, this._indicatorsElement);
    n.classList.remove(ve), n.removeAttribute("aria-current");
    const s = E.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(ve), s.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t) return;
    const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(t, n = null) {
    if (this._isSliding) return;
    const s = this._getActive(),
      r = t === Qt,
      i = n || Hn(this._getItems(), s, r, this._config.wrap);
    if (i === s) return;
    const o = this._getItemIndex(i),
      a = (m) =>
        d.trigger(this._element, m, {
          relatedTarget: i,
          direction: this._orderToDirection(t),
          from: this._getItemIndex(s),
          to: o,
        });
    if (a(qo).defaultPrevented || !s || !i) return;
    const c = !!this._interval;
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(o),
      (this._activeElement = i);
    const l = r ? sa : na,
      h = r ? ra : ia;
    i.classList.add(h), ie(i), s.classList.add(l), i.classList.add(l);
    const g = () => {
      i.classList.remove(l, h),
        i.classList.add(ve),
        s.classList.remove(ve, h, l),
        (this._isSliding = !1),
        a(tn);
    };
    this._queueCallback(g, s, this._isAnimated()), c && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(ea);
  }
  _getActive() {
    return E.findOne(oa, this._element);
  }
  _getItems() {
    return E.find(Ir, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null));
  }
  _directionToOrder(t) {
    return U() ? (t === Pt ? $t : Qt) : t === Pt ? Qt : $t;
  }
  _orderToDirection(t) {
    return U() ? (t === $t ? Pt : Ce) : t === $t ? Ce : Pt;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = zt.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        n.to(t);
        return;
      }
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
d.on(document, ta, la, function (e) {
  const t = E.getElementFromSelector(this);
  if (!t || !t.classList.contains($r)) return;
  e.preventDefault();
  const n = zt.getOrCreateInstance(t),
    s = this.getAttribute("data-bs-slide-to");
  if (s) {
    n.to(s), n._maybeEnableCycle();
    return;
  }
  if (nt.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
d.on(window, Zo, () => {
  const e = E.find(ua);
  for (const t of e) zt.getOrCreateInstance(t);
});
Y(zt);
const pa = "collapse",
  _a = "bs.collapse",
  le = `.${_a}`,
  ma = ".data-api",
  ga = `show${le}`,
  Ea = `shown${le}`,
  ba = `hide${le}`,
  va = `hidden${le}`,
  ya = `click${le}${ma}`,
  en = "show",
  Mt = "collapse",
  ye = "collapsing",
  Aa = "collapsed",
  Ta = `:scope .${Mt} .${Mt}`,
  wa = "collapse-horizontal",
  Oa = "width",
  Sa = "height",
  Ca = ".collapse.show, .collapse.collapsing",
  vn = '[data-bs-toggle="collapse"]',
  Na = { parent: null, toggle: !0 },
  Da = { parent: "(null|element)", toggle: "boolean" };
class jt extends X {
  constructor(t, n) {
    super(t, n), (this._isTransitioning = !1), (this._triggerArray = []);
    const s = E.find(vn);
    for (const r of s) {
      const i = E.getSelectorFromElement(r),
        o = E.find(i).filter((a) => a === this._element);
      i !== null && o.length && this._triggerArray.push(r);
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return Na;
  }
  static get DefaultType() {
    return Da;
  }
  static get NAME() {
    return pa;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let t = [];
    if (
      (this._config.parent &&
        (t = this._getFirstLevelChildren(Ca)
          .filter((a) => a !== this._element)
          .map((a) => jt.getOrCreateInstance(a, { toggle: !1 }))),
      (t.length && t[0]._isTransitioning) ||
        d.trigger(this._element, ga).defaultPrevented)
    )
      return;
    for (const a of t) a.hide();
    const s = this._getDimension();
    this._element.classList.remove(Mt),
      this._element.classList.add(ye),
      (this._element.style[s] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const r = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(ye),
          this._element.classList.add(Mt, en),
          (this._element.style[s] = ""),
          d.trigger(this._element, Ea);
      },
      o = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(r, this._element, !0),
      (this._element.style[s] = `${this._element[o]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      d.trigger(this._element, ba).defaultPrevented
    )
      return;
    const n = this._getDimension();
    (this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      ie(this._element),
      this._element.classList.add(ye),
      this._element.classList.remove(Mt, en);
    for (const r of this._triggerArray) {
      const i = E.getElementFromSelector(r);
      i && !this._isShown(i) && this._addAriaAndCollapsedClass([r], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(ye),
        this._element.classList.add(Mt),
        d.trigger(this._element, va);
    };
    (this._element.style[n] = ""), this._queueCallback(s, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(en);
  }
  _configAfterMerge(t) {
    return (t.toggle = !!t.toggle), (t.parent = lt(t.parent)), t;
  }
  _getDimension() {
    return this._element.classList.contains(wa) ? Oa : Sa;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const t = this._getFirstLevelChildren(vn);
    for (const n of t) {
      const s = E.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = E.find(Ta, this._config.parent);
    return E.find(t, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(Aa, !n), s.setAttribute("aria-expanded", n);
  }
  static jQueryInterface(t) {
    const n = {};
    return (
      typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1),
      this.each(function () {
        const s = jt.getOrCreateInstance(this, n);
        if (typeof t == "string") {
          if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
          s[t]();
        }
      })
    );
  }
}
d.on(document, ya, vn, function (e) {
  (e.target.tagName === "A" ||
    (e.delegateTarget && e.delegateTarget.tagName === "A")) &&
    e.preventDefault();
  for (const t of E.getMultipleElementsFromSelector(this))
    jt.getOrCreateInstance(t, { toggle: !1 }).toggle();
});
Y(jt);
const hs = "dropdown",
  La = "bs.dropdown",
  Ct = `.${La}`,
  Bn = ".data-api",
  $a = "Escape",
  ps = "Tab",
  Ra = "ArrowUp",
  _s = "ArrowDown",
  Ia = 2,
  Pa = `hide${Ct}`,
  xa = `hidden${Ct}`,
  Ma = `show${Ct}`,
  ka = `shown${Ct}`,
  Pr = `click${Ct}${Bn}`,
  xr = `keydown${Ct}${Bn}`,
  Va = `keyup${Ct}${Bn}`,
  xt = "show",
  Ha = "dropup",
  Fa = "dropend",
  Ba = "dropstart",
  ja = "dropup-center",
  Wa = "dropdown-center",
  bt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  Ua = `${bt}.${xt}`,
  Ne = ".dropdown-menu",
  Ka = ".navbar",
  Ya = ".navbar-nav",
  za = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  qa = U() ? "top-end" : "top-start",
  Ga = U() ? "top-start" : "top-end",
  Xa = U() ? "bottom-end" : "bottom-start",
  Ja = U() ? "bottom-start" : "bottom-end",
  Qa = U() ? "left-start" : "right-start",
  Za = U() ? "right-start" : "left-start",
  tc = "top",
  ec = "bottom",
  nc = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  sc = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class G extends X {
  constructor(t, n) {
    super(t, n),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        E.next(this._element, Ne)[0] ||
        E.prev(this._element, Ne)[0] ||
        E.findOne(Ne, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return nc;
  }
  static get DefaultType() {
    return sc;
  }
  static get NAME() {
    return hs;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (ut(this._element) || this._isShown()) return;
    const t = { relatedTarget: this._element };
    if (!d.trigger(this._element, Ma, t).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement && !this._parent.closest(Ya))
      )
        for (const s of [].concat(...document.body.children))
          d.on(s, "mouseover", Ie);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(xt),
        this._element.classList.add(xt),
        d.trigger(this._element, ka, t);
    }
  }
  hide() {
    if (ut(this._element) || !this._isShown()) return;
    const t = { relatedTarget: this._element };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    (this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update();
  }
  _completeHide(t) {
    if (!d.trigger(this._element, Pa, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          d.off(s, "mouseover", Ie);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(xt),
        this._element.classList.remove(xt),
        this._element.setAttribute("aria-expanded", "false"),
        nt.removeDataAttribute(this._menu, "popper"),
        d.trigger(this._element, xa, t);
    }
  }
  _getConfig(t) {
    if (
      ((t = super._getConfig(t)),
      typeof t.reference == "object" &&
        !et(t.reference) &&
        typeof t.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${hs.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper() {
    if (typeof gr > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let t = this._element;
    this._config.reference === "parent"
      ? (t = this._parent)
      : et(this._config.reference)
      ? (t = lt(this._config.reference))
      : typeof this._config.reference == "object" &&
        (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = Vn(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(xt);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(Fa)) return Qa;
    if (t.classList.contains(Ba)) return Za;
    if (t.classList.contains(ja)) return tc;
    if (t.classList.contains(Wa)) return ec;
    const n =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return t.classList.contains(Ha) ? (n ? Ga : qa) : n ? Ja : Xa;
  }
  _detectNavbar() {
    return this._element.closest(Ka) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
      ? (n) => t(n, this._element)
      : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      (this._inNavbar || this._config.display === "static") &&
        (nt.setDataAttribute(this._menu, "popper", "static"),
        (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      { ...t, ...M(this._config.popperConfig, [t]) }
    );
  }
  _selectMenuItem({ key: t, target: n }) {
    const s = E.find(za, this._menu).filter((r) => Kt(r));
    s.length && Hn(s, n, t === _s, !s.includes(n)).focus();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = G.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === Ia || (t.type === "keyup" && t.key !== ps)) return;
    const n = E.find(Ua);
    for (const s of n) {
      const r = G.getInstance(s);
      if (!r || r._config.autoClose === !1) continue;
      const i = t.composedPath(),
        o = i.includes(r._menu);
      if (
        i.includes(r._element) ||
        (r._config.autoClose === "inside" && !o) ||
        (r._config.autoClose === "outside" && o) ||
        (r._menu.contains(t.target) &&
          ((t.type === "keyup" && t.key === ps) ||
            /input|select|option|textarea|form/i.test(t.target.tagName)))
      )
        continue;
      const a = { relatedTarget: r._element };
      t.type === "click" && (a.clickEvent = t), r._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName),
      s = t.key === $a,
      r = [Ra, _s].includes(t.key);
    if ((!r && !s) || (n && !s)) return;
    t.preventDefault();
    const i = this.matches(bt)
        ? this
        : E.prev(this, bt)[0] ||
          E.next(this, bt)[0] ||
          E.findOne(bt, t.delegateTarget.parentNode),
      o = G.getOrCreateInstance(i);
    if (r) {
      t.stopPropagation(), o.show(), o._selectMenuItem(t);
      return;
    }
    o._isShown() && (t.stopPropagation(), o.hide(), i.focus());
  }
}
d.on(document, xr, bt, G.dataApiKeydownHandler);
d.on(document, xr, Ne, G.dataApiKeydownHandler);
d.on(document, Pr, G.clearMenus);
d.on(document, Va, G.clearMenus);
d.on(document, Pr, bt, function (e) {
  e.preventDefault(), G.getOrCreateInstance(this).toggle();
});
Y(G);
const Mr = "backdrop",
  rc = "fade",
  ms = "show",
  gs = `mousedown.bs.${Mr}`,
  ic = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  oc = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class kr extends oe {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return ic;
  }
  static get DefaultType() {
    return oc;
  }
  static get NAME() {
    return Mr;
  }
  show(t) {
    if (!this._config.isVisible) {
      M(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && ie(n),
      n.classList.add(ms),
      this._emulateAnimation(() => {
        M(t);
      });
  }
  hide(t) {
    if (!this._config.isVisible) {
      M(t);
      return;
    }
    this._getElement().classList.remove(ms),
      this._emulateAnimation(() => {
        this.dispose(), M(t);
      });
  }
  dispose() {
    this._isAppended &&
      (d.off(this._element, gs),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      (t.className = this._config.className),
        this._config.isAnimated && t.classList.add(rc),
        (this._element = t);
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return (t.rootElement = lt(t.rootElement)), t;
  }
  _append() {
    if (this._isAppended) return;
    const t = this._getElement();
    this._config.rootElement.append(t),
      d.on(t, gs, () => {
        M(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(t) {
    Ar(t, this._getElement(), this._config.isAnimated);
  }
}
const ac = "focustrap",
  cc = "bs.focustrap",
  xe = `.${cc}`,
  lc = `focusin${xe}`,
  uc = `keydown.tab${xe}`,
  fc = "Tab",
  dc = "forward",
  Es = "backward",
  hc = { autofocus: !0, trapElement: null },
  pc = { autofocus: "boolean", trapElement: "element" };
class Vr extends oe {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return hc;
  }
  static get DefaultType() {
    return pc;
  }
  static get NAME() {
    return ac;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      d.off(document, xe),
      d.on(document, lc, (t) => this._handleFocusin(t)),
      d.on(document, uc, (t) => this._handleKeydown(t)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), d.off(document, xe));
  }
  _handleFocusin(t) {
    const { trapElement: n } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target)) return;
    const s = E.focusableChildren(n);
    s.length === 0
      ? n.focus()
      : this._lastTabNavDirection === Es
      ? s[s.length - 1].focus()
      : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === fc && (this._lastTabNavDirection = t.shiftKey ? Es : dc);
  }
}
const bs = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  vs = ".sticky-top",
  Ae = "padding-right",
  ys = "margin-right";
class yn {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, Ae, (n) => n + t),
      this._setElementAttributes(bs, Ae, (n) => n + t),
      this._setElementAttributes(vs, ys, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, Ae),
      this._resetElementAttributes(bs, Ae),
      this._resetElementAttributes(vs, ys);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(t, n, s) {
    const r = this.getWidth(),
      i = (o) => {
        if (o !== this._element && window.innerWidth > o.clientWidth + r)
          return;
        this._saveInitialAttribute(o, n);
        const a = window.getComputedStyle(o).getPropertyValue(n);
        o.style.setProperty(n, `${s(Number.parseFloat(a))}px`);
      };
    this._applyManipulationCallback(t, i);
  }
  _saveInitialAttribute(t, n) {
    const s = t.style.getPropertyValue(n);
    s && nt.setDataAttribute(t, n, s);
  }
  _resetElementAttributes(t, n) {
    const s = (r) => {
      const i = nt.getDataAttribute(r, n);
      if (i === null) {
        r.style.removeProperty(n);
        return;
      }
      nt.removeDataAttribute(r, n), r.style.setProperty(n, i);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, n) {
    if (et(t)) {
      n(t);
      return;
    }
    for (const s of E.find(t, this._element)) n(s);
  }
}
const _c = "modal",
  mc = "bs.modal",
  K = `.${mc}`,
  gc = ".data-api",
  Ec = "Escape",
  bc = `hide${K}`,
  vc = `hidePrevented${K}`,
  Hr = `hidden${K}`,
  Fr = `show${K}`,
  yc = `shown${K}`,
  Ac = `resize${K}`,
  Tc = `click.dismiss${K}`,
  wc = `mousedown.dismiss${K}`,
  Oc = `keydown.dismiss${K}`,
  Sc = `click${K}${gc}`,
  As = "modal-open",
  Cc = "fade",
  Ts = "show",
  nn = "modal-static",
  Nc = ".modal.show",
  Dc = ".modal-dialog",
  Lc = ".modal-body",
  $c = '[data-bs-toggle="modal"]',
  Rc = { backdrop: !0, focus: !0, keyboard: !0 },
  Ic = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class Ot extends X {
  constructor(t, n) {
    super(t, n),
      (this._dialog = E.findOne(Dc, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new yn()),
      this._addEventListeners();
  }
  static get Default() {
    return Rc;
  }
  static get DefaultType() {
    return Ic;
  }
  static get NAME() {
    return _c;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      d.trigger(this._element, Fr, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(As),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      d.trigger(this._element, bc).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(Ts),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated()
      ));
  }
  dispose() {
    d.off(window, K),
      d.off(this._dialog, K),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new kr({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new Vr({ trapElement: this._element });
  }
  _showElement(t) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const n = E.findOne(Lc, this._dialog);
    n && (n.scrollTop = 0), ie(this._element), this._element.classList.add(Ts);
    const s = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        d.trigger(this._element, yc, { relatedTarget: t });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    d.on(this._element, Oc, (t) => {
      if (t.key === Ec) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      d.on(window, Ac, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      d.on(this._element, wc, (t) => {
        d.one(this._element, Tc, (n) => {
          if (!(this._element !== t.target || this._element !== n.target)) {
            if (this._config.backdrop === "static") {
              this._triggerBackdropTransition();
              return;
            }
            this._config.backdrop && this.hide();
          }
        });
      });
  }
  _hideModal() {
    (this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(As),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          d.trigger(this._element, Hr);
      });
  }
  _isAnimated() {
    return this._element.classList.contains(Cc);
  }
  _triggerBackdropTransition() {
    if (d.trigger(this._element, vc).defaultPrevented) return;
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      s = this._element.style.overflowY;
    s === "hidden" ||
      this._element.classList.contains(nn) ||
      (n || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(nn),
      this._queueCallback(() => {
        this._element.classList.remove(nn),
          this._queueCallback(() => {
            this._element.style.overflowY = s;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      s = n > 0;
    if (s && !t) {
      const r = U() ? "paddingLeft" : "paddingRight";
      this._element.style[r] = `${n}px`;
    }
    if (!s && t) {
      const r = U() ? "paddingRight" : "paddingLeft";
      this._element.style[r] = `${n}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(t, n) {
    return this.each(function () {
      const s = Ot.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
d.on(document, Sc, $c, function (e) {
  const t = E.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    d.one(t, Fr, (r) => {
      r.defaultPrevented ||
        d.one(t, Hr, () => {
          Kt(this) && this.focus();
        });
    });
  const n = E.findOne(Nc);
  n && Ot.getInstance(n).hide(), Ot.getOrCreateInstance(t).toggle(this);
});
He(Ot);
Y(Ot);
const Pc = "offcanvas",
  xc = "bs.offcanvas",
  it = `.${xc}`,
  Br = ".data-api",
  Mc = `load${it}${Br}`,
  kc = "Escape",
  ws = "show",
  Os = "showing",
  Ss = "hiding",
  Vc = "offcanvas-backdrop",
  jr = ".offcanvas.show",
  Hc = `show${it}`,
  Fc = `shown${it}`,
  Bc = `hide${it}`,
  Cs = `hidePrevented${it}`,
  Wr = `hidden${it}`,
  jc = `resize${it}`,
  Wc = `click${it}${Br}`,
  Uc = `keydown.dismiss${it}`,
  Kc = '[data-bs-toggle="offcanvas"]',
  Yc = { backdrop: !0, keyboard: !0, scroll: !1 },
  zc = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class rt extends X {
  constructor(t, n) {
    super(t, n),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get Default() {
    return Yc;
  }
  static get DefaultType() {
    return zc;
  }
  static get NAME() {
    return Pc;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (
      this._isShown ||
      d.trigger(this._element, Hc, { relatedTarget: t }).defaultPrevented
    )
      return;
    (this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new yn().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(Os);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(ws),
        this._element.classList.remove(Os),
        d.trigger(this._element, Fc, { relatedTarget: t });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || d.trigger(this._element, Bc).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(Ss),
      this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(ws, Ss),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._config.scroll || new yn().reset(),
        d.trigger(this._element, Wr);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const t = () => {
        if (this._config.backdrop === "static") {
          d.trigger(this._element, Cs);
          return;
        }
        this.hide();
      },
      n = !!this._config.backdrop;
    return new kr({
      className: Vc,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null,
    });
  }
  _initializeFocusTrap() {
    return new Vr({ trapElement: this._element });
  }
  _addEventListeners() {
    d.on(this._element, Uc, (t) => {
      if (t.key === kc) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        d.trigger(this._element, Cs);
      }
    });
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = rt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
d.on(document, Wc, Kc, function (e) {
  const t = E.getElementFromSelector(this);
  if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), ut(this)))
    return;
  d.one(t, Wr, () => {
    Kt(this) && this.focus();
  });
  const n = E.findOne(jr);
  n && n !== t && rt.getInstance(n).hide(),
    rt.getOrCreateInstance(t).toggle(this);
});
d.on(window, Mc, () => {
  for (const e of E.find(jr)) rt.getOrCreateInstance(e).show();
});
d.on(window, jc, () => {
  for (const e of E.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" &&
      rt.getOrCreateInstance(e).hide();
});
He(rt);
Y(rt);
const qc = /^aria-[\w-]*$/i,
  Ur = {
    "*": ["class", "dir", "id", "lang", "role", qc],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
  },
  Gc = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  Xc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  Jc = (e, t) => {
    const n = e.nodeName.toLowerCase();
    return t.includes(n)
      ? Gc.has(n)
        ? !!Xc.test(e.nodeValue)
        : !0
      : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
  };
function Qc(e, t, n) {
  if (!e.length) return e;
  if (n && typeof n == "function") return n(e);
  const r = new window.DOMParser().parseFromString(e, "text/html"),
    i = [].concat(...r.body.querySelectorAll("*"));
  for (const o of i) {
    const a = o.nodeName.toLowerCase();
    if (!Object.keys(t).includes(a)) {
      o.remove();
      continue;
    }
    const u = [].concat(...o.attributes),
      c = [].concat(t["*"] || [], t[a] || []);
    for (const l of u) Jc(l, c) || o.removeAttribute(l.nodeName);
  }
  return r.body.innerHTML;
}
const Zc = "TemplateFactory",
  tl = {
    allowList: Ur,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>",
  },
  el = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string",
  },
  nl = {
    entry: "(string|element|function|null)",
    selector: "(string|element)",
  };
class sl extends oe {
  constructor(t) {
    super(), (this._config = this._getConfig(t));
  }
  static get Default() {
    return tl;
  }
  static get DefaultType() {
    return el;
  }
  static get NAME() {
    return Zc;
  }
  getContent() {
    return Object.values(this._config.content)
      .map((t) => this._resolvePossibleFunction(t))
      .filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return (
      this._checkContent(t),
      (this._config.content = { ...this._config.content, ...t }),
      this
    );
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [r, i] of Object.entries(this._config.content))
      this._setContent(t, i, r);
    const n = t.children[0],
      s = this._resolvePossibleFunction(this._config.extraClass);
    return s && n.classList.add(...s.split(" ")), n;
  }
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [n, s] of Object.entries(t))
      super._typeCheckConfig({ selector: n, entry: s }, nl);
  }
  _setContent(t, n, s) {
    const r = E.findOne(s, t);
    if (r) {
      if (((n = this._resolvePossibleFunction(n)), !n)) {
        r.remove();
        return;
      }
      if (et(n)) {
        this._putElementInTemplate(lt(n), r);
        return;
      }
      if (this._config.html) {
        r.innerHTML = this._maybeSanitize(n);
        return;
      }
      r.textContent = n;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize
      ? Qc(t, this._config.allowList, this._config.sanitizeFn)
      : t;
  }
  _resolvePossibleFunction(t) {
    return M(t, [this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      (n.innerHTML = ""), n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const rl = "tooltip",
  il = new Set(["sanitize", "allowList", "sanitizeFn"]),
  sn = "fade",
  ol = "modal",
  Te = "show",
  al = ".tooltip-inner",
  Ns = `.${ol}`,
  Ds = "hide.bs.modal",
  Zt = "hover",
  rn = "focus",
  cl = "click",
  ll = "manual",
  ul = "hide",
  fl = "hidden",
  dl = "show",
  hl = "shown",
  pl = "inserted",
  _l = "click",
  ml = "focusin",
  gl = "focusout",
  El = "mouseenter",
  bl = "mouseleave",
  vl = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: U() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: U() ? "right" : "left",
  },
  yl = {
    allowList: Ur,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus",
  },
  Al = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
  };
class Nt extends X {
  constructor(t, n) {
    if (typeof gr > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t, n),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._isHovered = null),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._templateFactory = null),
      (this._newContent = null),
      (this.tip = null),
      this._setListeners(),
      this._config.selector || this._fixTitle();
  }
  static get Default() {
    return yl;
  }
  static get DefaultType() {
    return Al;
  }
  static get NAME() {
    return rl;
  }
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown())
      ) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout),
      d.off(this._element.closest(Ns), Ds, this._hideModalHandler),
      this._element.getAttribute("data-bs-original-title") &&
        this._element.setAttribute(
          "title",
          this._element.getAttribute("data-bs-original-title")
        ),
      this._disposePopper(),
      super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled)) return;
    const t = d.trigger(this._element, this.constructor.eventName(dl)),
      s = (
        vr(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element);
    if (t.defaultPrevented || !s) return;
    this._disposePopper();
    const r = this._getTipElement();
    this._element.setAttribute("aria-describedby", r.getAttribute("id"));
    const { container: i } = this._config;
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (i.append(r), d.trigger(this._element, this.constructor.eventName(pl))),
      (this._popper = this._createPopper(r)),
      r.classList.add(Te),
      "ontouchstart" in document.documentElement)
    )
      for (const a of [].concat(...document.body.children))
        d.on(a, "mouseover", Ie);
    const o = () => {
      d.trigger(this._element, this.constructor.eventName(hl)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1);
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (
      !this._isShown() ||
      d.trigger(this._element, this.constructor.eventName(ul)).defaultPrevented
    )
      return;
    if (
      (this._getTipElement().classList.remove(Te),
      "ontouchstart" in document.documentElement)
    )
      for (const r of [].concat(...document.body.children))
        d.off(r, "mouseover", Ie);
    (this._activeTrigger[cl] = !1),
      (this._activeTrigger[rn] = !1),
      (this._activeTrigger[Zt] = !1),
      (this._isHovered = null);
    const s = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute("aria-describedby"),
        d.trigger(this._element, this.constructor.eventName(fl)));
    };
    this._queueCallback(s, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return (
      this.tip ||
        (this.tip = this._createTipElement(
          this._newContent || this._getContentForTemplate()
        )),
      this.tip
    );
  }
  _createTipElement(t) {
    const n = this._getTemplateFactory(t).toHtml();
    if (!n) return null;
    n.classList.remove(sn, Te),
      n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = ao(this.constructor.NAME).toString();
    return (
      n.setAttribute("id", s), this._isAnimated() && n.classList.add(sn), n
    );
  }
  setContent(t) {
    (this._newContent = t),
      this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return (
      this._templateFactory
        ? this._templateFactory.changeContent(t)
        : (this._templateFactory = new sl({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    );
  }
  _getContentForTemplate() {
    return { [al]: this._getTitle() };
  }
  _getTitle() {
    return (
      this._resolvePossibleFunction(this._config.title) ||
      this._element.getAttribute("data-bs-original-title")
    );
  }
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _isAnimated() {
    return (
      this._config.animation || (this.tip && this.tip.classList.contains(sn))
    );
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(Te);
  }
  _createPopper(t) {
    const n = M(this._config.placement, [this, t, this._element]),
      s = vl[n.toUpperCase()];
    return Vn(this._element, t, this._getPopperConfig(s));
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
      ? (n) => t(n, this._element)
      : t;
  }
  _resolvePossibleFunction(t) {
    return M(t, [this._element]);
  }
  _getPopperConfig(t) {
    const n = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: { fallbackPlacements: this._config.fallbackPlacements },
        },
        { name: "offset", options: { offset: this._getOffset() } },
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        {
          name: "arrow",
          options: { element: `.${this.constructor.NAME}-arrow` },
        },
        {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: (s) => {
            this._getTipElement().setAttribute(
              "data-popper-placement",
              s.state.placement
            );
          },
        },
      ],
    };
    return { ...n, ...M(this._config.popperConfig, [n]) };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        d.on(
          this._element,
          this.constructor.eventName(_l),
          this._config.selector,
          (s) => {
            this._initializeOnDelegatedTarget(s).toggle();
          }
        );
      else if (n !== ll) {
        const s =
            n === Zt
              ? this.constructor.eventName(El)
              : this.constructor.eventName(ml),
          r =
            n === Zt
              ? this.constructor.eventName(bl)
              : this.constructor.eventName(gl);
        d.on(this._element, s, this._config.selector, (i) => {
          const o = this._initializeOnDelegatedTarget(i);
          (o._activeTrigger[i.type === "focusin" ? rn : Zt] = !0), o._enter();
        }),
          d.on(this._element, r, this._config.selector, (i) => {
            const o = this._initializeOnDelegatedTarget(i);
            (o._activeTrigger[i.type === "focusout" ? rn : Zt] =
              o._element.contains(i.relatedTarget)),
              o._leave();
          });
      }
    (this._hideModalHandler = () => {
      this._element && this.hide();
    }),
      d.on(this._element.closest(Ns), Ds, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    t &&
      (!this._element.getAttribute("aria-label") &&
        !this._element.textContent.trim() &&
        this._element.setAttribute("aria-label", t),
      this._element.setAttribute("data-bs-original-title", t),
      this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    (this._isHovered = !0),
      this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() ||
      ((this._isHovered = !1),
      this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
  }
  _setTimeout(t, n) {
    clearTimeout(this._timeout), (this._timeout = setTimeout(t, n));
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const n = nt.getDataAttributes(this._element);
    for (const s of Object.keys(n)) il.has(s) && delete n[s];
    return (
      (t = { ...n, ...(typeof t == "object" && t ? t : {}) }),
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return (
      (t.container = t.container === !1 ? document.body : lt(t.container)),
      typeof t.delay == "number" &&
        (t.delay = { show: t.delay, hide: t.delay }),
      typeof t.title == "number" && (t.title = t.title.toString()),
      typeof t.content == "number" && (t.content = t.content.toString()),
      t
    );
  }
  _getDelegateConfig() {
    const t = {};
    for (const [n, s] of Object.entries(this._config))
      this.constructor.Default[n] !== s && (t[n] = s);
    return (t.selector = !1), (t.trigger = "manual"), t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null)),
      this.tip && (this.tip.remove(), (this.tip = null));
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Nt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Y(Nt);
const Tl = "popover",
  wl = ".popover-header",
  Ol = ".popover-body",
  Sl = {
    ...Nt.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click",
  },
  Cl = { ...Nt.DefaultType, content: "(null|string|element|function)" };
class Fe extends Nt {
  static get Default() {
    return Sl;
  }
  static get DefaultType() {
    return Cl;
  }
  static get NAME() {
    return Tl;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return { [wl]: this._getTitle(), [Ol]: this._getContent() };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Fe.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Y(Fe);
const Nl = "scrollspy",
  Dl = "bs.scrollspy",
  jn = `.${Dl}`,
  Ll = ".data-api",
  $l = `activate${jn}`,
  Ls = `click${jn}`,
  Rl = `load${jn}${Ll}`,
  Il = "dropdown-item",
  Rt = "active",
  Pl = '[data-bs-spy="scroll"]',
  on = "[href]",
  xl = ".nav, .list-group",
  $s = ".nav-link",
  Ml = ".nav-item",
  kl = ".list-group-item",
  Vl = `${$s}, ${Ml} > ${$s}, ${kl}`,
  Hl = ".dropdown",
  Fl = ".dropdown-toggle",
  Bl = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  jl = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array",
  };
class ue extends X {
  constructor(t, n) {
    super(t, n),
      (this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      (this._rootElement =
        getComputedStyle(this._element).overflowY === "visible"
          ? null
          : this._element),
      (this._activeTarget = null),
      (this._observer = null),
      (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
      this.refresh();
  }
  static get Default() {
    return Bl;
  }
  static get DefaultType() {
    return jl;
  }
  static get NAME() {
    return Nl;
  }
  refresh() {
    this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver());
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  _configAfterMerge(t) {
    return (
      (t.target = lt(t.target) || document.body),
      (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
      typeof t.threshold == "string" &&
        (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))),
      t
    );
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll &&
      (d.off(this._config.target, Ls),
      d.on(this._config.target, Ls, on, (t) => {
        const n = this._observableSections.get(t.target.hash);
        if (n) {
          t.preventDefault();
          const s = this._rootElement || window,
            r = n.offsetTop - this._element.offsetTop;
          if (s.scrollTo) {
            s.scrollTo({ top: r, behavior: "smooth" });
            return;
          }
          s.scrollTop = r;
        }
      }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin,
    };
    return new IntersectionObserver((n) => this._observerCallback(n), t);
  }
  _observerCallback(t) {
    const n = (o) => this._targetLinks.get(`#${o.target.id}`),
      s = (o) => {
        (this._previousScrollData.visibleEntryTop = o.target.offsetTop),
          this._process(n(o));
      },
      r = (this._rootElement || document.documentElement).scrollTop,
      i = r >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = r;
    for (const o of t) {
      if (!o.isIntersecting) {
        (this._activeTarget = null), this._clearActiveClass(n(o));
        continue;
      }
      const a = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (i && a) {
        if ((s(o), !r)) return;
        continue;
      }
      !i && !a && s(o);
    }
  }
  _initializeTargetsAndObservables() {
    (this._targetLinks = new Map()), (this._observableSections = new Map());
    const t = E.find(on, this._config.target);
    for (const n of t) {
      if (!n.hash || ut(n)) continue;
      const s = E.findOne(decodeURI(n.hash), this._element);
      Kt(s) &&
        (this._targetLinks.set(decodeURI(n.hash), n),
        this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = t),
      t.classList.add(Rt),
      this._activateParents(t),
      d.trigger(this._element, $l, { relatedTarget: t }));
  }
  _activateParents(t) {
    if (t.classList.contains(Il)) {
      E.findOne(Fl, t.closest(Hl)).classList.add(Rt);
      return;
    }
    for (const n of E.parents(t, xl))
      for (const s of E.prev(n, Vl)) s.classList.add(Rt);
  }
  _clearActiveClass(t) {
    t.classList.remove(Rt);
    const n = E.find(`${on}.${Rt}`, t);
    for (const s of n) s.classList.remove(Rt);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ue.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
d.on(window, Rl, () => {
  for (const e of E.find(Pl)) ue.getOrCreateInstance(e);
});
Y(ue);
const Wl = "tab",
  Ul = "bs.tab",
  Dt = `.${Ul}`,
  Kl = `hide${Dt}`,
  Yl = `hidden${Dt}`,
  zl = `show${Dt}`,
  ql = `shown${Dt}`,
  Gl = `click${Dt}`,
  Xl = `keydown${Dt}`,
  Jl = `load${Dt}`,
  Ql = "ArrowLeft",
  Rs = "ArrowRight",
  Zl = "ArrowUp",
  Is = "ArrowDown",
  an = "Home",
  Ps = "End",
  vt = "active",
  xs = "fade",
  cn = "show",
  tu = "dropdown",
  eu = ".dropdown-toggle",
  nu = ".dropdown-menu",
  ln = ":not(.dropdown-toggle)",
  su = '.list-group, .nav, [role="tablist"]',
  ru = ".nav-item, .list-group-item",
  iu = `.nav-link${ln}, .list-group-item${ln}, [role="tab"]${ln}`,
  Kr =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  un = `${iu}, ${Kr}`,
  ou = `.${vt}[data-bs-toggle="tab"], .${vt}[data-bs-toggle="pill"], .${vt}[data-bs-toggle="list"]`;
class St extends X {
  constructor(t) {
    super(t),
      (this._parent = this._element.closest(su)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        d.on(this._element, Xl, (n) => this._keydown(n)));
  }
  static get NAME() {
    return Wl;
  }
  show() {
    const t = this._element;
    if (this._elemIsActive(t)) return;
    const n = this._getActiveElem(),
      s = n ? d.trigger(n, Kl, { relatedTarget: t }) : null;
    d.trigger(t, zl, { relatedTarget: n }).defaultPrevented ||
      (s && s.defaultPrevented) ||
      (this._deactivate(n, t), this._activate(t, n));
  }
  _activate(t, n) {
    if (!t) return;
    t.classList.add(vt), this._activate(E.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(cn);
        return;
      }
      t.removeAttribute("tabindex"),
        t.setAttribute("aria-selected", !0),
        this._toggleDropDown(t, !0),
        d.trigger(t, ql, { relatedTarget: n });
    };
    this._queueCallback(s, t, t.classList.contains(xs));
  }
  _deactivate(t, n) {
    if (!t) return;
    t.classList.remove(vt),
      t.blur(),
      this._deactivate(E.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(cn);
        return;
      }
      t.setAttribute("aria-selected", !1),
        t.setAttribute("tabindex", "-1"),
        this._toggleDropDown(t, !1),
        d.trigger(t, Yl, { relatedTarget: n });
    };
    this._queueCallback(s, t, t.classList.contains(xs));
  }
  _keydown(t) {
    if (![Ql, Rs, Zl, Is, an, Ps].includes(t.key)) return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((r) => !ut(r));
    let s;
    if ([an, Ps].includes(t.key)) s = n[t.key === an ? 0 : n.length - 1];
    else {
      const r = [Rs, Is].includes(t.key);
      s = Hn(n, t.target, r, !0);
    }
    s && (s.focus({ preventScroll: !0 }), St.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return E.find(un, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, n) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const s of n) this._setInitialAttributesOnChild(s);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const n = this._elemIsActive(t),
      s = this._getOuterElement(t);
    t.setAttribute("aria-selected", n),
      s !== t && this._setAttributeIfNotExists(s, "role", "presentation"),
      n || t.setAttribute("tabindex", "-1"),
      this._setAttributeIfNotExists(t, "role", "tab"),
      this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const n = E.getElementFromSelector(t);
    n &&
      (this._setAttributeIfNotExists(n, "role", "tabpanel"),
      t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const s = this._getOuterElement(t);
    if (!s.classList.contains(tu)) return;
    const r = (i, o) => {
      const a = E.findOne(i, s);
      a && a.classList.toggle(o, n);
    };
    r(eu, vt), r(nu, cn), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(vt);
  }
  _getInnerElement(t) {
    return t.matches(un) ? t : E.findOne(un, t);
  }
  _getOuterElement(t) {
    return t.closest(ru) || t;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = St.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
d.on(document, Gl, Kr, function (e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    !ut(this) && St.getOrCreateInstance(this).show();
});
d.on(window, Jl, () => {
  for (const e of E.find(ou)) St.getOrCreateInstance(e);
});
Y(St);
const au = "toast",
  cu = "bs.toast",
  ht = `.${cu}`,
  lu = `mouseover${ht}`,
  uu = `mouseout${ht}`,
  fu = `focusin${ht}`,
  du = `focusout${ht}`,
  hu = `hide${ht}`,
  pu = `hidden${ht}`,
  _u = `show${ht}`,
  mu = `shown${ht}`,
  gu = "fade",
  Ms = "hide",
  we = "show",
  Oe = "showing",
  Eu = { animation: "boolean", autohide: "boolean", delay: "number" },
  bu = { animation: !0, autohide: !0, delay: 5e3 };
class fe extends X {
  constructor(t, n) {
    super(t, n),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners();
  }
  static get Default() {
    return bu;
  }
  static get DefaultType() {
    return Eu;
  }
  static get NAME() {
    return au;
  }
  show() {
    if (d.trigger(this._element, _u).defaultPrevented) return;
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(gu);
    const n = () => {
      this._element.classList.remove(Oe),
        d.trigger(this._element, mu),
        this._maybeScheduleHide();
    };
    this._element.classList.remove(Ms),
      ie(this._element),
      this._element.classList.add(we, Oe),
      this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || d.trigger(this._element, hu).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Ms),
        this._element.classList.remove(Oe, we),
        d.trigger(this._element, pu);
    };
    this._element.classList.add(Oe),
      this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(),
      this.isShown() && this._element.classList.remove(we),
      super.dispose();
  }
  isShown() {
    return this._element.classList.contains(we);
  }
  _maybeScheduleHide() {
    this._config.autohide &&
      (this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
  }
  _onInteraction(t, n) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = n;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = n;
        break;
      }
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const s = t.relatedTarget;
    this._element === s ||
      this._element.contains(s) ||
      this._maybeScheduleHide();
  }
  _setListeners() {
    d.on(this._element, lu, (t) => this._onInteraction(t, !0)),
      d.on(this._element, uu, (t) => this._onInteraction(t, !1)),
      d.on(this._element, fu, (t) => this._onInteraction(t, !0)),
      d.on(this._element, du, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = fe.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
He(fe);
Y(fe);
const xf = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Alert: ae,
      Button: ce,
      Carousel: zt,
      Collapse: jt,
      Dropdown: G,
      Modal: Ot,
      Offcanvas: rt,
      Popover: Fe,
      ScrollSpy: ue,
      Tab: St,
      Toast: fe,
      Tooltip: Nt,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Yr(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: vu } = Object.prototype,
  { getPrototypeOf: Wn } = Object,
  Be = ((e) => (t) => {
    const n = vu.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  tt = (e) => ((e = e.toLowerCase()), (t) => Be(t) === e),
  je = (e) => (t) => typeof t === e,
  { isArray: qt } = Array,
  se = je("undefined");
function yu(e) {
  return (
    e !== null &&
    !se(e) &&
    e.constructor !== null &&
    !se(e.constructor) &&
    j(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const zr = tt("ArrayBuffer");
function Au(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && zr(e.buffer)),
    t
  );
}
const Tu = je("string"),
  j = je("function"),
  qr = je("number"),
  We = (e) => e !== null && typeof e == "object",
  wu = (e) => e === !0 || e === !1,
  De = (e) => {
    if (Be(e) !== "object") return !1;
    const t = Wn(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Ou = tt("Date"),
  Su = tt("File"),
  Cu = tt("Blob"),
  Nu = tt("FileList"),
  Du = (e) => We(e) && j(e.pipe),
  Lu = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (j(e.append) &&
          ((t = Be(e)) === "formdata" ||
            (t === "object" &&
              j(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  $u = tt("URLSearchParams"),
  Ru = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function de(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let s, r;
  if ((typeof e != "object" && (e = [e]), qt(e)))
    for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (s = 0; s < o; s++) (a = i[s]), t.call(null, e[a], a, e);
  }
}
function Gr(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length,
    r;
  for (; s-- > 0; ) if (((r = n[s]), t === r.toLowerCase())) return r;
  return null;
}
const Xr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Jr = (e) => !se(e) && e !== Xr;
function An() {
  const { caseless: e } = (Jr(this) && this) || {},
    t = {},
    n = (s, r) => {
      const i = (e && Gr(t, r)) || r;
      De(t[i]) && De(s)
        ? (t[i] = An(t[i], s))
        : De(s)
        ? (t[i] = An({}, s))
        : qt(s)
        ? (t[i] = s.slice())
        : (t[i] = s);
    };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && de(arguments[s], n);
  return t;
}
const Iu = (e, t, n, { allOwnKeys: s } = {}) => (
    de(
      t,
      (r, i) => {
        n && j(r) ? (e[i] = Yr(r, n)) : (e[i] = r);
      },
      { allOwnKeys: s }
    ),
    e
  ),
  Pu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  xu = (e, t, n, s) => {
    (e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Mu = (e, t, n, s) => {
    let r, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
        (o = r[i]), (!s || s(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && Wn(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ku = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const s = e.indexOf(t, n);
    return s !== -1 && s === n;
  },
  Vu = (e) => {
    if (!e) return null;
    if (qt(e)) return e;
    let t = e.length;
    if (!qr(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Hu = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Wn(Uint8Array)),
  Fu = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e);
    let r;
    for (; (r = s.next()) && !r.done; ) {
      const i = r.value;
      t.call(e, i[0], i[1]);
    }
  },
  Bu = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null; ) s.push(n);
    return s;
  },
  ju = tt("HTMLFormElement"),
  Wu = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
      return s.toUpperCase() + r;
    }),
  ks = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Uu = tt("RegExp"),
  Qr = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {};
    de(n, (r, i) => {
      t(r, i, e) !== !1 && (s[i] = r);
    }),
      Object.defineProperties(e, s);
  },
  Ku = (e) => {
    Qr(e, (t, n) => {
      if (j(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const s = e[n];
      if (j(s)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Yu = (e, t) => {
    const n = {},
      s = (r) => {
        r.forEach((i) => {
          n[i] = !0;
        });
      };
    return qt(e) ? s(e) : s(String(e).split(t)), n;
  },
  zu = () => {},
  qu = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  fn = "abcdefghijklmnopqrstuvwxyz",
  Vs = "0123456789",
  Zr = { DIGIT: Vs, ALPHA: fn, ALPHA_DIGIT: fn + fn.toUpperCase() + Vs },
  Gu = (e = 16, t = Zr.ALPHA_DIGIT) => {
    let n = "";
    const { length: s } = t;
    for (; e--; ) n += t[(Math.random() * s) | 0];
    return n;
  };
function Xu(e) {
  return !!(
    e &&
    j(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Ju = (e) => {
    const t = new Array(10),
      n = (s, r) => {
        if (We(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            t[r] = s;
            const i = qt(s) ? [] : {};
            return (
              de(s, (o, a) => {
                const u = n(o, r + 1);
                !se(u) && (i[a] = u);
              }),
              (t[r] = void 0),
              i
            );
          }
        }
        return s;
      };
    return n(e, 0);
  },
  Qu = tt("AsyncFunction"),
  Zu = (e) => e && (We(e) || j(e)) && j(e.then) && j(e.catch),
  f = {
    isArray: qt,
    isArrayBuffer: zr,
    isBuffer: yu,
    isFormData: Lu,
    isArrayBufferView: Au,
    isString: Tu,
    isNumber: qr,
    isBoolean: wu,
    isObject: We,
    isPlainObject: De,
    isUndefined: se,
    isDate: Ou,
    isFile: Su,
    isBlob: Cu,
    isRegExp: Uu,
    isFunction: j,
    isStream: Du,
    isURLSearchParams: $u,
    isTypedArray: Hu,
    isFileList: Nu,
    forEach: de,
    merge: An,
    extend: Iu,
    trim: Ru,
    stripBOM: Pu,
    inherits: xu,
    toFlatObject: Mu,
    kindOf: Be,
    kindOfTest: tt,
    endsWith: ku,
    toArray: Vu,
    forEachEntry: Fu,
    matchAll: Bu,
    isHTMLForm: ju,
    hasOwnProperty: ks,
    hasOwnProp: ks,
    reduceDescriptors: Qr,
    freezeMethods: Ku,
    toObjectSet: Yu,
    toCamelCase: Wu,
    noop: zu,
    toFiniteNumber: qu,
    findKey: Gr,
    global: Xr,
    isContextDefined: Jr,
    ALPHABET: Zr,
    generateString: Gu,
    isSpecCompliantForm: Xu,
    toJSONObject: Ju,
    isAsyncFn: Qu,
    isThenable: Zu,
  };
function A(e, t, n, s, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    r && (this.response = r);
}
f.inherits(A, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: f.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const ti = A.prototype,
  ei = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ei[e] = { value: e };
});
Object.defineProperties(A, ei);
Object.defineProperty(ti, "isAxiosError", { value: !0 });
A.from = (e, t, n, s, r, i) => {
  const o = Object.create(ti);
  return (
    f.toFlatObject(
      e,
      o,
      function (u) {
        return u !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    A.call(o, e.message, t, n, s, r),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const tf = null;
function Tn(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function ni(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Hs(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (r, i) {
          return (r = ni(r)), !n && i ? "[" + r + "]" : r;
        })
        .join(n ? "." : "")
    : t;
}
function ef(e) {
  return f.isArray(e) && !e.some(Tn);
}
const nf = f.toFlatObject(f, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ue(e, t, n) {
  if (!f.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = f.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (_, b) {
        return !f.isUndefined(b[_]);
      }
    ));
  const s = n.metaTokens,
    r = n.visitor || l,
    i = n.dots,
    o = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && f.isSpecCompliantForm(t);
  if (!f.isFunction(r)) throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (f.isDate(p)) return p.toISOString();
    if (!u && f.isBlob(p))
      throw new A("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(p) || f.isTypedArray(p)
      ? u && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function l(p, _, b) {
    let y = p;
    if (p && !b && typeof p == "object") {
      if (f.endsWith(_, "{}"))
        (_ = s ? _ : _.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (f.isArray(p) && ef(p)) ||
        ((f.isFileList(p) || f.endsWith(_, "[]")) && (y = f.toArray(p)))
      )
        return (
          (_ = ni(_)),
          y.forEach(function (S, v) {
            !(f.isUndefined(S) || S === null) &&
              t.append(
                o === !0 ? Hs([_], v, i) : o === null ? _ : _ + "[]",
                c(S)
              );
          }),
          !1
        );
    }
    return Tn(p) ? !0 : (t.append(Hs(b, _, i), c(p)), !1);
  }
  const h = [],
    g = Object.assign(nf, {
      defaultVisitor: l,
      convertValue: c,
      isVisitable: Tn,
    });
  function m(p, _) {
    if (!f.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      h.push(p),
        f.forEach(p, function (y, T) {
          (!(f.isUndefined(y) || y === null) &&
            r.call(t, y, f.isString(T) ? T.trim() : T, _, g)) === !0 &&
            m(y, _ ? _.concat(T) : [T]);
        }),
        h.pop();
    }
  }
  if (!f.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function Fs(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function Un(e, t) {
  (this._pairs = []), e && Ue(e, this, t);
}
const si = Un.prototype;
si.append = function (t, n) {
  this._pairs.push([t, n]);
};
si.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, Fs);
      }
    : Fs;
  return this._pairs
    .map(function (r) {
      return n(r[0]) + "=" + n(r[1]);
    }, "")
    .join("&");
};
function sf(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ri(e, t, n) {
  if (!t) return e;
  const s = (n && n.encode) || sf,
    r = n && n.serialize;
  let i;
  if (
    (r
      ? (i = r(t, n))
      : (i = f.isURLSearchParams(t) ? t.toString() : new Un(t, n).toString(s)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Bs {
  constructor() {
    this.handlers = [];
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    f.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const ii = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  rf = typeof URLSearchParams < "u" ? URLSearchParams : Un,
  of = typeof FormData < "u" ? FormData : null,
  af = typeof Blob < "u" ? Blob : null,
  cf = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  lf =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  J = {
    classes: { URLSearchParams: rf, FormData: of, Blob: af },
    isStandardBrowserEnv: cf,
    isStandardBrowserWebWorkerEnv: lf,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function uf(e, t) {
  return Ue(
    e,
    new J.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, r, i) {
          return J.isNode && f.isBuffer(n)
            ? (this.append(s, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function ff(e) {
  return f
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function df(e) {
  const t = {},
    n = Object.keys(e);
  let s;
  const r = n.length;
  let i;
  for (s = 0; s < r; s++) (i = n[s]), (t[i] = e[i]);
  return t;
}
function oi(e) {
  function t(n, s, r, i) {
    let o = n[i++];
    const a = Number.isFinite(+o),
      u = i >= n.length;
    return (
      (o = !o && f.isArray(r) ? r.length : o),
      u
        ? (f.hasOwnProp(r, o) ? (r[o] = [r[o], s]) : (r[o] = s), !a)
        : ((!r[o] || !f.isObject(r[o])) && (r[o] = []),
          t(n, s, r[o], i) && f.isArray(r[o]) && (r[o] = df(r[o])),
          !a)
    );
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return (
      f.forEachEntry(e, (s, r) => {
        t(ff(s), r, n, 0);
      }),
      n
    );
  }
  return null;
}
const hf = { "Content-Type": void 0 };
function pf(e, t, n) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (n || JSON.stringify)(e);
}
const Gt = {
  transitional: ii,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || "",
        r = s.indexOf("application/json") > -1,
        i = f.isObject(t);
      if ((i && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t)))
        return r && r ? JSON.stringify(oi(t)) : t;
      if (
        f.isArrayBuffer(t) ||
        f.isBuffer(t) ||
        f.isStream(t) ||
        f.isFile(t) ||
        f.isBlob(t)
      )
        return t;
      if (f.isArrayBufferView(t)) return t.buffer;
      if (f.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return uf(t, this.formSerializer).toString();
        if ((a = f.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Ue(
            a ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return i || r ? (n.setContentType("application/json", !1), pf(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Gt.transitional,
        s = n && n.forcedJSONParsing,
        r = this.responseType === "json";
      if (t && f.isString(t) && ((s && !this.responseType) || r)) {
        const o = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? A.from(a, A.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: J.classes.FormData, Blob: J.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
f.forEach(["delete", "get", "head"], function (t) {
  Gt.headers[t] = {};
});
f.forEach(["post", "put", "patch"], function (t) {
  Gt.headers[t] = f.merge(hf);
});
const _f = f.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  mf = (e) => {
    const t = {};
    let n, s, r;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (r = o.indexOf(":")),
              (n = o.substring(0, r).trim().toLowerCase()),
              (s = o.substring(r + 1).trim()),
              !(!n || (t[n] && _f[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(s)
                    : (t[n] = [s])
                  : (t[n] = t[n] ? t[n] + ", " + s : s));
          }),
      t
    );
  },
  js = Symbol("internals");
function te(e) {
  return e && String(e).trim().toLowerCase();
}
function Le(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Le) : String(e);
}
function gf(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = n.exec(e)); ) t[s[1]] = s[2];
  return t;
}
const Ef = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function dn(e, t, n, s, r) {
  if (f.isFunction(s)) return s.call(this, t, n);
  if ((r && (t = n), !!f.isString(t))) {
    if (f.isString(s)) return t.indexOf(s) !== -1;
    if (f.isRegExp(s)) return s.test(t);
  }
}
function bf(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function vf(e, t) {
  const n = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function (r, i, o) {
        return this[s].call(this, t, r, i, o);
      },
      configurable: !0,
    });
  });
}
let W = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function i(a, u, c) {
      const l = te(u);
      if (!l) throw new Error("header name must be a non-empty string");
      const h = f.findKey(r, l);
      (!h || r[h] === void 0 || c === !0 || (c === void 0 && r[h] !== !1)) &&
        (r[h || u] = Le(a));
    }
    const o = (a, u) => f.forEach(a, (c, l) => i(c, l, u));
    return (
      f.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : f.isString(t) && (t = t.trim()) && !Ef(t)
        ? o(mf(t), n)
        : t != null && i(n, t, s),
      this
    );
  }
  get(t, n) {
    if (((t = te(t)), t)) {
      const s = f.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n) return r;
        if (n === !0) return gf(r);
        if (f.isFunction(n)) return n.call(this, r, s);
        if (f.isRegExp(n)) return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = te(t)), t)) {
      const s = f.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || dn(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function i(o) {
      if (((o = te(o)), o)) {
        const a = f.findKey(s, o);
        a && (!n || dn(s, s[a], a, n)) && (delete s[a], (r = !0));
      }
    }
    return f.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length,
      r = !1;
    for (; s--; ) {
      const i = n[s];
      (!t || dn(this, this[i], i, t, !0)) && (delete this[i], (r = !0));
    }
    return r;
  }
  normalize(t) {
    const n = this,
      s = {};
    return (
      f.forEach(this, (r, i) => {
        const o = f.findKey(s, i);
        if (o) {
          (n[o] = Le(r)), delete n[i];
          return;
        }
        const a = t ? bf(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Le(r)), (s[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      f.forEach(this, (s, r) => {
        s != null && s !== !1 && (n[r] = t && f.isArray(s) ? s.join(", ") : s);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[js] = this[js] = { accessors: {} }).accessors,
      r = this.prototype;
    function i(o) {
      const a = te(o);
      s[a] || (vf(r, o), (s[a] = !0));
    }
    return f.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
W.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
f.freezeMethods(W.prototype);
f.freezeMethods(W);
function hn(e, t) {
  const n = this || Gt,
    s = t || n,
    r = W.from(s.headers);
  let i = s.data;
  return (
    f.forEach(e, function (a) {
      i = a.call(n, i, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    i
  );
}
function ai(e) {
  return !!(e && e.__CANCEL__);
}
function he(e, t, n) {
  A.call(this, e ?? "canceled", A.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
f.inherits(he, A, { __CANCEL__: !0 });
function yf(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new A(
          "Request failed with status code " + n.status,
          [A.ERR_BAD_REQUEST, A.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Af = J.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, s, r, i, o, a) {
          const u = [];
          u.push(n + "=" + encodeURIComponent(s)),
            f.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()),
            f.isString(i) && u.push("path=" + i),
            f.isString(o) && u.push("domain=" + o),
            a === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read: function (n) {
          const s = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return s ? decodeURIComponent(s[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function Tf(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function wf(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ci(e, t) {
  return e && !Tf(t) ? wf(e, t) : t;
}
const Of = J.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let s;
      function r(i) {
        let o = i;
        return (
          t && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (s = r(window.location.href)),
        function (o) {
          const a = f.isString(o) ? r(o) : o;
          return a.protocol === s.protocol && a.host === s.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Sf(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Cf(e, t) {
  e = e || 10;
  const n = new Array(e),
    s = new Array(e);
  let r = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const c = Date.now(),
        l = s[i];
      o || (o = c), (n[r] = u), (s[r] = c);
      let h = i,
        g = 0;
      for (; h !== r; ) (g += n[h++]), (h = h % e);
      if (((r = (r + 1) % e), r === i && (i = (i + 1) % e), c - o < t)) return;
      const m = l && c - l;
      return m ? Math.round((g * 1e3) / m) : void 0;
    }
  );
}
function Ws(e, t) {
  let n = 0;
  const s = Cf(50, 250);
  return (r) => {
    const i = r.loaded,
      o = r.lengthComputable ? r.total : void 0,
      a = i - n,
      u = s(a),
      c = i <= o;
    n = i;
    const l = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && o && c ? (o - i) / u : void 0,
      event: r,
    };
    (l[t ? "download" : "upload"] = !0), e(l);
  };
}
const Nf = typeof XMLHttpRequest < "u",
  Df =
    Nf &&
    function (e) {
      return new Promise(function (n, s) {
        let r = e.data;
        const i = W.from(e.headers).normalize(),
          o = e.responseType;
        let a;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        f.isFormData(r) &&
          (J.isStandardBrowserEnv || J.isStandardBrowserWebWorkerEnv
            ? i.setContentType(!1)
            : i.setContentType("multipart/form-data;", !1));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const m = e.auth.username || "",
            p = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(m + ":" + p));
        }
        const l = ci(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), ri(l, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function h() {
          if (!c) return;
          const m = W.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            _ = {
              data:
                !o || o === "text" || o === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: m,
              config: e,
              request: c,
            };
          yf(
            function (y) {
              n(y), u();
            },
            function (y) {
              s(y), u();
            },
            _
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = h)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(h);
              }),
          (c.onabort = function () {
            c &&
              (s(new A("Request aborted", A.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            s(new A("Network Error", A.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let p = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const _ = e.transitional || ii;
            e.timeoutErrorMessage && (p = e.timeoutErrorMessage),
              s(
                new A(
                  p,
                  _.clarifyTimeoutError ? A.ETIMEDOUT : A.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          J.isStandardBrowserEnv)
        ) {
          const m =
            (e.withCredentials || Of(l)) &&
            e.xsrfCookieName &&
            Af.read(e.xsrfCookieName);
          m && i.set(e.xsrfHeaderName, m);
        }
        r === void 0 && i.setContentType(null),
          "setRequestHeader" in c &&
            f.forEach(i.toJSON(), function (p, _) {
              c.setRequestHeader(_, p);
            }),
          f.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          o && o !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", Ws(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Ws(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (m) => {
              c &&
                (s(!m || m.type ? new he(null, e, c) : m),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const g = Sf(l);
        if (g && J.protocols.indexOf(g) === -1) {
          s(new A("Unsupported protocol " + g + ":", A.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(r || null);
      });
    },
  $e = { http: tf, xhr: Df };
f.forEach($e, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Lf = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    for (
      let r = 0;
      r < t && ((n = e[r]), !(s = f.isString(n) ? $e[n.toLowerCase()] : n));
      r++
    );
    if (!s)
      throw s === !1
        ? new A(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            f.hasOwnProp($e, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!f.isFunction(s)) throw new TypeError("adapter is not a function");
    return s;
  },
  adapters: $e,
};
function pn(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new he(null, e);
}
function Us(e) {
  return (
    pn(e),
    (e.headers = W.from(e.headers)),
    (e.data = hn.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Lf.getAdapter(e.adapter || Gt.adapter)(e).then(
      function (s) {
        return (
          pn(e),
          (s.data = hn.call(e, e.transformResponse, s)),
          (s.headers = W.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          ai(s) ||
            (pn(e),
            s &&
              s.response &&
              ((s.response.data = hn.call(e, e.transformResponse, s.response)),
              (s.response.headers = W.from(s.response.headers)))),
          Promise.reject(s)
        );
      }
    )
  );
}
const Ks = (e) => (e instanceof W ? e.toJSON() : e);
function Wt(e, t) {
  t = t || {};
  const n = {};
  function s(c, l, h) {
    return f.isPlainObject(c) && f.isPlainObject(l)
      ? f.merge.call({ caseless: h }, c, l)
      : f.isPlainObject(l)
      ? f.merge({}, l)
      : f.isArray(l)
      ? l.slice()
      : l;
  }
  function r(c, l, h) {
    if (f.isUndefined(l)) {
      if (!f.isUndefined(c)) return s(void 0, c, h);
    } else return s(c, l, h);
  }
  function i(c, l) {
    if (!f.isUndefined(l)) return s(void 0, l);
  }
  function o(c, l) {
    if (f.isUndefined(l)) {
      if (!f.isUndefined(c)) return s(void 0, c);
    } else return s(void 0, l);
  }
  function a(c, l, h) {
    if (h in t) return s(c, l);
    if (h in e) return s(void 0, c);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, l) => r(Ks(c), Ks(l), !0),
  };
  return (
    f.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
      const h = u[l] || r,
        g = h(e[l], t[l], l);
      (f.isUndefined(g) && h !== a) || (n[l] = g);
    }),
    n
  );
}
const li = "1.4.0",
  Kn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Kn[e] = function (s) {
      return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Ys = {};
Kn.transitional = function (t, n, s) {
  function r(i, o) {
    return (
      "[Axios v" +
      li +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (s ? ". " + s : "")
    );
  }
  return (i, o, a) => {
    if (t === !1)
      throw new A(
        r(o, " has been removed" + (n ? " in " + n : "")),
        A.ERR_DEPRECATED
      );
    return (
      n &&
        !Ys[o] &&
        ((Ys[o] = !0),
        console.warn(
          r(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, a) : !0
    );
  };
};
function $f(e, t, n) {
  if (typeof e != "object")
    throw new A("options must be an object", A.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const i = s[r],
      o = t[i];
    if (o) {
      const a = e[i],
        u = a === void 0 || o(a, i, e);
      if (u !== !0)
        throw new A("option " + i + " must be " + u, A.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new A("Unknown option " + i, A.ERR_BAD_OPTION);
  }
}
const wn = { assertOptions: $f, validators: Kn },
  ct = wn.validators;
let At = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Bs(), response: new Bs() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Wt(this.defaults, n));
    const { transitional: s, paramsSerializer: r, headers: i } = n;
    s !== void 0 &&
      wn.assertOptions(
        s,
        {
          silentJSONParsing: ct.transitional(ct.boolean),
          forcedJSONParsing: ct.transitional(ct.boolean),
          clarifyTimeoutError: ct.transitional(ct.boolean),
        },
        !1
      ),
      r != null &&
        (f.isFunction(r)
          ? (n.paramsSerializer = { serialize: r })
          : wn.assertOptions(
              r,
              { encode: ct.function, serialize: ct.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o;
    (o = i && f.merge(i.common, i[n.method])),
      o &&
        f.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (p) => {
            delete i[p];
          }
        ),
      (n.headers = W.concat(o, i));
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function (_) {
      (typeof _.runWhen == "function" && _.runWhen(n) === !1) ||
        ((u = u && _.synchronous), a.unshift(_.fulfilled, _.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (_) {
      c.push(_.fulfilled, _.rejected);
    });
    let l,
      h = 0,
      g;
    if (!u) {
      const p = [Us.bind(this), void 0];
      for (
        p.unshift.apply(p, a),
          p.push.apply(p, c),
          g = p.length,
          l = Promise.resolve(n);
        h < g;

      )
        l = l.then(p[h++], p[h++]);
      return l;
    }
    g = a.length;
    let m = n;
    for (h = 0; h < g; ) {
      const p = a[h++],
        _ = a[h++];
      try {
        m = p(m);
      } catch (b) {
        _.call(this, b);
        break;
      }
    }
    try {
      l = Us.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, g = c.length; h < g; ) l = l.then(c[h++], c[h++]);
    return l;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const n = ci(t.baseURL, t.url);
    return ri(n, t.params, t.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function (t) {
  At.prototype[t] = function (n, s) {
    return this.request(
      Wt(s || {}, { method: t, url: n, data: (s || {}).data })
    );
  };
});
f.forEach(["post", "put", "patch"], function (t) {
  function n(s) {
    return function (i, o, a) {
      return this.request(
        Wt(a || {}, {
          method: t,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (At.prototype[t] = n()), (At.prototype[t + "Form"] = n(!0));
});
let Rf = class ui {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let i = s._listeners.length;
      for (; i-- > 0; ) s._listeners[i](r);
      s._listeners = null;
    }),
      (this.promise.then = (r) => {
        let i;
        const o = new Promise((a) => {
          s.subscribe(a), (i = a);
        }).then(r);
        return (
          (o.cancel = function () {
            s.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, a) {
        s.reason || ((s.reason = new he(i, o, a)), n(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ui(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
};
function If(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Pf(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const On = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(On).forEach(([e, t]) => {
  On[t] = e;
});
function fi(e) {
  const t = new At(e),
    n = Yr(At.prototype.request, t);
  return (
    f.extend(n, At.prototype, t, { allOwnKeys: !0 }),
    f.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return fi(Wt(e, r));
    }),
    n
  );
}
const N = fi(Gt);
N.Axios = At;
N.CanceledError = he;
N.CancelToken = Rf;
N.isCancel = ai;
N.VERSION = li;
N.toFormData = Ue;
N.AxiosError = A;
N.Cancel = N.CanceledError;
N.all = function (t) {
  return Promise.all(t);
};
N.spread = If;
N.isAxiosError = Pf;
N.mergeConfig = Wt;
N.AxiosHeaders = W;
N.formToJSON = (e) => oi(f.isHTMLForm(e) ? new FormData(e) : e);
N.HttpStatusCode = On;
N.default = N;
const {
  Axios: Vf,
  AxiosError: Hf,
  CanceledError: Ff,
  isCancel: Bf,
  CancelToken: jf,
  VERSION: Wf,
  all: Uf,
  Cancel: Kf,
  isAxiosError: Yf,
  spread: zf,
  toFormData: qf,
  AxiosHeaders: Gf,
  HttpStatusCode: Xf,
  formToJSON: Jf,
  mergeConfig: Qf,
} = N;
window.axios = N;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
export { xf as b };
