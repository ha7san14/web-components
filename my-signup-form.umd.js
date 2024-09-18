(function (f, l) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = l())
    : typeof define == "function" && define.amd
    ? define(l)
    : ((f = typeof globalThis < "u" ? globalThis : f || self),
      (f.MyComponent = l()));
})(this, function () {
  "use strict";
  var $t = Object.defineProperty;
  var ft = (f, l, p) =>
    l in f
      ? $t(f, l, { enumerable: !0, configurable: !0, writable: !0, value: p })
      : (f[l] = p);
  var a = (f, l, p) => ft(f, typeof l != "symbol" ? l + "" : l, p);
  function f() {}
  function l(e) {
    return e();
  }
  function p() {
    return Object.create(null);
  }
  function S(e) {
    e.forEach(l);
  }
  function T(e) {
    return typeof e == "function";
  }
  function V(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && typeof e == "object") || typeof e == "function";
  }
  function D(e) {
    return Object.keys(e).length === 0;
  }
  function k(e, t) {
    e.appendChild(t);
  }
  function L(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function E(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function b(e) {
    return document.createElement(e);
  }
  function F(e) {
    return document.createTextNode(e);
  }
  function N() {
    return F(" ");
  }
  function q(e, t, n, s) {
    return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
  }
  function C(e, t, n) {
    n == null
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function g(e, t, n) {
    const s = t.toLowerCase();
    s in e
      ? (e[s] = typeof e[s] == "boolean" && n === "" ? !0 : n)
      : t in e
      ? (e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n)
      : C(e, t, n);
  }
  function z(e) {
    return Array.from(e.childNodes);
  }
  function G(e) {
    const t = {};
    return (
      e.childNodes.forEach((n) => {
        t[n.slot || "default"] = !0;
      }),
      t
    );
  }
  let I;
  function j(e) {
    I = e;
  }
  const y = [],
    v = [];
  let w = [];
  const U = [],
    K = Promise.resolve();
  let P = !1;
  function Q() {
    P || ((P = !0), K.then(H));
  }
  function B(e) {
    w.push(e);
  }
  const M = new Set();
  let x = 0;
  function H() {
    if (x !== 0) return;
    const e = I;
    do {
      try {
        for (; x < y.length; ) {
          const t = y[x];
          x++, j(t), W(t.$$);
        }
      } catch (t) {
        throw ((y.length = 0), (x = 0), t);
      }
      for (j(null), y.length = 0, x = 0; v.length; ) v.pop()();
      for (let t = 0; t < w.length; t += 1) {
        const n = w[t];
        M.has(n) || (M.add(n), n());
      }
      w.length = 0;
    } while (y.length);
    for (; U.length; ) U.pop()();
    (P = !1), M.clear(), j(e);
  }
  function W(e) {
    if (e.fragment !== null) {
      e.update(), S(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(B);
    }
  }
  function X(e) {
    const t = [],
      n = [];
    w.forEach((s) => (e.indexOf(s) === -1 ? t.push(s) : n.push(s))),
      n.forEach((s) => s()),
      (w = t);
  }
  const Y = new Set();
  function Z(e, t) {
    e && e.i && (Y.delete(e), e.i(t));
  }
  function tt(e, t, n) {
    const { fragment: s, after_update: r } = e.$$;
    s && s.m(t, n),
      B(() => {
        const i = e.$$.on_mount.map(l).filter(T);
        e.$$.on_destroy ? e.$$.on_destroy.push(...i) : S(i),
          (e.$$.on_mount = []);
      }),
      r.forEach(B);
  }
  function et(e, t) {
    const n = e.$$;
    n.fragment !== null &&
      (X(n.after_update),
      S(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function nt(e, t) {
    e.$$.dirty[0] === -1 && (y.push(e), Q(), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function st(e, t, n, s, r, i, o = null, $ = [-1]) {
    const c = I;
    j(e);
    const u = (e.$$ = {
      fragment: null,
      ctx: [],
      props: i,
      update: f,
      not_equal: r,
      bound: p(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (c ? c.$$.context : [])),
      callbacks: p(),
      dirty: $,
      skip_bound: !1,
      root: t.target || c.$$.root,
    });
    o && o(u.root);
    let _ = !1;
    if (
      ((u.ctx = n
        ? n(e, t.props || {}, (d, O, ...h) => {
            const m = h.length ? h[0] : O;
            return (
              u.ctx &&
                r(u.ctx[d], (u.ctx[d] = m)) &&
                (!u.skip_bound && u.bound[d] && u.bound[d](m), _ && nt(e, d)),
              O
            );
          })
        : []),
      u.update(),
      (_ = !0),
      S(u.before_update),
      (u.fragment = s ? s(u.ctx) : !1),
      t.target)
    ) {
      if (t.hydrate) {
        const d = z(t.target);
        u.fragment && u.fragment.l(d), d.forEach(E);
      } else u.fragment && u.fragment.c();
      t.intro && Z(e.$$.fragment), tt(e, t.target, t.anchor), H();
    }
    j(c);
  }
  let J;
  typeof HTMLElement == "function" &&
    (J = class extends HTMLElement {
      constructor(t, n, s) {
        super();
        a(this, "$$ctor");
        a(this, "$$s");
        a(this, "$$c");
        a(this, "$$cn", !1);
        a(this, "$$d", {});
        a(this, "$$r", !1);
        a(this, "$$p_d", {});
        a(this, "$$l", {});
        a(this, "$$l_u", new Map());
        (this.$$ctor = t),
          (this.$$s = n),
          s && this.attachShadow({ mode: "open" });
      }
      addEventListener(t, n, s) {
        if (
          ((this.$$l[t] = this.$$l[t] || []), this.$$l[t].push(n), this.$$c)
        ) {
          const r = this.$$c.$on(t, n);
          this.$$l_u.set(n, r);
        }
        super.addEventListener(t, n, s);
      }
      removeEventListener(t, n, s) {
        if ((super.removeEventListener(t, n, s), this.$$c)) {
          const r = this.$$l_u.get(n);
          r && (r(), this.$$l_u.delete(n));
        }
      }
      async connectedCallback() {
        if (((this.$$cn = !0), !this.$$c)) {
          let t = function (i) {
            return () => {
              let o;
              return {
                c: function () {
                  (o = b("slot")), i !== "default" && C(o, "name", i);
                },
                m: function (u, _) {
                  L(u, o, _);
                },
                d: function (u) {
                  u && E(o);
                },
              };
            };
          };
          if ((await Promise.resolve(), !this.$$cn || this.$$c)) return;
          const n = {},
            s = G(this);
          for (const i of this.$$s) i in s && (n[i] = [t(i)]);
          for (const i of this.attributes) {
            const o = this.$$g_p(i.name);
            o in this.$$d ||
              (this.$$d[o] = A(o, i.value, this.$$p_d, "toProp"));
          }
          for (const i in this.$$p_d)
            !(i in this.$$d) &&
              this[i] !== void 0 &&
              ((this.$$d[i] = this[i]), delete this[i]);
          this.$$c = new this.$$ctor({
            target: this.shadowRoot || this,
            props: { ...this.$$d, $$slots: n, $$scope: { ctx: [] } },
          });
          const r = () => {
            this.$$r = !0;
            for (const i in this.$$p_d)
              if (
                ((this.$$d[i] = this.$$c.$$.ctx[this.$$c.$$.props[i]]),
                this.$$p_d[i].reflect)
              ) {
                const o = A(i, this.$$d[i], this.$$p_d, "toAttribute");
                o == null
                  ? this.removeAttribute(this.$$p_d[i].attribute || i)
                  : this.setAttribute(this.$$p_d[i].attribute || i, o);
              }
            this.$$r = !1;
          };
          this.$$c.$$.after_update.push(r), r();
          for (const i in this.$$l)
            for (const o of this.$$l[i]) {
              const $ = this.$$c.$on(i, o);
              this.$$l_u.set(o, $);
            }
          this.$$l = {};
        }
      }
      attributeChangedCallback(t, n, s) {
        var r;
        this.$$r ||
          ((t = this.$$g_p(t)),
          (this.$$d[t] = A(t, s, this.$$p_d, "toProp")),
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
  function A(e, t, n, s) {
    var i;
    const r = (i = n[e]) == null ? void 0 : i.type;
    if (
      ((t = r === "Boolean" && typeof t != "boolean" ? t != null : t),
      !s || !n[e])
    )
      return t;
    if (s === "toAttribute")
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
  function it(e, t, n, s, r, i) {
    let o = class extends J {
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
          set(c) {
            var u;
            (c = A($, c, t)),
              (this.$$d[$] = c),
              (u = this.$$c) == null || u.$set({ [$]: c });
          },
        });
      }),
      s.forEach(($) => {
        Object.defineProperty(o.prototype, $, {
          get() {
            var c;
            return (c = this.$$c) == null ? void 0 : c[$];
          },
        });
      }),
      (e.element = o),
      o
    );
  }
  class rt {
    constructor() {
      a(this, "$$");
      a(this, "$$set");
    }
    $destroy() {
      et(this, 1), (this.$destroy = f);
    }
    $on(t, n) {
      if (!T(n)) return f;
      const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        s.push(n),
        () => {
          const r = s.indexOf(n);
          r !== -1 && s.splice(r, 1);
        }
      );
    }
    $set(t) {
      this.$$set &&
        !D(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  const ot = "4";
  typeof window < "u" &&
    (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ot);
  function ct(e) {
    let t, n, s, r, i, o, $, c, u, _, d, O;
    return {
      c() {
        (t = b("link")),
          (n = N()),
          (s = b("form")),
          (r = b("my-username-field")),
          (o = N()),
          ($ = b("my-password-field")),
          (u = N()),
          (_ = b("my-button")),
          C(
            t,
            "href",
            "https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"
          ),
          C(t, "rel", "stylesheet"),
          g(r, "onInputChange", (i = e[3])),
          g($, "onInputChange", (c = e[4])),
          g(_, "label", "Sign Up"),
          g(_, "onClick", e[2]),
          C(
            s,
            "class",
            "flex flex-col gap-4 max-w-sm my-2 mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white"
          );
      },
      m(h, m) {
        L(h, t, m),
          L(h, n, m),
          L(h, s, m),
          k(s, r),
          k(s, o),
          k(s, $),
          k(s, u),
          k(s, _),
          d || ((O = q(s, "submit", e[2])), (d = !0));
      },
      p(h, [m]) {
        m & 1 && i !== (i = h[3]) && g(r, "onInputChange", i),
          m & 2 && c !== (c = h[4]) && g($, "onInputChange", c);
      },
      i: f,
      o: f,
      d(h) {
        h && (E(t), E(n), E(s)), (d = !1), O();
      },
    };
  }
  function ut(e, t, n) {
    let s = "",
      r = "";
    function i(c) {
      c.preventDefault(),
        console.log("Submitting:", { username: s, password: r });
    }
    return [s, r, i, (c) => n(0, (s = c)), (c) => n(1, (r = c))];
  }
  class R extends rt {
    constructor(t) {
      super(), st(this, t, ut, ct, V, {});
    }
  }
  return customElements.define("my-signup-form", it(R, {}, [], [], !0)), R;
});
