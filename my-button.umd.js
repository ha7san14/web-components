(function (u, f) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = f())
    : typeof define == "function" && define.amd
    ? define(f)
    : ((u = typeof globalThis < "u" ? globalThis : u || self),
      (u.MyComponent = f()));
})(this, function () {
  "use strict";
  var $t = Object.defineProperty;
  var ut = (u, f, a) =>
    f in u
      ? $t(u, f, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (u[f] = a);
  var d = (u, f, a) => ut(u, typeof f != "symbol" ? f + "" : f, a);
  function u() {}
  function f(e) {
    return e();
  }
  function a() {
    return Object.create(null);
  }
  function x(e) {
    e.forEach(f);
  }
  function L(e) {
    return typeof e == "function";
  }
  function J(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && typeof e == "object") || typeof e == "function";
  }
  function R(e) {
    return Object.keys(e).length === 0;
  }
  function V(e, t) {
    e.appendChild(t);
  }
  function w(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function p(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function j(e) {
    return document.createElement(e);
  }
  function P(e) {
    return document.createTextNode(e);
  }
  function q() {
    return P(" ");
  }
  function g(e, t, n) {
    n == null
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function z(e) {
    return Array.from(e.childNodes);
  }
  function D(e, t) {
    (t = "" + t), e.data !== t && (e.data = t);
  }
  function F(e) {
    const t = {};
    return (
      e.childNodes.forEach((n) => {
        t[n.slot || "default"] = !0;
      }),
      t
    );
  }
  let O;
  function y(e) {
    O = e;
  }
  const _ = [],
    B = [];
  let b = [];
  const v = [],
    G = Promise.resolve();
  let A = !1;
  function K() {
    A || ((A = !0), G.then(N));
  }
  function C(e) {
    b.push(e);
  }
  const S = new Set();
  let m = 0;
  function N() {
    if (m !== 0) return;
    const e = O;
    do {
      try {
        for (; m < _.length; ) {
          const t = _[m];
          m++, y(t), Q(t.$$);
        }
      } catch (t) {
        throw ((_.length = 0), (m = 0), t);
      }
      for (y(null), _.length = 0, m = 0; B.length; ) B.pop()();
      for (let t = 0; t < b.length; t += 1) {
        const n = b[t];
        S.has(n) || (S.add(n), n());
      }
      b.length = 0;
    } while (_.length);
    for (; v.length; ) v.pop()();
    (A = !1), S.clear(), y(e);
  }
  function Q(e) {
    if (e.fragment !== null) {
      e.update(), x(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(C);
    }
  }
  function W(e) {
    const t = [],
      n = [];
    b.forEach((i) => (e.indexOf(i) === -1 ? t.push(i) : n.push(i))),
      n.forEach((i) => i()),
      (b = t);
  }
  const X = new Set();
  function Y(e, t) {
    e && e.i && (X.delete(e), e.i(t));
  }
  function Z(e, t, n) {
    const { fragment: i, after_update: r } = e.$$;
    i && i.m(t, n),
      C(() => {
        const s = e.$$.on_mount.map(f).filter(L);
        e.$$.on_destroy ? e.$$.on_destroy.push(...s) : x(s),
          (e.$$.on_mount = []);
      }),
      r.forEach(C);
  }
  function tt(e, t) {
    const n = e.$$;
    n.fragment !== null &&
      (W(n.after_update),
      x(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function et(e, t) {
    e.$$.dirty[0] === -1 && (_.push(e), K(), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function nt(e, t, n, i, r, s, o = null, $ = [-1]) {
    const l = O;
    y(e);
    const c = (e.$$ = {
      fragment: null,
      ctx: [],
      props: s,
      update: u,
      not_equal: r,
      bound: a(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (l ? l.$$.context : [])),
      callbacks: a(),
      dirty: $,
      skip_bound: !1,
      root: t.target || l.$$.root,
    });
    o && o(c.root);
    let E = !1;
    if (
      ((c.ctx = n
        ? n(e, t.props || {}, (h, U, ...H) => {
            const I = H.length ? H[0] : U;
            return (
              c.ctx &&
                r(c.ctx[h], (c.ctx[h] = I)) &&
                (!c.skip_bound && c.bound[h] && c.bound[h](I), E && et(e, h)),
              U
            );
          })
        : []),
      c.update(),
      (E = !0),
      x(c.before_update),
      (c.fragment = i ? i(c.ctx) : !1),
      t.target)
    ) {
      if (t.hydrate) {
        const h = z(t.target);
        c.fragment && c.fragment.l(h), h.forEach(p);
      } else c.fragment && c.fragment.c();
      t.intro && Y(e.$$.fragment), Z(e, t.target, t.anchor), N();
    }
    y(l);
  }
  let M;
  typeof HTMLElement == "function" &&
    (M = class extends HTMLElement {
      constructor(t, n, i) {
        super();
        d(this, "$$ctor");
        d(this, "$$s");
        d(this, "$$c");
        d(this, "$$cn", !1);
        d(this, "$$d", {});
        d(this, "$$r", !1);
        d(this, "$$p_d", {});
        d(this, "$$l", {});
        d(this, "$$l_u", new Map());
        (this.$$ctor = t),
          (this.$$s = n),
          i && this.attachShadow({ mode: "open" });
      }
      addEventListener(t, n, i) {
        if (
          ((this.$$l[t] = this.$$l[t] || []), this.$$l[t].push(n), this.$$c)
        ) {
          const r = this.$$c.$on(t, n);
          this.$$l_u.set(n, r);
        }
        super.addEventListener(t, n, i);
      }
      removeEventListener(t, n, i) {
        if ((super.removeEventListener(t, n, i), this.$$c)) {
          const r = this.$$l_u.get(n);
          r && (r(), this.$$l_u.delete(n));
        }
      }
      async connectedCallback() {
        if (((this.$$cn = !0), !this.$$c)) {
          let t = function (s) {
            return () => {
              let o;
              return {
                c: function () {
                  (o = j("slot")), s !== "default" && g(o, "name", s);
                },
                m: function (c, E) {
                  w(c, o, E);
                },
                d: function (c) {
                  c && p(o);
                },
              };
            };
          };
          if ((await Promise.resolve(), !this.$$cn || this.$$c)) return;
          const n = {},
            i = F(this);
          for (const s of this.$$s) s in i && (n[s] = [t(s)]);
          for (const s of this.attributes) {
            const o = this.$$g_p(s.name);
            o in this.$$d ||
              (this.$$d[o] = k(o, s.value, this.$$p_d, "toProp"));
          }
          for (const s in this.$$p_d)
            !(s in this.$$d) &&
              this[s] !== void 0 &&
              ((this.$$d[s] = this[s]), delete this[s]);
          this.$$c = new this.$$ctor({
            target: this.shadowRoot || this,
            props: { ...this.$$d, $$slots: n, $$scope: { ctx: [] } },
          });
          const r = () => {
            this.$$r = !0;
            for (const s in this.$$p_d)
              if (
                ((this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]]),
                this.$$p_d[s].reflect)
              ) {
                const o = k(s, this.$$d[s], this.$$p_d, "toAttribute");
                o == null
                  ? this.removeAttribute(this.$$p_d[s].attribute || s)
                  : this.setAttribute(this.$$p_d[s].attribute || s, o);
              }
            this.$$r = !1;
          };
          this.$$c.$$.after_update.push(r), r();
          for (const s in this.$$l)
            for (const o of this.$$l[s]) {
              const $ = this.$$c.$on(s, o);
              this.$$l_u.set(o, $);
            }
          this.$$l = {};
        }
      }
      attributeChangedCallback(t, n, i) {
        var r;
        this.$$r ||
          ((t = this.$$g_p(t)),
          (this.$$d[t] = k(t, i, this.$$p_d, "toProp")),
          (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
      }
      disconnectedCallback() {
        (this.$$cn = !1),
          Promise.resolve().then(() => {
            !this.$$cn &&
              this.$$c &&
              (this.$$c.$destroy(), (this.$$c = void 0));
          });
      }
      $$g_p(t) {
        return (
          Object.keys(this.$$p_d).find(
            (n) =>
              this.$$p_d[n].attribute === t ||
              (!this.$$p_d[n].attribute && n.toLowerCase() === t)
          ) || t
        );
      }
    });
  function k(e, t, n, i) {
    var s;
    const r = (s = n[e]) == null ? void 0 : s.type;
    if (
      ((t = r === "Boolean" && typeof t != "boolean" ? t != null : t),
      !i || !n[e])
    )
      return t;
    if (i === "toAttribute")
      switch (r) {
        case "Object":
        case "Array":
          return t == null ? null : JSON.stringify(t);
        case "Boolean":
          return t ? "" : null;
        case "Number":
          return t ?? null;
        default:
          return t;
      }
    else
      switch (r) {
        case "Object":
        case "Array":
          return t && JSON.parse(t);
        case "Boolean":
          return t;
        case "Number":
          return t != null ? +t : t;
        default:
          return t;
      }
  }
  function st(e, t, n, i, r, s) {
    let o = class extends M {
      constructor() {
        super(e, n, r), (this.$$p_d = t);
      }
      static get observedAttributes() {
        return Object.keys(t).map(($) => (t[$].attribute || $).toLowerCase());
      }
    };
    return (
      Object.keys(t).forEach(($) => {
        Object.defineProperty(o.prototype, $, {
          get() {
            return this.$$c && $ in this.$$c ? this.$$c[$] : this.$$d[$];
          },
          set(l) {
            var c;
            (l = k($, l, t)),
              (this.$$d[$] = l),
              (c = this.$$c) == null || c.$set({ [$]: l });
          },
        });
      }),
      i.forEach(($) => {
        Object.defineProperty(o.prototype, $, {
          get() {
            var l;
            return (l = this.$$c) == null ? void 0 : l[$];
          },
        });
      }),
      (e.element = o),
      o
    );
  }
  class it {
    constructor() {
      d(this, "$$");
      d(this, "$$set");
    }
    $destroy() {
      tt(this, 1), (this.$destroy = u);
    }
    $on(t, n) {
      if (!L(n)) return u;
      const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        i.push(n),
        () => {
          const r = i.indexOf(n);
          r !== -1 && i.splice(r, 1);
        }
      );
    }
    $set(t) {
      this.$$set &&
        !R(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  const rt = "4";
  typeof window < "u" &&
    (window.__svelte || (window.__svelte = { v: new Set() })).v.add(rt);
  function ot(e) {
    let t, n, i, r;
    return {
      c() {
        (t = j("link")),
          (n = q()),
          (i = j("button")),
          (r = P(e[0])),
          g(
            t,
            "href",
            "https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"
          ),
          g(t, "rel", "stylesheet"),
          g(i, "type", "submit"),
          g(
            i,
            "class",
            "bg-blue-500 text-white font-bold mx-2 my-2 py-2 px-4 rounded hover:bg-blue-700"
          );
      },
      m(s, o) {
        w(s, t, o), w(s, n, o), w(s, i, o), V(i, r);
      },
      p(s, [o]) {
        o & 1 && D(r, s[0]);
      },
      i: u,
      o: u,
      d(s) {
        s && (p(t), p(n), p(i));
      },
    };
  }
  function ct(e, t, n) {
    let { label: i = "Sign Up" } = t;
    return (
      (e.$$set = (r) => {
        "label" in r && n(0, (i = r.label));
      }),
      [i]
    );
  }
  class T extends it {
    constructor(t) {
      super(), nt(this, t, ct, ot, J, { label: 0 });
    }
    get label() {
      return this.$$.ctx[0];
    }
    set label(t) {
      this.$$set({ label: t }), N();
    }
  }
  return (
    customElements.define("my-button", st(T, { label: {} }, [], [], !0)), T
  );
});
