!(function r(t, o, e) {
	function n(i, s) {
		if (!o[i]) {
			if (!t[i]) {
				var c = 'function' == typeof require && require;
				if (!s && c) return c(i, !0);
				if (a) return a(i, !0);
				var l = new Error("Cannot find module '" + i + "'");
				throw ((l.code = 'MODULE_NOT_FOUND'), l);
			}
			var h = (o[i] = {exports: {}});
			t[i][0].call(
				h.exports,
				function (r) {
					var o = t[i][1][r];
					return n(o ? o : r);
				},
				h,
				h.exports,
				r,
				t,
				o,
				e
			);
		}
		return o[i].exports;
	}
	for (var a = 'function' == typeof require && require, i = 0; i < e.length; i++) n(e[i]);
	return n;
})(
	{
		1: [
			function (r, t, o) {
				function e(r) {
					return r * r;
				}
				function n(r) {
					return (r * Math.PI) / 180;
				}
				function a(r) {
					return 'number' == typeof r ? (r ? (0 > r ? -1 : 1) : r === r ? 0 : NaN) : NaN;
				}
				function i(r, t, o, e, n) {
					if (('undefined' == typeof e && (e = 1), n)) {
						var t = 0.3 * (r || 0) + 0.59 * (t || 0) + 0.11 * (o || 0);
						(this.r = t), (this.g = t), (this.b = t), (this.a = e);
					} else (this.r = r || 0), (this.g = t || 0), (this.b = o || 0), (this.a = e);
				}
				function s(r, t, o) {
					var e = 'undefined' != typeof o ? o : '0',
						n = new Array(1 + t).join(e);
					return (n + r).slice(-n.length);
				}
				function c(r, t, o, e, n) {
					return new i(r, t, o, e, n);
				}
				function l(r, t) {
					return c(r.r, r.g, r.b, r.a, !t);
				}
				function h(r, t, o) {
					return c(
						r.r * o + (1 - o) * t.r,
						r.g * o + (1 - o) * t.g,
						r.b * o + (1 - o) * t.b,
						r.a * o + (1 - o) * t.a
					);
				}
				var u = r('./matrices.js'),
					f = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
				f &&
					f.lineTo &&
					(f.dashedLine = function (r, t, o, e, n) {
						n || (n = [10, 5]), this.moveTo(r, t);
						var i = o - r,
							s = e - t;
						0 === i && (i = 1e-15);
						for (var c = s / i, l = Math.sqrt(i * i + s * s), h = 0, u = !0; l >= 0.1; ) {
							var f = Math.min(n[h % n.length], l);
							0 == f && (f = 0.001);
							var g = (a(i) * f) / Math.sqrt(1 + c * c);
							(r += g), (t += c * g), this[u ? 'lineTo' : 'moveTo'](r, t), (l -= f), (u = !u), ++h;
						}
					}),
					(i.prototype.toString = function (r) {
						return 'undefined' == typeof r || 'rgba' === r
							? 'rgba(' +
									this.r.toFixed() +
									',' +
									this.g.toFixed() +
									',' +
									this.b.toFixed() +
									',' +
									this.a +
									')'
							: 'rgb' === r
							? 'rgb(' + this.r.toFixed() + ',' + this.g.toFixed() + ',' + this.b.toFixed() + ')'
							: 'hex' === r
							? '#' +
							  s(Math.round(this.r).toString(16), 2) +
							  s(Math.round(this.g).toString(16), 2) +
							  s(Math.round(this.b).toString(16), 2)
							: '';
					}),
					$(document).ready(function () {
						function r(r) {
							return {x: r.get(0, 2), y: r.get(1, 2)};
						}
						function t() {
							T.engineOn &&
								((T.engineOn = !1),
								F.fueling
									? ($('#fuelTitle').html('Engine Off'), $('#fuelBar').css('opacity', 1))
									: ($('#fuelTitle').text('Engine Off'),
									  $('#extraText').text('Enter to start'),
									  $('#fuelBar').css('opacity', 0)),
								(T.gassing = !1),
								(T.breaking = !1),
								(T.fireMain = !1));
						}
						function o() {
							T.engineOn ||
								((T.engineOn = !0), $('#fuelTitle').html('Fuel'), $('#fuelBar').css('opacity', 1));
						}
						function i(r, t, o, e, n) {
							var a = $(r);
							a.text(t),
								a
									.mouseenter(function () {
										a.text('Press ' + o);
									})
									.mouseleave(function () {
										a.text(t), n();
									})
									.mousedown(e)
									.mouseup(n);
						}
						function s(r) {
							(m.fillStyle = l(P.colors[r], T.engineOn)),
								m.beginPath(),
								u.plot(m, P.s[r]),
								m.fill();
						}
						function f(t) {
							if (
								((m.fillStyle = l(x, T.engineOn)),
								m.rect(0, 0, g, d),
								m.fill(),
								!F.fueling &&
									P.fuel > 0 &&
									((P.fuel < 0.1 && P.fuel > 0.05 && P.fuel % 0.02 > 0.01) ||
										(P.fuel < 0.05 && P.fuel % 0.01 > 0.005)))
							) {
								var o = m.createLinearGradient(0, 0, g, 0);
								o.addColorStop(0, '#FF6666'),
									o.addColorStop(0.05, 'transparent'),
									o.addColorStop(0.95, 'transparent'),
									o.addColorStop(1, '#FF6666'),
									(m.fillStyle = o),
									(m.lineWidth = 5),
									m.fillRect(0, 0, g, d);
								var o = m.createLinearGradient(0, 0, 0, d);
								o.addColorStop(0, '#FF6666'),
									o.addColorStop(0.05, 'transparent'),
									o.addColorStop(0.95, 'transparent'),
									o.addColorStop(1, '#FF6666'),
									(m.fillStyle = o),
									(m.lineWidth = 5),
									m.fillRect(0, 0, g, d);
							}
							(m.font = Math.round(v.width() / 80) + 'pt Courier New'),
								(m.fillStyle = l(F.color, T.engineOn)),
								m.fillText('Refuel Here', Math.ceil(F.s.get(0, 0)), Math.ceil(F.s.get(1, 0) - 15)),
								(m.lineWidth = 3),
								(m.fillStyle = F.fueling ? l(F.color, T.engineOn) : c(255, 255, 255)),
								(m.strokeStyle = F.fueling ? 'transparent' : c(255, 255, 255)),
								m.beginPath(),
								u.plot(m, F.s),
								m.fill(),
								m.stroke(),
								(m.strokeStyle = l(F.color, T.engineOn)),
								m.beginPath();
							for (var e = 1; e < F.s.w(); ++e)
								m.dashedLine(
									Math.round(F.s.get(0, e - 1)),
									Math.round(F.s.get(1, e - 1)),
									Math.round(F.s.get(0, e)),
									Math.round(F.s.get(1, e)),
									[4, 4, 3, 4]
								);
							m.stroke();
							for (var e = 0; e < A.arr.length; ++e) {
								var a = A.color;
								(a.a = A.arr[e].opac / 100),
									(m.fillStyle = l(a, T.engineOn)),
									m.beginPath(),
									u.plot(m, A.arr[e].left),
									u.plot(m, A.arr[e].right),
									m.fill();
							}
							q &&
								q.opac &&
								((m.fillStyle = l(q.color(), T.engineOn)), m.beginPath(), u.plot(m, q.s), m.fill());
							for (var e = 0; e < z.arr.length; ++e)
								for (var i = 0; i < z.arr[e].s.length; ++i) {
									var a = z.color[i];
									m.fillStyle = l(a, T.engineOn);
									var h = u.translate(0, z.centerPos);
									m.beginPath(), u.plot(m, u.mult(h, z.arr[e].s[i])), m.fill();
								}
							for (var e = 0; e < P.s.length; ++e) s(e);
							(m.fillStyle = c(15, 15, 15)), m.beginPath();
							var a = r(P.s[0]);
							m.arc(a.x, a.y, P.circRadius, 0, n(360)), m.fill();
							for (var e = 0; e < E.length; ++e)
								for (var i = 0; i < E[e].arr.length; ++i)
									E[e].arr[i].s &&
										((m.fillStyle = l(E[e].arr[i].color, T.engineOn)),
										m.beginPath(),
										u.plot(m, E[e].arr[i].s),
										m.fill());
							if (!F.fueling) {
								m.lineWidth = 2;
								for (var e = 0; e < F.arrow.length; ++e) {
									var a = c(F.color.r, F.color.g, F.color.b, 0.8);
									(m.strokeStyle = l(a, T.engineOn)),
										(m.fillStyle = l(c(255, 255, 255, 0.4), T.engineOn)),
										m.beginPath(),
										u.plot(m, F.arrow[e]),
										m.closePath(),
										m.fill(),
										m.stroke();
								}
							}
						}
						runsPerSec = 60;
						var g,
							d,
							v = $('#map'),
							m = v[0].getContext('2d'),
							x = c(229, 238, 204.99),
							y = function () {
								var r = $('.controls'),
									t = 1.61803,
									o = Math.max(v.parent().innerWidth(), 200 * t),
									e = Math.max(v.parent().innerHeight(), 100);
								(d = (3 * e) / 4 - 6),
									(g = 2 * d * t),
									g > o &&
										((g = o - 6),
										(d = g / (2 * t)),
										$('#bah').text('w: ' + g.toPrecision(3) + ' h: ' + d.toPrecision(3))),
									(v[0].height = d),
									(v[0].width = g),
									r.css({
										height: Math.floor((d + 6) / 3 - 4),
										width: Math.floor(g + 6),
										'font-size': g / 50,
									});
							};
						y();
						var M,
							p = d / 15,
							w = 1.61803398 * p,
							b = 0,
							_ = 0,
							T = {gassing: !1, breaking: !1, fireMain: !1, reloadMain: !1, engineOn: !1},
							S = function () {
								var r = window.localStorage.getItem('bestScore');
								return null !== r ? r : 0;
							},
							O = function (r) {
								return window.localStorage.setItem('bestScore', r);
							};
						try {
							M = S();
						} catch (k) {
							M = 0;
						}
						$('#bestscore').html(M);
						var F = (function () {
								var r = 2 * w,
									t = 1.8 * p,
									o = (9 * g) / 10 - r,
									e = d / 10 + t;
								return {
									s: u.homo_coor(
										u.coor(o, e),
										u.coor(o + r, e),
										u.coor(o + r, e + t),
										u.coor(o, e + t),
										u.coor(o, e + 0 * t)
									),
									arrow: [
										u.homo_coor(
											u.coor(o + (7 * r) / 16, e + (3 * t) / 8),
											u.coor(o + (13 * r) / 16, e + (3 * t) / 8),
											u.coor(o + (13 * r) / 16, e + (5 * t) / 8),
											u.coor(o + (7 * r) / 16, e + (5 * t) / 8)
										),
										u.homo_coor(
											u.coor(o + (4 * r) / 16, e + (4 * t) / 8),
											u.coor(o + (7 * r) / 16, e + (2 * t) / 8),
											u.coor(o + (7 * r) / 16, e + (6 * t) / 8)
										),
									],
									color: c(255, 62, 24, 1),
									fueling: !1,
								};
							})(),
							P = {
								v: {vert: 0, horz: 0},
								s: (function () {
									var r = (g - w) / 2,
										t = (d - p) / 2;
									return [
										u.homo_coor(
											u.coor(r, t),
											u.coor(r + w, t),
											u.coor(r + w / 2, t + p / 2),
											u.coor(r + w, t + p),
											u.coor(r, t + p),
											u.coor(r, t)
										),
										u.homo_coor(
											u.coor(r, t + p / 10),
											u.coor(r + w / 10, t),
											u.coor(r + (9 * w) / 10, t),
											u.coor(r + w, t + p / 10),
											u.coor(r + w, t + (9 * p) / 10),
											u.coor(r + (9 * w) / 10, t + p),
											u.coor(r + w / 10, t + p),
											u.coor(r, t + (9 * p) / 10),
											u.coor(r, t)
										),
										u.homo_coor(
											u.coor(r + (7 * w) / 10, t + p / 10),
											u.coor(r + (9 * w) / 10, t + p / 2),
											u.coor(r + (7 * w) / 10, t + (9 * p) / 10),
											u.coor(r + (5 * w) / 10, t + p / 2),
											u.coor(r + (7 * w) / 10, t + p / 10)
										),
										u.homo_coor(
											u.coor(r + (1 * w) / 10, t + p / 10),
											u.coor(r + (13 * w) / 20, t + p / 10),
											u.coor(r + (5 * w) / 10, t + (4 * p) / 10),
											u.coor(r + (1 * w) / 10, t + p / 10)
										),
										u.homo_coor(
											u.coor(r + (1 * w) / 10, t + (9 * p) / 10),
											u.coor(r + (13 * w) / 20, t + (9 * p) / 10),
											u.coor(r + (5 * w) / 10, t + (6 * p) / 10),
											u.coor(r + (1 * w) / 10, t + (9 * p) / 10)
										),
										u.homo_coor(
											u.coor(r + (1 * w) / 10, t + (2 * p) / 10),
											u.coor(r + (5 * w) / 20, t + (3 * p) / 10),
											u.coor(r + (5 * w) / 20, t + (7 * p) / 10),
											u.coor(r + (1 * w) / 10, t + (8 * p) / 10),
											u.coor(r + (1 * w) / 10, t + (2 * p) / 10)
										),
										u.homo_coor(
											u.coor(r + (2 * w) / 3, t + (2 * p) / 5),
											u.coor(r + (4 * w) / 3, t + (2 * p) / 5),
											u.coor(r + (4 * w) / 3, t + (3 * p) / 5),
											u.coor(r + (2 * w) / 3, t + (3 * p) / 5),
											u.coor(r + (2 * w) / 3, t + (2 * p) / 5)
										),
									];
								})(),
								colors: [
									c(0, 0, 0, 0),
									c(0, 46, 0),
									c(28, 70, 28),
									c(141, 73, 28),
									c(141, 73, 28),
									c(28, 70, 28),
									c(0, 0, 0),
								],
								fuel: 1,
								outputtedFuel: 100,
								circRadius: w / 6,
								recoil: {vert: 0, horz: 0},
							},
							A = (function () {
								for (
									var r = {arr: new Array(15), id: 0, color: c(95, 63, 34)},
										t = function () {
											(this.left = new u.Matrix(0, 0)),
												(this.right = new u.Matrix(0, 0)),
												(this.opac = 0);
										},
										o = 0;
									o < r.arr.length;
									++o
								)
									r.arr[o] = new t();
								return r;
							})(),
							E = (function () {
								var r = function (r) {
									(this.arr = new Array(r)),
										(this.id = 0),
										(this.coolDown = 0),
										(this.reload = 0),
										(this.reloadTime = 2e3),
										(this.coolDownTime = 200),
										(this.nextToShow = 0);
									for (
										var t = function () {
												(this.s = !1),
													(this.v = {vert: 0, horz: 0}),
													(this.color = c(0, 0, 0)),
													(this.impactFrame = 0),
													(this.impactTime = 0);
											},
											o = 0;
										r > o;
										++o
									)
										this.arr[o] = new t();
								};
								return [new r(10)];
							})(),
							z = (function () {
								var r = function (r, t, o) {
									(this.arr = new Array(r)),
										(this.color = [c(0, 0, 0), c(255, 255, 255), c(0, 0, 255), c(255, 0, 0), x]);
									for (
										var a = function (r, t, o, e) {
												this.s = [
													u.homo_coor(
														u.coor(0, t),
														u.coor(r + 2 * o, t),
														u.coor(r + 2 * o, t + e),
														u.coor(0, t + e),
														u.coor(0, t)
													),
													u.homo_coor(
														u.coor(r + o, t + e / 7),
														u.coor(r + 2 * o, t + e / 7),
														u.coor(r + 2 * o, t + (6 * e) / 7),
														u.coor(r + o, t + (6 * e) / 7),
														u.coor(r + o, t + e / 7)
													),
													u.homo_coor(
														u.coor(r + o, t + (2 * e) / 7),
														u.coor(r + 2 * o, t + (2 * e) / 7),
														u.coor(r + 2 * o, t + (5 * e) / 7),
														u.coor(r + o, t + (5 * e) / 7),
														u.coor(r + o, t + (2 * e) / 7)
													),
													u.homo_coor(
														u.coor(r + o, t + (3 * e) / 7),
														u.coor(r + 2 * o, t + (3 * e) / 7),
														u.coor(r + 2 * o, t + (4 * e) / 7),
														u.coor(r + o, t + (4 * e) / 7),
														u.coor(r + o, t + (3 * e) / 7)
													),
												];
											},
											i = (1 * g) / 200,
											s = d / (t + r + t * r),
											l = 0;
										r > l;
										++l
									)
										this.arr[l] = new a(g / 40, t * s + (t + 1) * s * l, i, s);
									(this.distanceAbove = t * s),
										(this.v = 1),
										(this.vMax = this.v),
										(this.centerPos = 0),
										(this.move = function (r) {
											for (var t = 0; r > t; ++t) {
												var o = e(this.vMax / this.distanceAbove) * this.centerPos;
												(this.v -= o), (this.centerPos += z.v);
											}
										}),
										(this.top_bot = function (r) {
											var o = this.centerPos + t * s + (t + 1) * s * r;
											return {top: o, bot: o + s};
										}),
										(this.setMax = function (r) {
											var t = 10;
											lower = 0;
											var o = parseFloat(r);
											if (o >= lower && t >= o) {
												var e = 0.5 - 0.5 * Math.cos((o * n(180)) / t);
												return (
													requestAnimationFrame(function () {
														$('#targetBox').css({
															'background-color': h(c(255, 70, 34), c(25, 138, 25), e),
														}),
															$('#targetMaxText').text((150 * o).toFixed());
													}),
													(this.v *= o / this.vMax),
													(this.vMax = o),
													!0
												);
											}
											return !1;
										}),
										this.setMax(o);
								};
								return new r(3, 2.5, 0.15);
							})(),
							R = function (r, t, o, e, n, a) {
								(this.s = u.homo_coor(
									u.coor_at_angle(r, t, 0, 0, n),
									u.coor_at_angle(r, t, o / 3, (2 * e) / 5, n),
									u.coor_at_angle(r, t, o, e / 2, n),
									u.coor_at_angle(r, t, (2 * o) / 3, e / 4, n),
									u.coor_at_angle(r, t, o, 0, n),
									u.coor_at_angle(r, t, (2 * o) / 3, -e / 4, n),
									u.coor_at_angle(r, t, o, -e / 2, n),
									u.coor_at_angle(r, t, o / 3, (2 * -e) / 5, n),
									u.coor_at_angle(r, t, 0, 0, n)
								)),
									(this.color = function () {
										var r = 10 * (1 - this.opac),
											t = r * Math.exp(1 - r);
										return c(255, 0, 0, t);
									}),
									(this.v = {vert: a.vert, horz: a.horz}),
									(this.opac = 1);
							},
							q = !1,
							C = function (r, t, o) {
								for (var e = $(document.createElement('tr')), n = t - 1; n >= 0; --n) {
									e.append(
										$(document.createElement('td')).append($(document.createElement('div')))
									);
								}
								r.append(e);
							};
						C($('#ammo'), 10, 'ammoInd'),
							$(document)
								.mousemove(function (r) {
									b = r;
								})
								.mouseout(function () {
									b = 0;
								}),
							$(document).keydown(function (r) {
								var e = r.altKey || r.ctrlKey || r.metaKey || r.shiftKey,
									n = {'background-color': 'black', color: 'white'};
								e ||
									(13 === r.which
										? ($('#startEng').css(n), !T.engineOn && P.fuel > 0 ? o() : t())
										: T.engineOn &&
										  (13 === r.which && ($('#startEng').css(n), r.preventDefault()),
										  87 == r.which
												? ($('#gas').css(n), (T.gassing = !0))
												: 83 == r.which
												? ($('#break').css(n), (T.breaking = !0))
												: 32 === r.which
												? ($('#mainFire').css(n), (T.fireMain = !0), r.preventDefault())
												: 81 === r.which
												? ($('#mainReload').css(n), (T.reloadMain = !0))
												: 67 === r.which && $('#changeTargetMax').css(n).click()));
							}),
							o();
						var D = !1;
						$(document).keyup(function (r) {
							var t = r.altKey || r.ctrlKey || r.metaKey || r.shiftKey,
								o = {'background-color': '', color: ''};
							t ||
								(87 === r.which
									? ($('#gas').css(o), (T.gassing = !1))
									: 83 === r.which
									? ($('#break').css(o), (T.breaking = !1))
									: 32 === r.which
									? ($('#mainFire').css(o), (T.fireMain = !1))
									: 81 === r.which && $('#mainReload').css(o),
								13 !== r.which || D || $('#startEng').css(o),
								r.preventDefault());
						});
						var T = {gassing: !1, breaking: !1, fireMain: !1, reloadMain: !1, engineOn: !0};
						i(
							'#gas',
							'GAS',
							"'W'",
							function () {
								T.gassing = T.engineOn;
							},
							function () {
								T.gassing = !1;
							}
						),
							i(
								'#break',
								'BREAK',
								"'S'",
								function () {
									T.breaking = T.engineOn;
								},
								function () {
									T.breaking = !1;
								}
							),
							i(
								'#mainFire',
								'FIRE',
								'space',
								function () {
									T.fireMain = T.engineOn;
								},
								function () {
									T.fireMain = !1;
								}
							),
							i(
								'#mainReload',
								'RELOAD',
								"'Q'",
								function () {
									T.reloadMain = T.engineOn;
								},
								function () {}
							),
							i(
								'#startEng',
								'START/STOP ENGINE',
								"'enter'",
								function () {
									!T.engineOn && P.fuel > 0 ? o() : t();
								},
								function () {}
							),
							i(
								'#changeTargetMax',
								'Change Max Speed',
								"'C'",
								function () {
									z.setMax(prompt('Max speed of targets: (between 0 and 50)', 150 * this.vMax)) ||
										(requestAnimationFrame(function () {
											$('#normalTargetBox').css({display: 'none'}),
												$('#alternativeTargetBox').css({display: 'block'});
										}),
										setTimeout(function () {
											requestAnimationFrame(function () {
												$('#normalTargetBox').css({display: 'block'}),
													$('#alternativeTargetBox').css({display: 'none'});
											});
										}, 1e3)),
										$('#changeTargetMax').css({'background-color': 'transparent', color: 'black'});
								},
								function () {}
							);
						var N = 0,
							B = 0,
							I = !1,
							K = 0,
							j = 0,
							L = 0,
							W = 0,
							G = 0,
							H = (Math.exp(0.005), 0),
							U = 0,
							Q = 0,
							X = 0;
						(m.font = 'bold ' + Math.round(v.width() / 65) + 'pt Courier New'), m.fillText('Move the mouse to start!', 40, 100);
						var Y = function () {
							requestAnimationFrame(Y);
							var t = performance.now(),
								o = t - (Q || t);
							if (((Q = t), b)) {
								H++,
									(function () {
										var r = u.coor(P.s[0].get(0, 0), P.s[0].get(1, 0)),
											t = u.coor(P.s[0].get(0, 1), P.s[0].get(1, 1)),
											o = u.coor(P.s[0].get(0, 3), P.s[0].get(1, 3)),
											e = u.coor(P.s[0].get(0, 4), P.s[0].get(1, 4)),
											n = u.coor(F.s.get(0, 0), F.s.get(1, 0)),
											a = u.coor(F.s.get(0, 1), F.s.get(1, 1)),
											i = u.coor(F.s.get(0, 2), F.s.get(1, 2)),
											s = u.coor(F.s.get(0, 3), F.s.get(1, 3));
										r.x <= i.x &&
										r.y <= i.y &&
										t.x >= s.x &&
										t.y <= s.y &&
										o.x >= n.x &&
										o.y >= n.y &&
										e.x <= a.x &&
										e.y >= a.y &&
										r.x > t.x
											? F.fueling ||
											  ((F.fueling = !0),
											  $('#fuelTitle').html('switch engine'),
											  $('#extraText').text('off to refuel'),
											  $('#fuelBar').css('opacity', 0))
											: F.fueling &&
											  ((F.fueling = !1),
											  T.engineOn &&
													($('#fuelTitle').html('Fuel'), $('#fuelBar').css('opacity', 1)));
									})();
								var i = 0.2,
									s = Math.sqrt(P.v.vert * P.v.vert + P.v.horz * P.v.horz) / (I ? -i : i);
								if (T.reloadMain)
									E[0].reload ||
										((E[0].nextToShow = 0),
										(E[0].reload = E[0].reloadTime),
										$('#ammo td > div').css({'background-color': 'transparent'}),
										$('#requestReload').css({color: ''})),
										E[0].reload <= o
											? ((T.reloadMain = !1),
											  (E[0].id = 0),
											  $('#requestReload').hide(),
											  $('#mainAmmoTitle').show(),
											  (E[0].reload = 0))
											: (E[0].reload -= o),
										E[0].nextToShow / E[0].arr.length <= 1 - E[0].reload / E[0].reloadTime &&
											($('#ammo td:nth-child(' + E[0].nextToShow + ') > div').css({
												'background-color': '',
											}),
											++E[0].nextToShow);
								else if (E[0].cooldown >= 0) E[0].cooldown -= o;
								else if (T.fireMain) {
									E[0].cooldown = E[0].coolDownTime - o;
									var l = u.coor(P.s[P.s.length - 1].get(0, 0), P.s[P.s.length - 1].get(1, 0)),
										g = u.coor(P.s[P.s.length - 1].get(0, 1), P.s[P.s.length - 1].get(1, 1)),
										d = u.coor(P.s[P.s.length - 1].get(0, 2), P.s[P.s.length - 1].get(1, 2)),
										m = u.coor(P.s[P.s.length - 1].get(0, 3), P.s[P.s.length - 1].get(1, 3));
									if (E[0].id == E[0].arr.length)
										$('#mainAmmoTitle').hide(),
											$('#requestReload').show(),
											setTimeout(function () {
												requestAnimationFrame(function () {
													$('#requestReload').css({color: ''}),
														$('#ammo td > div').css({'background-color': 'transparent'});
												});
											}, 200),
											$('#requestReload').css({color: 'red'}),
											$('#ammo td > div').css({'background-color': 'red'});
									else {
										(X = Q),
											(E[0].arr[E[0].id].s = u.homo_coor(
												u.coor(0.9 * g.x + 0.1 * d.x, 0.9 * g.y + 0.1 * d.y),
												u.coor(
													-0.225 * l.x + 1.125 * g.x + 0.125 * d.x - 0.025 * m.x,
													-0.225 * l.y + 1.125 * g.y + 0.125 * d.y - 0.025 * m.y
												),
												u.coor(
													-0.2 * l.x + 0.7 * g.x + 0.7 * d.x - 0.2 * m.x,
													-0.2 * l.y + 0.7 * g.y + 0.7 * d.y - 0.2 * m.y
												),
												u.coor(
													-0.025 * l.x + 0.125 * g.x + 1.125 * d.x - 0.225 * m.x,
													-0.025 * l.y + 0.125 * g.y + 1.125 * d.y - 0.225 * m.y
												),
												u.coor(0.1 * g.x + 0.9 * d.x, 0.1 * g.y + 0.9 * d.y),
												u.coor(0.9 * g.x + 0.1 * d.x, 0.9 * g.y + 0.1 * d.y)
											)),
											(E[0].arr[E[0].id].v.vert = P.v.vert - 1.5 * Math.sin(j)),
											(E[0].arr[E[0].id].v.horz = P.v.horz + 1.5 * Math.cos(j)),
											(E[0].arr[E[0].id].color = c(0, 0, 0)),
											(q = new R(
												0.4 * g.x + 0.4 * d.x + 0.1 * l.x + 0.1 * m.x,
												0.5 * g.y + 0.5 * d.y,
												15,
												7,
												-j,
												P.v
											));
										var x = z.arr[0].s[0].get(0, 1),
											y = E[0].arr[E[0].id].s.get(0, 2);
										(E[0].arr[E[0].id].impactFrame =
											_ + Math.ceil((x - y) / E[0].arr[E[0].id].v.horz)),
											(E[0].arr[E[0].id].impactTime = Q + (x - y) / E[0].arr[E[0].id].v.horz),
											(P.recoil.vert = 0.055 * Math.sin(j)),
											(P.recoil.horz = 0.055 * Math.cos(j));
										var p = (j - K) / Math.PI;
										0 > p && (p += 2),
											(s += 0.5 > p || p > 1.5 ? -0.02 : 0.02),
											$('#ammo td:nth-child(' + (E[0].arr.length - E[0].id) + ') > div').css({
												'background-color': 'transparent',
											}),
											++E[0].id;
									}
								}
								for (var w = 0; w < E[0].arr.length; ++w)
									if (
										E[0].arr[w].s &&
										E[0].arr[w].impactTime <= Q &&
										E[0].arr[w].v.horz < 0 &&
										E[0].arr[w].s.get(0, 0) > 0
									) {
										$('#bah').text((E[0].arr[w].impactTime - Q).toPrecision(3));
										var S = E[0].arr[w].s.get(1, 1),
											k = E[0].arr[w].s.get(1, 3);
										if (S > k) {
											var C = S;
											(S = k), (k = C);
										}
										for (var D = 0; D < z.arr.length; ++D) {
											var J = z.top_bot(D);
											S < J.bot &&
												k > J.top &&
												((E[0].arr[w].s = !1),
												(D = z.arr.length),
												++U,
												$('#score').html(U + '<div class="addition">+1</div>'),
												U > M &&
													($('#bestscore').html(U + '<div class="addition">+1</div>'), O(U)));
										}
									}
								var V,
									Z,
									rr = 45,
									tr = 0.02;
								(!T.engineOn || (T.breaking && s > 0)) && (tr *= 2);
								var or = 1;
								1 / 3 > s && (or *= 0.25 * (7 / 3 - Math.cos(4 * n(180) * s))),
									T.breaking ? (s -= or * tr) : T.gassing && (s += or * tr),
									(s *= 1 - tr),
									(P.recoil.vert *= 1 - 10 * tr),
									(P.recoil.horz *= 1 - 10 * tr);
								var er = 0.98;
								(N *= er),
									T.gassing &&
										(Math.abs((L * rr) / 7.5) > 0.7
											? (N += 1 - er)
											: Math.abs((L * rr) / 7.5) > 0.4 && (N += (1 - er) / 2));
								var l = (1 - N) * s;
								(P.v.vert *= N),
									(P.v.horz *= N),
									(P.v.vert += (l * Math.sin(K) - P.recoil.vert) * i),
									(P.v.horz += (l * Math.cos(K) - P.recoil.horz) * i),
									(I = 0 > s);
								var nr = Math.round(30 * s);
								if (nr != B) {
									var ar = 0.5 - 0.5 * Math.cos(s * n(180));
									$('#speedBox').css({'background-color': h(c(255, 70, 34), c(25, 138, 25), ar)}),
										$('#speedText').html(Math.abs(nr)),
										(B = nr);
								}
								F.fueling && !T.engineOn
									? P.fuel + 2e-4 * o < 1
										? (P.fuel += 2e-4 * o)
										: P.fuel < 1 &&
										  ((P.fuel = 1),
										  $('#fuelTitle').text('Engine Off'),
										  $('#extraText').text('Enter to start'))
									: T.engineOn && (P.fuel -= 1e-5 * (1 + 4 * e(s)) * o),
									P.fuel < 0 &&
										((T.engineOn = !1),
										F.fueling
											? ($('#fuelTitle').html('Engine Off'), $('#fuelBar').css('opacity', 1))
											: ($('#fuelTitle').text('Engine Off'),
											  $('#extraText').text('Out of fuel!'),
											  $('#fuelBar').css('opacity', 0)),
										(T.gassing = !1),
										(T.breaking = !1),
										(T.fireMain = !1),
										(P.fuel = 0)),
									P.outputtedFuel != ~~(100 * P.fuel) &&
										((P.outputtedFuel = ~~(100 * P.fuel)),
										$('#fuelPercent').html(P.outputtedFuel),
										$('#slider').css({width: P.outputtedFuel + '%'})),
									(V = u.translate(P.v.horz * o, -P.v.vert * o));
								var ir = rr / runsPerSec,
									sr = r(P.s[0]),
									cr = v.offset(),
									lr = b.pageX - sr.x - cr.left,
									hr = b.pageY - sr.y - cr.top,
									ur = Math.atan2(-hr, lr);
								if (
									(0 > ur && (ur += n(360)),
									(function () {
										var r = ur - j;
										r < n(-180) ? (r += n(360)) : r > n(180) && (r -= n(360)),
											(W = ((10 * T.engineOn) / rr) * a(r) * (1 - Math.exp(-Math.abs(r)))),
											(j += W),
											(j %= n(360)),
											0 > j && (j += n(360)),
											(Z = u.mult(V, u.rotate(W, sr.x, sr.y)));
									})(),
									Math.random() < rr / runsPerSec)
								) {
									var fr = ur - K;
									fr < n(-180) ? (fr += n(360)) : fr > n(180) && (fr -= n(360)),
										(L =
											((7.5 * T.engineOn) / rr) *
											a(fr) *
											(1 - Math.exp(-Math.abs(fr))) *
											Math.abs(s)),
										ir > 1 && (L *= ir),
										(K += L),
										(K %= n(360)),
										0 > K && (K += n(360)),
										(V = u.mult(V, u.rotate(L, sr.x, sr.y)));
								}
								for (
									var gr = 5, dr = A.arr.length / gr, vr = 1 / (dr * runsPerSec), w = 0;
									w < A.arr.length;
									++w
								)
									A.arr[w].opac -= 100 * vr;
								if (2 * G * Math.random() < runsPerSec / gr || 0.01 > s) G += 1;
								else {
									G = 0;
									var l = u.coor(P.s[0].get(0, 0), P.s[0].get(1, 0)),
										g = u.coor(P.s[0].get(0, 1), P.s[0].get(1, 1)),
										d = u.coor(P.s[0].get(0, 3), P.s[0].get(1, 3)),
										m = u.coor(P.s[0].get(0, 4), P.s[0].get(1, 4));
									A.id >= A.arr.length && (A.id = 0);
									var mr = Math.sqrt(s) / 2;
									(A.arr[A.id].left = u.homo_coor(
										u.coor((4 * l.x + m.x) / 5, (4 * l.y + m.y) / 5),
										u.coor(
											((1 - mr) * (4 * l.x + m.x) + mr * (4 * g.x + d.x)) / 5,
											((1 - mr) * (4 * l.y + m.y) + mr * (4 * g.y + d.y)) / 5
										),
										u.coor(
											((1 - mr) * (3 * l.x + 2 * m.x) + mr * (3 * g.x + 2 * d.x)) / 5,
											((1 - mr) * (3 * l.y + 2 * m.y) + mr * (3 * g.y + 2 * d.y)) / 5
										),
										u.coor((3 * l.x + 2 * m.x) / 5, (3 * l.y + 2 * m.y) / 5)
									)),
										(A.arr[A.id].right = u.homo_coor(
											u.coor((l.x + 4 * m.x) / 5, (l.y + 4 * m.y) / 5),
											u.coor(
												((1 - mr) * (l.x + 4 * m.x) + mr * (g.x + 4 * d.x)) / 5,
												((1 - mr) * (l.y + 4 * m.y) + mr * (g.y + 4 * d.y)) / 5
											),
											u.coor(
												((1 - mr) * (2 * l.x + 3 * m.x) + mr * (2 * g.x + 3 * d.x)) / 5,
												((1 - mr) * (2 * l.y + 3 * m.y) + mr * (2 * g.y + 3 * d.y)) / 5
											),
											u.coor((2 * l.x + 3 * m.x) / 5, (2 * l.y + 3 * m.y) / 5)
										)),
										(A.arr[A.id].opac = 100),
										++A.id;
								}
								for (var w = 0; w < P.s.length - 1; ++w) P.s[w] = u.mult(V, P.s[w]);
								P.s[P.s.length - 1] = u.mult(Z, P.s[P.s.length - 1]);
								for (var w = 0; w < E.length; ++w)
									for (var D = 0; D < E[w].arr.length; ++D)
										if (E[w].arr[D].s) {
											var xr = u.translate(E[w].arr[D].v.horz * o, E[w].arr[D].v.vert * o);
											E[w].arr[D].s = u.mult(xr, E[w].arr[D].s);
										}
								if ((z.move(o), q))
									if (q.opac >= 0.05) {
										var vr = 1 / (0.1 * runsPerSec);
										q.opac -= 0.05;
									} else q.opac = 0;
								if (q && q.opac > 0) {
									var xr = u.translate(q.v.horz, -q.v.vert);
									q.s = u.mult(xr, q.s);
								}
								f(o);
							}
							++_;
						};
						Y();
					});
			},
			{'./matrices.js': 2},
		],
		2: [
			function (r, t, o) {
				function e(r, t) {
					for (; t > 0; ) {
						var o = t;
						(t = r % t), (r = o);
					}
					return r;
				}
				function n(r) {
					if (r[0] % 1 !== 0) return 1;
					for (var t = r[0], o = 1; o < r.length; o++) {
						if (r[o] % 1 !== 0) return 1;
						t = e(t, r[o]);
					}
					return t;
				}
				(o.Matrix = function (r, t, o) {
					'undefined' == typeof r && (r = 1),
						'undefined' == typeof t && (t = 1),
						'undefined' == typeof o && (o = 0);
					var e = this;
					this.M_data = new Array(r * t);
					for (var n = 0; n < this.M_data.length; ++n) this.M_data[n] = o;
					(e.h = function () {
						return r;
					}),
						(e.w = function () {
							return t;
						}),
						(this.mult = function (o) {
							var e = mMult(this, o);
							return (this.M_data = e.M_data), (r = e.h()), (t = e.w()), this;
						});
				}),
					(o.Matrix.prototype.set = function (r, t, o) {
						if (r >= this.h() || t >= this.w())
							throw 'Range Error: no element exists at row=' + r + ' column=' + t;
						var e = parseFloat(o);
						if (isNaN(e)) throw 'Domain Error: element must be numeric';
						return (this.M_data[r * this.w() + t] = e), self;
					}),
					(o.Matrix.prototype.get = function (r, t) {
						if (r >= this.h() || t >= this.w())
							throw 'Range Error: no element exists at row=' + r + ' column=' + t;
						return this.M_data[r * this.w() + t];
					}),
					(o.Matrix.prototype.toString = function () {
						for (
							var r = '',
								t = n(this.M_data),
								o = 1 !== t ? t.toString() : '',
								e = (Array(o.length + 1).join(' '), 0);
							e < this.h();
							++e
						) {
							0 !== e && (r += '\n'), (r += '|	');
							for (var a = 0; a < this.w(); ++a) r += this.get(e, a) / t + '	';
							r += '|';
						}
						return r;
					});
				var a = function (r, t, o) {
					if ('+' === r || '-' === r) return t.h() == o.h() && t.w() == o.w();
					if ('*' === r) return t.w() === o.h();
					throw 'invalid sign';
				};
				(o.Matrix.prototype.add = function (r) {
					if (!a('+', this, r)) throw 'Domain error, cannot add matricies';
					for (var t = 0; t < this.M_data.length; ++t) this.M_data[t] += r.M_data[t];
					return this;
				}),
					(o.Matrix.prototype.sub = function (r) {
						if (!a('-', this, r)) throw 'Domain error, cannot add matricies';
						for (var t = 0; t < this.M_data.length; ++t) this.M_data[t] -= r.M_data[t];
						return this;
					}),
					(o.scalarMult = function (r, t) {
						for (var e = new o.Matrix(t.h(), t.w()), n = 0; n < t.M_data.length; ++n)
							e.M_data[n] = t.M_data[n] * r;
						return e;
					}),
					(o.mult = function (r, t) {
						if ('number' == typeof r && !isNaN(r)) return o.scalarMult(r, t);
						if ('number' == typeof t && !isNaN(t)) return o.scalarMult(t, r);
						if (!a('*', r, t)) throw 'Domain error, cannot multiply matrices';
						for (var e = new o.Matrix(r.h(), t.w()), n = 0; n < e.h(); ++n)
							for (var i = 0; i < e.w(); ++i) {
								for (var s = 0, c = 0; c < r.w(); ++c) s += r.get(n, c) * t.get(c, i);
								e.M_data[n * e.w() + i] = s;
							}
						return e;
					}),
					(o.add = function (r, t) {
						if (!a('+', r, t)) throw 'Domain error, cannot add matrices';
						for (var e = new o.Matrix(r.h(), r.w()), n = 0; n < e.M_data.length; ++n)
							e.M_data[n] = r.M_data[n] + t.M_data[n];
						return e;
					}),
					(o.sub = function (r, t) {
						if (!a('-', r, t)) throw 'Domain error, cannot subtract matrices';
						for (var e = new o.Matrix(r.h(), r.w()), n = 0; n < e.M_data.length; ++n)
							e.M_data[n] = r.M_data[n] - t.M_data[n];
						return e;
					}),
					(o.make = function (r) {
						if (!$.isArray(r) || !$.isArray(r[0]))
							throw 'Invalid Argument, must be a 2d, non jagged, array';
						for (var t = new o.Matrix(r.length, r[0].length), e = 0; e < t.h(); ++e) {
							if (!$.isArray(r[e]) || r[e].length !== t.w())
								throw 'Invalid Argument, must be a 2d, non jagged, array';
							for (var n = 0; n < t.w(); ++n) t.set(e, n, r[e][n]);
						}
						return t;
					}),
					(o.coor = function (r, t) {
						return {x: r, y: t};
					}),
					(o.coor_at_angle = function (r, t, o, e, n) {
						(r = r || 0), (t = t || 0), (o = o || 0), (e = e || 0), (n = n || 0);
						var a = Math.sin(n),
							i = Math.cos(n);
						return {x: r + o * i - e * a, y: t + e * i + o * a};
					}),
					(o.dist = function (r, t) {
						function o(r) {
							return r * r;
						}
						return Math.sqrt(o(r.x - t.x) + o(r.y - t.y));
					}),
					(o.homo_coor = function () {
						for (var r = new o.Matrix(3, arguments.length), t = 0; t < r.w(); ++t)
							r.set(0, t, arguments[t].x);
						for (var t = 0; t < r.w(); ++t) r.set(1, t, arguments[t].y);
						for (var t = 0; t < r.w(); ++t) r.set(2, t, 1);
						return r;
					}),
					(o.I = function (r) {
						for (var t = new o.Matrix(r, r), e = 0; r > e; ++e) t.set(e, e, 1);
						return t;
					}),
					(o.plot = function (r, t) {
						if (!(0 === t.w() || t.h() < 2)) {
							var o = 1;
							3 === t.h() && (o = t.get(2, 0)), r.moveTo(t.get(0, 0) / o, t.get(1, 0) / o);
							for (var e = 1; e < t.w(); ++e)
								r.lineTo(Math.round(t.get(0, e)) / o, Math.round(t.get(1, e)) / o);
						}
					}),
					(o.translate = function (r, t) {
						var e = o.I(3);
						return e.set(0, 2, r), e.set(1, 2, t), e;
					}),
					(o.rotate = function (r, t, e) {
						var n = Math.cos(r),
							a = Math.sin(r),
							i = new o.Matrix(3, 3);
						if (
							(i.set(0, 0, n),
							i.set(1, 0, -a),
							i.set(0, 1, a),
							i.set(1, 1, n),
							i.set(2, 2, 1),
							!t && !e)
						)
							return i;
						(t = t || 0), (e = e || 0);
						var s = o.translate(-t, -e),
							c = o.translate(t, e);
						return o.mult(c, o.mult(i, s));
					}),
					(o.scale = function (r, t) {
						'undefined' == typeof r && (r = 1), 'undefined' == typeof t && (t = r);
						var e = new o.Matrix(3, 3);
						return e.set(0, 0, r), e.set(1, 1, t), e.set(2, 2, 1), e;
					}),
					(o.polygon = function (r, t, e, n) {
						r = r || 3;
						var a,
							i = new o.Matrix(3, r);
						(a =
							'function' == typeof t
								? t
								: function (r) {
										return t;
								  }),
							(e = e || o.coor(0, 0));
						for (var s = Math.PI, c = (2 * s) / r, l = (!n * c) / 2, h = 0; 2 * s > l; )
							i.set(0, h, e.x + a(h) * Math.sin(l)),
								i.set(1, h, e.y + a(h) * Math.cos(l)),
								i.set(2, h, 1),
								++h,
								(l += c);
						return i;
					});
			},
			{},
		],
	},
	{},
	[1]
);
//# sourceMappingURL=../../tank/scripts/bundle.js.map
