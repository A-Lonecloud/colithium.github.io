!(function (e, t, a) {
  function r() {
    for (var e = 0; e < s.length; e++)
      s[e].alpha <= 0
        ? (t.body.removeChild(s[e].el), s.splice(e, 1))
        : (s[e].y--,
          (s[e].scale += 0.004),
          (s[e].alpha -= 0.013),
          (s[e].el.style.cssText =
            "left:" +
            s[e].x +
            "px;top:" +
            s[e].y +
            "px;opacity:" +
            s[e].alpha +
            ";transform:scale(" +
            s[e].scale +
            "," +
            s[e].scale +
            ") rotate(45deg);background:" +
            s[e].color +
            ";z-index:99999"));
    
