! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("stream")) : "function" == typeof define && define.amd ? define(["stream"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).JMuxer = t(e.stream)
}(this, (function(e) {
    "use strict";

    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, t(e)
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && u(e, t)
    }

    function o(e) {
        return o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, o(e)
    }

    function u(e, t) {
        return u = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, u(e, t)
    }

    function c(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return c(e)
    }

    function l(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = o(e);
            if (t) {
                var i = o(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return f(this, n)
        }
    }

    function h(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, s = [],
                a = !0,
                o = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (s.push(r.value), !t || s.length !== t); a = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (o) throw i
                }
            }
            return s
        }(e, t) || d(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e, t) {
        if (e) {
            if ("string" == typeof e) return y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
        }
    }

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = d(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, a = !0,
            o = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                o = !0, s = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (o) throw s
                }
            }
        }
    }
    var v, m;

    function k(e) {
        if (v) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            v.apply(void 0, [e].concat(n))
        }
    }

    function g(e) {
        if (m) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            m.apply(void 0, [e].concat(n))
        }
    }
    var b = function() {
        function e(t) {
            n(this, e), this.payload = t, this.nri = (96 & this.payload[0]) >> 5, this.ntype = 31 & this.payload[0], this.isvcl = 1 == this.ntype || 5 == this.ntype, this.stype = "", this.isfmb = !1
        }
        return i(e, [{
            key: "toString",
            value: function() {
                return "".concat(e.type(this), ": NRI: ").concat(this.getNri())
            }
        }, {
            key: "getNri",
            value: function() {
                return this.nri
            }
        }, {
            key: "type",
            value: function() {
                return this.ntype
            }
        }, {
            key: "isKeyframe",
            value: function() {
                return this.ntype === e.IDR
            }
        }, {
            key: "getPayload",
            value: function() {
                return this.payload
            }
        }, {
            key: "getPayloadSize",
            value: function() {
                return this.payload.byteLength
            }
        }, {
            key: "getSize",
            value: function() {
                return 4 + this.getPayloadSize()
            }
        }, {
            key: "getData",
            value: function() {
                var e = new Uint8Array(this.getSize());
                return new DataView(e.buffer).setUint32(0, this.getSize() - 4), e.set(this.getPayload(), 4), e
            }
        }], [{
            key: "NDR",
            get: function() {
                return 1
            }
        }, {
            key: "IDR",
            get: function() {
                return 5
            }
        }, {
            key: "SEI",
            get: function() {
                return 6
            }
        }, {
            key: "SPS",
            get: function() {
                return 7
            }
        }, {
            key: "PPS",
            get: function() {
                return 8
            }
        }, {
            key: "AUD",
            get: function() {
                return 9
            }
        }, {
            key: "TYPES",
            get: function() {
                var t;
                return s(t = {}, e.IDR, "IDR"), s(t, e.SEI, "SEI"), s(t, e.SPS, "SPS"), s(t, e.PPS, "PPS"), s(t, e.NDR, "NDR"), s(t, e.AUD, "AUD"), t
            }
        }, {
            key: "type",
            value: function(t) {
                return t.ntype in e.TYPES ? e.TYPES[t.ntype] : "UNKNOWN"
            }
        }]), e
    }();

    function S(e, t) {
        var n = new Uint8Array((0 | e.byteLength) + (0 | t.byteLength));
        return n.set(e, 0), n.set(t, 0 | e.byteLength), n
    }
    var w = function() {
            function e(t) {
                n(this, e), this.data = t, this.index = 0, this.bitLength = 8 * t.byteLength
            }
            return i(e, [{
                key: "setData",
                value: function(e) {
                    this.data = e, this.index = 0, this.bitLength = 8 * e.byteLength
                }
            }, {
                key: "bitsAvailable",
                get: function() {
                    return this.bitLength - this.index
                }
            }, {
                key: "skipBits",
                value: function(e) {
                    if (this.bitsAvailable < e) return !1;
                    this.index += e
                }
            }, {
                key: "readBits",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = this.getBits(e, this.index, t);
                    return n
                }
            }, {
                key: "getBits",
                value: function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (this.bitsAvailable < e) return 0;
                    var r = t % 8,
                        i = this.data[t / 8 | 0] & 255 >>> r,
                        s = 8 - r;
                    if (s >= e) return n && (this.index += e), i >> s - e;
                    n && (this.index += s);
                    var a = e - s;
                    return i << a | this.getBits(a, t + s, n)
                }
            }, {
                key: "skipLZ",
                value: function() {
                    var e;
                    for (e = 0; e < this.bitLength - this.index; ++e)
                        if (0 !== this.getBits(1, this.index + e, !1)) return this.index += e, e;
                    return e
                }
            }, {
                key: "skipUEG",
                value: function() {
                    this.skipBits(1 + this.skipLZ())
                }
            }, {
                key: "skipEG",
                value: function() {
                    this.skipBits(1 + this.skipLZ())
                }
            }, {
                key: "readUEG",
                value: function() {
                    var e = this.skipLZ();
                    return this.readBits(e + 1) - 1
                }
            }, {
                key: "readEG",
                value: function() {
                    var e = this.readUEG();
                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                }
            }, {
                key: "readBoolean",
                value: function() {
                    return 1 === this.readBits(1)
                }
            }, {
                key: "readUByte",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return this.readBits(8 * e)
                }
            }, {
                key: "readUShort",
                value: function() {
                    return this.readBits(16)
                }
            }, {
                key: "readUInt",
                value: function() {
                    return this.readBits(32)
                }
            }]), e
        }(),
        x = function() {
            function e(t) {
                n(this, e), this.remuxer = t, this.track = t.mp4track
            }
            return i(e, [{
                key: "parseSPS",
                value: function(t) {
                    var n = e.readSPS(new Uint8Array(t));
                    this.track.fps = n.fps, this.track.width = n.width, this.track.height = n.height, this.track.sps = [new Uint8Array(t)], this.track.codec = "avc1.";
                    for (var r = new DataView(t.buffer, t.byteOffset + 1, 4), i = 0; i < 3; ++i) {
                        var s = r.getUint8(i).toString(16);
                        s.length < 2 && (s = "0" + s), this.track.codec += s
                    }
                }
            }, {
                key: "parsePPS",
                value: function(e) {
                    this.track.pps = [new Uint8Array(e)]
                }
            }, {
                key: "parseNAL",
                value: function(e) {
                    if (!e) return !1;
                    var t = !1;
                    switch (e.type()) {
                        case b.IDR:
                        case b.NDR:
                            t = !0;
                            break;
                        case b.PPS:
                            this.track.pps || (this.parsePPS(e.getPayload()), !this.remuxer.readyToDecode && this.track.pps && this.track.sps && (this.remuxer.readyToDecode = !0)), t = !0;
                            break;
                        case b.SPS:
                            this.track.sps || (this.parseSPS(e.getPayload()), !this.remuxer.readyToDecode && this.track.pps && this.track.sps && (this.remuxer.readyToDecode = !0)), t = !0;
                            break;
                        case b.AUD:
                            k("AUD - ignoing");
                            break;
                        case b.SEI:
                            k("SEI - ignoing")
                    }
                    return t
                }
            }], [{
                key: "extractNALu",
                value: function(e) {
                    for (var t, n, r = 0, i = e.byteLength, s = 0, a = [], o = 0; r < i;) switch (t = e[r++], s) {
                        case 0:
                            0 === t && (s = 1);
                            break;
                        case 1:
                            s = 0 === t ? 2 : 0;
                            break;
                        case 2:
                        case 3:
                            0 === t ? s = 3 : 1 === t && r < i ? (o != r - s - 1 && a.push(e.subarray(o, r - s - 1)), o = r, s = 0) : s = 0
                    }
                    return o < i && (n = e.subarray(o, i)), [a, n]
                }
            }, {
                key: "skipScalingList",
                value: function(e, t) {
                    for (var n = 8, r = 8, i = 0; i < t; i++) 0 !== r && (r = (n + e.readEG() + 256) % 256), n = 0 === r ? n : r
                }
            }, {
                key: "readSPS",
                value: function(t) {
                    var n, r, i, s, a, o, u = new w(t),
                        c = 0,
                        f = 0,
                        l = 0,
                        h = 0,
                        d = 1,
                        y = 0;
                    u.readUByte();
                    for (var p = [], v = t.byteLength, m = 1; m < v; m++) m + 2 < v && 3 === u.readBits(24, !1) ? (p.push(u.readBits(8)), p.push(u.readBits(8)), m += 2, u.readBits(8)) : p.push(u.readBits(8));
                    if (u.setData(new Uint8Array(p)), n = u.readUByte(), u.readBits(5), u.skipBits(3), u.readUByte(), u.skipUEG(), 100 === n || 110 === n || 122 === n || 244 === n || 44 === n || 83 === n || 86 === n || 118 === n || 128 === n) {
                        var k = u.readUEG();
                        if (3 === k && u.skipBits(1), u.skipUEG(), u.skipUEG(), u.skipBits(1), u.readBoolean()) {
                            o = 3 !== k ? 8 : 12;
                            for (var g = 0; g < o; ++g) u.readBoolean() && (g < 6 ? e.skipScalingList(u, 16) : e.skipScalingList(u, 64))
                        }
                    }
                    u.skipUEG();
                    var b = u.readUEG();
                    if (0 === b) u.readUEG();
                    else if (1 === b) {
                        u.skipBits(1), u.skipEG(), u.skipEG(), r = u.readUEG();
                        for (var S = 0; S < r; ++S) u.skipEG()
                    }
                    if (u.skipUEG(), u.skipBits(1), i = u.readUEG(), s = u.readUEG(), 0 === (a = u.readBits(1)) && u.skipBits(1), u.skipBits(1), u.readBoolean() && (c = u.readUEG(), f = u.readUEG(), l = u.readUEG(), h = u.readUEG()), u.readBoolean()) {
                        if (u.readBoolean()) {
                            var x;
                            switch (u.readUByte()) {
                                case 1:
                                    x = [1, 1];
                                    break;
                                case 2:
                                    x = [12, 11];
                                    break;
                                case 3:
                                    x = [10, 11];
                                    break;
                                case 4:
                                    x = [16, 11];
                                    break;
                                case 5:
                                    x = [40, 33];
                                    break;
                                case 6:
                                    x = [24, 11];
                                    break;
                                case 7:
                                    x = [20, 11];
                                    break;
                                case 8:
                                    x = [32, 11];
                                    break;
                                case 9:
                                    x = [80, 33];
                                    break;
                                case 10:
                                    x = [18, 11];
                                    break;
                                case 11:
                                    x = [15, 11];
                                    break;
                                case 12:
                                    x = [64, 33];
                                    break;
                                case 13:
                                    x = [160, 99];
                                    break;
                                case 14:
                                    x = [4, 3];
                                    break;
                                case 15:
                                    x = [3, 2];
                                    break;
                                case 16:
                                    x = [2, 1];
                                    break;
                                case 255:
                                    x = [u.readUByte() << 8 | u.readUByte(), u.readUByte() << 8 | u.readUByte()]
                            }
                            x && x[0] > 0 && x[1] > 0 && (d = x[0] / x[1])
                        }
                        if (u.readBoolean() && u.skipBits(1), u.readBoolean() && (u.skipBits(4), u.readBoolean() && u.skipBits(24)), u.readBoolean() && (u.skipUEG(), u.skipUEG()), u.readBoolean()) {
                            var A = u.readUInt(),
                                U = u.readUInt();
                            u.readBoolean() && (y = U / (2 * A))
                        }
                    }
                    return {
                        fps: y > 0 ? y : void 0,
                        width: Math.ceil((16 * (i + 1) - 2 * c - 2 * f) * d),
                        height: (2 - a) * (s + 1) * 16 - (a ? 2 : 4) * (l + h)
                    }
                }
            }, {
                key: "parseHeader",
                value: function(e) {
                    var t = new w(e.getPayload());
                    t.readUByte(), e.isfmb = 0 === t.readUEG(), e.stype = t.readUEG()
                }
            }]), e
        }(),
        A = function() {
            function e(t) {
                n(this, e), this.remuxer = t, this.track = t.mp4track
            }
            return i(e, [{
                key: "extractAAC",
                value: function(t) {
                    var n, r, i = 0,
                        s = t.byteLength,
                        a = [];
                    if (!e.isAACPattern(t)) return g("Invalid ADTS audio format"), a;
                    for (n = e.getHeaderLength(t), this.aacHeader || (this.aacHeader = t.subarray(0, n)); i < s;) r = e.getFrameLength(t), a.push(t.subarray(n, r)), t = t.slice(r), i += r;
                    return a
                }
            }, {
                key: "setAACConfig",
                value: function() {
                    var e, t, n, r = new Uint8Array(2),
                        i = this.aacHeader;
                    i && (e = 1 + ((192 & i[2]) >>> 6), t = (60 & i[2]) >>> 2, n = (1 & i[2]) << 2, n |= (192 & i[3]) >>> 6, r[0] = e << 3, r[0] |= (14 & t) >> 1, r[1] |= (1 & t) << 7, r[1] |= n << 3, this.track.codec = "mp4a.40." + e, this.track.channelCount = n, this.track.config = r, this.remuxer.readyToDecode = !0)
                }
            }], [{
                key: "samplingRateMap",
                get: function() {
                    return [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]
                }
            }, {
                key: "getHeaderLength",
                value: function(e) {
                    return 1 & e[1] ? 7 : 9
                }
            }, {
                key: "getFrameLength",
                value: function(e) {
                    return (3 & e[3]) << 11 | e[4] << 3 | (224 & e[5]) >>> 5
                }
            }, {
                key: "isAACPattern",
                value: function(e) {
                    return 255 === e[0] && 240 == (240 & e[1]) && 0 == (6 & e[1])
                }
            }]), e
        }(),
        U = function() {
            function e(t) {
                n(this, e), this.listener = {}, this.type = "" | t
            }
            return i(e, [{
                key: "on",
                value: function(e, t) {
                    return this.listener[e] || (this.listener[e] = []), this.listener[e].push(t), !0
                }
            }, {
                key: "off",
                value: function(e, t) {
                    if (this.listener[e]) {
                        var n = this.listener[e].indexOf(t);
                        return n > -1 && this.listener[e].splice(n, 1), !0
                    }
                    return !1
                }
            }, {
                key: "offAll",
                value: function() {
                    this.listener = {}
                }
            }, {
                key: "dispatch",
                value: function(e, t) {
                    return !!this.listener[e] && (this.listener[e].map((function(e) {
                        e.apply(null, [t])
                    })), !0)
                }
            }]), e
        }(),
        B = function() {
            function e() {
                n(this, e)
            }
            return i(e, null, [{
                key: "init",
                value: function() {
                    var t;
                    for (t in e.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            mvex: [],
                            mvhd: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: []
                        }, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                    var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                        r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                    e.HDLR_TYPES = {
                        video: n,
                        audio: r
                    };
                    var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                        s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    e.STTS = e.STSC = e.STCO = s, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                    var a = new Uint8Array([105, 115, 111, 109]),
                        o = new Uint8Array([97, 118, 99, 49]),
                        u = new Uint8Array([0, 0, 0, 1]);
                    e.FTYP = e.box(e.types.ftyp, a, u, a, o), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, i))
                }
            }, {
                key: "box",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    for (var i, s = 8, a = n.length, o = a; a--;) s += n[a].byteLength;
                    for ((i = new Uint8Array(s))[0] = s >> 24 & 255, i[1] = s >> 16 & 255, i[2] = s >> 8 & 255, i[3] = 255 & s, i.set(e, 4), a = 0, s = 8; a < o; ++a) i.set(n[a], s), s += n[a].byteLength;
                    return i
                }
            }, {
                key: "hdlr",
                value: function(t) {
                    return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                }
            }, {
                key: "mdat",
                value: function(t) {
                    return e.box(e.types.mdat, t)
                }
            }, {
                key: "mdhd",
                value: function(t, n) {
                    return e.box(e.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
                }
            }, {
                key: "mdia",
                value: function(t) {
                    return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                }
            }, {
                key: "mfhd",
                value: function(t) {
                    return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                }
            }, {
                key: "minf",
                value: function(t) {
                    return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
                }
            }, {
                key: "moof",
                value: function(t, n, r) {
                    return e.box(e.types.moof, e.mfhd(t), e.traf(r, n))
                }
            }, {
                key: "moov",
                value: function(t, n, r) {
                    for (var i = t.length, s = []; i--;) s[i] = e.trak(t[i]);
                    return e.box.apply(null, [e.types.moov, e.mvhd(r, n)].concat(s).concat(e.mvex(t)))
                }
            }, {
                key: "mvex",
                value: function(t) {
                    for (var n = t.length, r = []; n--;) r[n] = e.trex(t[n]);
                    return e.box.apply(null, [e.types.mvex].concat(r))
                }
            }, {
                key: "mvhd",
                value: function(t, n) {
                    var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return e.box(e.types.mvhd, r)
                }
            }, {
                key: "sdtp",
                value: function(t) {
                    var n, r, i = t.samples || [],
                        s = new Uint8Array(4 + i.length);
                    for (r = 0; r < i.length; r++) n = i[r].flags, s[r + 4] = n.dependsOn << 4 | n.isDependedOn << 2 | n.hasRedundancy;
                    return e.box(e.types.sdtp, s)
                }
            }, {
                key: "stbl",
                value: function(t) {
                    return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
                }
            }, {
                key: "avc1",
                value: function(t) {
                    var n, r, i, s = [],
                        a = [];
                    for (n = 0; n < t.sps.length; n++) i = (r = t.sps[n]).byteLength, s.push(i >>> 8 & 255), s.push(255 & i), s = s.concat(Array.prototype.slice.call(r));
                    for (n = 0; n < t.pps.length; n++) i = (r = t.pps[n]).byteLength, a.push(i >>> 8 & 255), a.push(255 & i), a = a.concat(Array.prototype.slice.call(r));
                    var o = e.box(e.types.avcC, new Uint8Array([1, s[3], s[4], s[5], 255, 224 | t.sps.length].concat(s).concat([t.pps.length]).concat(a))),
                        u = t.width,
                        c = t.height;
                    return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, u >> 8 & 255, 255 & u, c >> 8 & 255, 255 & c, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 98, 105, 110, 101, 108, 112, 114, 111, 46, 114, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
                }
            }, {
                key: "esds",
                value: function(e) {
                    var t = e.config.byteLength,
                        n = new Uint8Array(26 + t + 3);
                    return n.set([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, t]), n.set(e.config, 26), n.set([6, 1, 2], 26 + t), n
                }
            }, {
                key: "mp4a",
                value: function(t) {
                    var n = t.audiosamplerate;
                    return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0]), e.box(e.types.esds, e.esds(t)))
                }
            }, {
                key: "stsd",
                value: function(t) {
                    return "audio" === t.type ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
                }
            }, {
                key: "tkhd",
                value: function(t) {
                    var n = t.id,
                        r = t.duration,
                        i = t.width,
                        s = t.height,
                        a = t.volume;
                    return e.box(e.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, a >> 0 & 255, a % 1 * 10 >> 0 & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
                }
            }, {
                key: "traf",
                value: function(t, n) {
                    var r = e.sdtp(t),
                        i = t.id;
                    return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), e.box(e.types.tfdt, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), e.trun(t, r.length + 16 + 16 + 8 + 16 + 8 + 8), r)
                }
            }, {
                key: "trak",
                value: function(t) {
                    return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                }
            }, {
                key: "trex",
                value: function(t) {
                    var n = t.id;
                    return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                }
            }, {
                key: "trun",
                value: function(t, n) {
                    var r, i, s, a, o, u, c = t.samples || [],
                        f = c.length,
                        l = 12 + 16 * f,
                        h = new Uint8Array(l);
                    for (n += 8 + l, h.set([0, 0, 15, 1, f >>> 24 & 255, f >>> 16 & 255, f >>> 8 & 255, 255 & f, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n], 0), r = 0; r < f; r++) s = (i = c[r]).duration, a = i.size, o = i.flags, u = i.cts, h.set([s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u], 12 + 16 * r);
                    return e.box(e.types.trun, h)
                }
            }, {
                key: "initSegment",
                value: function(t, n, r) {
                    e.types || e.init();
                    var i, s = e.moov(t, n, r);
                    return (i = new Uint8Array(e.FTYP.byteLength + s.byteLength)).set(e.FTYP), i.set(s, e.FTYP.byteLength), i
                }
            }]), e
        }(),
        D = 1,
        C = function() {
            function e() {
                n(this, e)
            }
            return i(e, [{
                key: "flush",
                value: function() {
                    this.mp4track.len = 0, this.mp4track.samples = []
                }
            }, {
                key: "isReady",
                value: function() {
                    return !(!this.readyToDecode || !this.samples.length) || null
                }
            }], [{
                key: "getTrackID",
                value: function() {
                    return D++
                }
            }]), e
        }(),
        E = function(e) {
            a(r, e);
            var t = l(r);

            function r(e) {
                var i;
                return n(this, r), (i = t.call(this)).readyToDecode = !1, i.nextDts = 0, i.dts = 0, i.mp4track = {
                    id: C.getTrackID(),
                    type: "audio",
                    channelCount: 0,
                    len: 0,
                    fragmented: !0,
                    timescale: e,
                    duration: e,
                    samples: [],
                    config: "",
                    codec: ""
                }, i.samples = [], i.aac = new A(c(i)), i
            }
            return i(r, [{
                key: "resetTrack",
                value: function() {
                    this.readyToDecode = !1, this.mp4track.codec = "", this.mp4track.channelCount = "", this.mp4track.config = "", this.mp4track.timescale = this.timescale, this.nextDts = 0, this.dts = 0
                }
            }, {
                key: "remux",
                value: function(e) {
                    if (e.length > 0)
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t],
                                r = n.units,
                                i = r.byteLength;
                            this.samples.push({
                                units: r,
                                size: i,
                                duration: n.duration
                            }), this.mp4track.len += i, this.readyToDecode || this.aac.setAACConfig()
                        }
                }
            }, {
                key: "getPayload",
                value: function() {
                    if (!this.isReady()) return null;
                    var e, t, n = new Uint8Array(this.mp4track.len),
                        r = 0,
                        i = this.mp4track.samples;
                    for (this.dts = this.nextDts; this.samples.length;) {
                        var s = this.samples.shift();
                        s.units, (t = s.duration) <= 0 ? (k("remuxer: invalid sample duration at DTS: ".concat(this.nextDts, " :").concat(t)), this.mp4track.len -= s.size) : (this.nextDts += t, e = {
                            size: s.size,
                            duration: t,
                            cts: 0,
                            flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: 1
                            }
                        }, n.set(s.units, r), r += s.size, i.push(e))
                    }
                    return i.length ? new Uint8Array(n.buffer, 0, this.mp4track.len) : null
                }
            }, {
                key: "getAacParser",
                value: function() {
                    return this.aac
                }
            }]), r
        }(C),
        T = function(e) {
            a(r, e);
            var t = l(r);

            function r(e) {
                var i;
                return n(this, r), (i = t.call(this)).readyToDecode = !1, i.nextDts = 0, i.dts = 0, i.mp4track = {
                    id: C.getTrackID(),
                    type: "video",
                    len: 0,
                    fragmented: !0,
                    sps: "",
                    pps: "",
                    fps: 30,
                    width: 0,
                    height: 0,
                    timescale: e,
                    duration: e,
                    samples: []
                }, i.samples = [], i.h264 = new x(c(i)), i
            }
            return i(r, [{
                key: "resetTrack",
                value: function() {
                    this.readyToDecode = !1, this.mp4track.sps = "", this.mp4track.pps = "", this.nextDts = 0, this.dts = 0
                }
            }, {
                key: "remux",
                value: function(e) {
                    var t, n = p(e);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r, i = t.value,
                                s = [],
                                a = 0,
                                o = p(i.units);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var u = r.value;
                                    this.h264.parseNAL(u) && (s.push(u), a += u.getSize())
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            s.length > 0 && this.readyToDecode && (this.mp4track.len += a, this.samples.push({
                                units: s,
                                size: a,
                                keyFrame: i.keyFrame,
                                duration: i.duration,
                                compositionTimeOffset: i.compositionTimeOffset
                            }))
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                }
            }, {
                key: "getPayload",
                value: function() {
                    if (!this.isReady()) return null;
                    var e, t, n = new Uint8Array(this.mp4track.len),
                        r = 0,
                        i = this.mp4track.samples;
                    for (this.dts = this.nextDts; this.samples.length;) {
                        var s = this.samples.shift(),
                            a = s.units;
                        if ((t = s.duration) <= 0) k("remuxer: invalid sample duration at DTS: ".concat(this.nextDts, " :").concat(t)), this.mp4track.len -= s.size;
                        else {
                            this.nextDts += t, e = {
                                size: s.size,
                                duration: t,
                                cts: s.compositionTimeOffset || 0,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    isNonSync: s.keyFrame ? 0 : 1,
                                    dependsOn: s.keyFrame ? 2 : 1
                                }
                            };
                            var o, u = p(a);
                            try {
                                for (u.s(); !(o = u.n()).done;) {
                                    var c = o.value;
                                    n.set(c.getData(), r), r += c.getSize()
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                            i.push(e)
                        }
                    }
                    return i.length ? new Uint8Array(n.buffer, 0, this.mp4track.len) : null
                }
            }]), r
        }(C),
        P = function(e) {
            a(r, e);
            var t = l(r);

            function r(e) {
                var i;
                return n(this, r), (i = t.call(this, "remuxer")).initialized = !1, i.trackTypes = [], i.tracks = {}, i.seq = 1, i.env = e, i.timescale = 1e3, i.mediaDuration = 0, i.aacParser = null, i
            }
            return i(r, [{
                key: "addTrack",
                value: function(e) {
                    if ("video" !== e && "both" !== e || (this.tracks.video = new T(this.timescale), this.trackTypes.push("video")), "audio" === e || "both" === e) {
                        var t = new E(this.timescale);
                        this.aacParser = t.getAacParser(), this.tracks.audio = t, this.trackTypes.push("audio")
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    var e, t = p(this.trackTypes);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = e.value;
                            this.tracks[n].resetTrack()
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                    this.initialized = !1
                }
            }, {
                key: "destroy",
                value: function() {
                    this.tracks = {}, this.offAll()
                }
            }, {
                key: "flush",
                value: function() {
                    if (this.initialized) {
                        var e, t = p(this.trackTypes);
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value,
                                    r = this.tracks[n],
                                    i = r.getPayload();
                                if (i && i.byteLength) {
                                    var s = {
                                        type: n,
                                        payload: S(B.moof(this.seq, r.dts, r.mp4track), B.mdat(i)),
                                        dts: r.dts
                                    };
                                    "video" === n && (s.fps = r.mp4track.fps), this.dispatch("buffer", s);
                                    var a = (o = r.dts / this.timescale, u = void 0, c = void 0, f = void 0, l = void 0, l = "", u = Math.floor(o), (c = parseInt(u / 3600, 10) % 24) > 0 && (l += (c < 10 ? "0" + c : c) + ":"), l += ((f = parseInt(u / 60, 10) % 60) < 10 ? "0" + f : f) + ":" + ((u = u < 0 ? 0 : u % 60) < 10 ? "0" + u : u));
                                    k("put segment (".concat(n, "): dts: ").concat(r.dts, " frames: ").concat(r.mp4track.samples.length, " second: ").concat(a)), r.flush(), this.seq++
                                }
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    } else this.isReady() && (this.dispatch("ready"), this.initSegment(), this.initialized = !0, this.flush());
                    var o, u, c, f, l
                }
            }, {
                key: "initSegment",
                value: function() {
                    var e, t = [],
                        n = p(this.trackTypes);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var r = e.value,
                                i = this.tracks[r];
                            if ("browser" == this.env) {
                                var s = {
                                    type: r,
                                    payload: B.initSegment([i.mp4track], this.mediaDuration, this.timescale)
                                };
                                this.dispatch("buffer", s)
                            } else t.push(i.mp4track)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    if ("node" == this.env) {
                        var a = {
                            type: "all",
                            payload: B.initSegment(t, this.mediaDuration, this.timescale)
                        };
                        this.dispatch("buffer", a)
                    }
                    k("Initial segment generated.")
                }
            }, {
                key: "isReady",
                value: function() {
                    var e, t = p(this.trackTypes);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = e.value;
                            if (!this.tracks[n].readyToDecode || !this.tracks[n].samples.length) return !1
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                    return !0
                }
            }, {
                key: "remux",
                value: function(e) {
                    var t, n = p(this.trackTypes);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r = t.value,
                                i = e[r];
                            "audio" === r && this.tracks.video && !this.tracks.video.readyToDecode || i.length > 0 && this.tracks[r].remux(i)
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    this.flush()
                }
            }]), r
        }(U),
        L = function(e) {
            a(r, e);
            var t = l(r);

            function r(e, i) {
                var s;
                return n(this, r), (s = t.call(this, "buffer")).type = i, s.queue = new Uint8Array, s.cleaning = !1, s.pendingCleaning = 0, s.cleanOffset = 30, s.cleanRanges = [], s.sourceBuffer = e, s.sourceBuffer.addEventListener("updateend", (function() {
                    s.pendingCleaning > 0 && (s.initCleanup(s.pendingCleaning), s.pendingCleaning = 0), s.cleaning = !1, s.cleanRanges.length && s.doCleanup()
                })), s.sourceBuffer.addEventListener("error", (function() {
                    s.dispatch("error", {
                        type: s.type,
                        name: "buffer",
                        error: "buffer error"
                    })
                })), s
            }
            return i(r, [{
                key: "destroy",
                value: function() {
                    this.queue = null, this.sourceBuffer = null, this.offAll()
                }
            }, {
                key: "doCleanup",
                value: function() {
                    if (this.cleanRanges.length) {
                        var e = this.cleanRanges.shift();
                        k("".concat(this.type, " remove range [").concat(e[0], " - ").concat(e[1], ")")), this.cleaning = !0, this.sourceBuffer.remove(e[0], e[1])
                    } else this.cleaning = !1
                }
            }, {
                key: "initCleanup",
                value: function(e) {
                    try {
                        if (this.sourceBuffer.updating) return void(this.pendingCleaning = e);
                        if (this.sourceBuffer.buffered && this.sourceBuffer.buffered.length && !this.cleaning) {
                            for (var t = 0; t < this.sourceBuffer.buffered.length; ++t) {
                                var n = this.sourceBuffer.buffered.start(t),
                                    r = this.sourceBuffer.buffered.end(t);
                                e - n > this.cleanOffset && n < (r = e - this.cleanOffset) && this.cleanRanges.push([n, r])
                            }
                            this.doCleanup()
                        }
                    } catch (e) {
                        g("Error occured while cleaning ".concat(this.type, " buffer - ").concat(e.name, ": ").concat(e.message))
                    }
                }
            }, {
                key: "doAppend",
                value: function() {
                    if (this.queue.length && this.sourceBuffer && !this.sourceBuffer.updating) try {
                        this.sourceBuffer.appendBuffer(this.queue), this.queue = new Uint8Array
                    } catch (t) {
                        var e = "unexpectedError";
                        "QuotaExceededError" === t.name ? (k("".concat(this.type, " buffer quota full")), e = "QuotaExceeded") : (g("Error occured while appending ".concat(this.type, " buffer - ").concat(t.name, ": ").concat(t.message)), e = "InvalidStateError"), this.dispatch("error", {
                            type: this.type,
                            name: e,
                            error: "buffer error"
                        })
                    }
                }
            }, {
                key: "feed",
                value: function(e) {
                    this.queue = S(this.queue, e)
                }
            }]), r
        }(U);
    return function(r) {
        a(o, r);
        var s = l(o);

        function o(e) {
            var r;
            n(this, o), (r = s.call(this, "jmuxer")).isReset = !1;
            return r.options = Object.assign({}, {
                node: "",
                mode: "both",
                flushingTime: 500,
                maxDelay: 500,
                clearBuffer: !0,
                fps: 30,
                readFpsFromTrack: !1,
                debug: !1,
                onReady: function() {},
                onError: function() {},
                onMissingVideoFrames: function() {},
                onMissingAudioFrames: function() {}
            }, e), r.env = "object" === ("undefined" == typeof process ? "undefined" : t(process)) && "undefined" == typeof window ? "node" : "browser", r.options.debug && (v = console.log, m = console.error), r.options.fps || (r.options.fps = 30), r.frameDuration = 1e3 / r.options.fps | 0, r.remuxController = new P(r.env), r.remuxController.addTrack(r.options.mode), r.initData(), r.remuxController.on("buffer", r.onBuffer.bind(c(r))), "browser" == r.env && (r.remuxController.on("ready", r.createBuffer.bind(c(r))), r.initBrowser()), r
        }
        return i(o, [{
            key: "initData",
            value: function() {
                this.lastCleaningTime = Date.now(), this.kfPosition = [], this.kfCounter = 0, this.pendingUnits = {}, this.remainingData = new Uint8Array, this.startInterval()
            }
        }, {
            key: "initBrowser",
            value: function() {
                "string" == typeof this.options.node && "" == this.options.node && g("no video element were found to render, provide a valid video element"), this.node = "string" == typeof this.options.node ? document.getElementById(this.options.node) : this.options.node, this.mseReady = !1, this.setupMSE()
            }
        }, {
            key: "createStream",
            value: function() {
                var t = this.feed.bind(this),
                    n = this.destroy.bind(this);
                return this.stream = new e.Duplex({
                    writableObjectMode: !0,
                    read: function(e) {},
                    write: function(e, n, r) {
                        t(e), r()
                    },
                    final: function(e) {
                        n(), e()
                    }
                }), this.stream
            }
        }, {
            key: "setupMSE",
            value: function() {
                if (window.MediaSource = window.MediaSource || window.WebKitMediaSource, !window.MediaSource) throw "Oops! Browser does not support media source extension.";
                this.isMSESupported = !!window.MediaSource, this.mediaSource = new MediaSource, this.url = URL.createObjectURL(this.mediaSource), this.node.src = this.url, this.mseEnded = !1, this.mediaSource.addEventListener("sourceopen", this.onMSEOpen.bind(this)), this.mediaSource.addEventListener("sourceclose", this.onMSEClose.bind(this)), this.mediaSource.addEventListener("webkitsourceopen", this.onMSEOpen.bind(this)), this.mediaSource.addEventListener("webkitsourceclose", this.onMSEClose.bind(this))
            }
        }, {
            key: "endMSE",
            value: function() {
                if (!this.mseEnded) try {
                    this.mseEnded = !0, this.mediaSource.endOfStream()
                } catch (e) {
                    g("mediasource is not available to end")
                }
            }
        }, {
            key: "feed",
            value: function(e) {
                var t, n, r, i = !1,
                    s = {
                        video: [],
                        audio: []
                    };
                if (e && this.remuxController) {
                    if (r = e.duration ? parseInt(e.duration) : 0, e.video) {
                        e.video = S(this.remainingData, e.video);
                        var a = h(x.extractNALu(e.video), 2);
                        if (t = a[0], n = a[1], this.remainingData = n || new Uint8Array, !(t.length > 0)) return g("Failed to extract any NAL units from video data:", n), void("function" == typeof this.options.onMissingVideoFrames && this.options.onMissingVideoFrames.call(null, e));
                        s.video = this.getVideoFrames(t, r, e.compositionTimeOffset), i = !0
                    }
                    if (e.audio) {
                        if (!((t = this.remuxController.aacParser.extractAAC(e.audio)).length > 0)) return g("Failed to extract audio data from:", e.audio), void("function" == typeof this.options.onMissingAudioFrames && this.options.onMissingAudioFrames.call(null, e));
                        s.audio = this.getAudioFrames(t, r), i = !0
                    }
                    i ? this.remuxController.remux(s) : g("Input object must have video and/or audio property. Make sure it is a valid typed array")
                }
            }
        }, {
            key: "getVideoFrames",
            value: function(e, t, n) {
                var r, i = this,
                    s = [],
                    a = [],
                    o = 0,
                    u = !1,
                    c = !1;
                this.pendingUnits.units && (s = this.pendingUnits.units, c = this.pendingUnits.vcl, u = this.pendingUnits.keyFrame, this.pendingUnits = {});
                var f, l = p(e);
                try {
                    for (l.s(); !(f = l.n()).done;) {
                        var h = f.value,
                            d = new b(h);
                        d.type() !== b.IDR && d.type() !== b.NDR || x.parseHeader(d), s.length && c && (d.isfmb || !d.isvcl) && (a.push({
                            units: s,
                            keyFrame: u
                        }), s = [], u = !1, c = !1), s.push(d), u = u || d.isKeyframe(), c = c || d.isvcl
                    }
                } catch (e) {
                    l.e(e)
                } finally {
                    l.f()
                }
                if (s.length)
                    if (t)
                        if (c) a.push({
                            units: s,
                            keyFrame: u
                        });
                        else {
                            var y = a.length - 1;
                            y >= 0 && (a[y].units = a[y].units.concat(s))
                        }
                else this.pendingUnits = {
                    units: s,
                    keyFrame: u,
                    vcl: c
                };
                return r = t ? t / a.length | 0 : this.frameDuration, o = t ? t - r * a.length : 0, a.map((function(e) {
                    e.duration = r, e.compositionTimeOffset = n, o > 0 && (e.duration++, o--), i.kfCounter++, e.keyFrame && i.options.clearBuffer && i.kfPosition.push(i.kfCounter * r / 1e3)
                })), k("jmuxer: No. of frames of the last chunk: ".concat(a.length)), a
            }
        }, {
            key: "getAudioFrames",
            value: function(e, t) {
                var n, r, i = [],
                    s = 0,
                    a = p(e);
                try {
                    for (a.s(); !(r = a.n()).done;) {
                        var o = r.value;
                        i.push({
                            units: o
                        })
                    }
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
                return n = t ? t / i.length | 0 : this.frameDuration, s = t ? t - n * i.length : 0, i.map((function(e) {
                    e.duration = n, s > 0 && (e.duration++, s--)
                })), i
            }
        }, {
            key: "destroy",
            value: function() {
                if (this.stopInterval(), this.stream && (this.remuxController.flush(), this.stream.push(null), this.stream = null), this.remuxController && (this.remuxController.destroy(), this.remuxController = null), this.bufferControllers) {
                    for (var e in this.bufferControllers) this.bufferControllers[e].destroy();
                    this.bufferControllers = null, this.endMSE()
                }
                this.node = !1, this.mseReady = !1, this.videoStarted = !1, this.mediaSource = null
            }
        }, {
            key: "reset",
            value: function() {
                if (this.stopInterval(), this.isReset = !0, this.node.pause(), this.remuxController && this.remuxController.reset(), this.bufferControllers) {
                    for (var e in this.bufferControllers) this.bufferControllers[e].destroy();
                    this.bufferControllers = null, this.endMSE()
                }
                this.initData(), "browser" == this.env && this.initBrowser(), k("JMuxer was reset")
            }
        }, {
            key: "createBuffer",
            value: function() {
                if (this.mseReady && this.remuxController && this.remuxController.isReady() && !this.bufferControllers)
                    for (var e in this.bufferControllers = {}, this.remuxController.tracks) {
                        var t = this.remuxController.tracks[e];
                        if (!o.isSupported("".concat(e, '/mp4; codecs="').concat(t.mp4track.codec, '"'))) return g("Browser does not support codec"), !1;
                        var n = this.mediaSource.addSourceBuffer("".concat(e, '/mp4; codecs="').concat(t.mp4track.codec, '"'));
                        this.bufferControllers[e] = new L(n, e), this.bufferControllers[e].on("error", this.onBufferError.bind(this))
                    }
            }
        }, {
            key: "startInterval",
            value: function() {
                var e = this;
                this.interval = setInterval((function() {
                    e.options.flushingTime ? e.applyAndClearBuffer() : e.bufferControllers && e.cancelDelay()
                }), this.options.flushingTime || 1e3)
            }
        }, {
            key: "stopInterval",
            value: function() {
                this.interval && clearInterval(this.interval)
            }
        }, {
            key: "cancelDelay",
            value: function() {
                if (this.node.buffered && this.node.buffered.length > 0 && !this.node.seeking) {
                    var e = this.node.buffered.end(0);
                    e - this.node.currentTime > this.options.maxDelay / 1e3 && (console.log("delay"), this.node.currentTime = e - .001)
                }
            }
        }, {
            key: "releaseBuffer",
            value: function() {
                for (var e in this.bufferControllers) this.bufferControllers[e].doAppend()
            }
        }, {
            key: "applyAndClearBuffer",
            value: function() {
                this.bufferControllers && (this.releaseBuffer(), this.clearBuffer())
            }
        }, {
            key: "getSafeClearOffsetOfBuffer",
            value: function(e) {
                for (var t, n = "audio" === this.options.mode && e || 0, r = 0; r < this.kfPosition.length && !(this.kfPosition[r] >= e); r++) t = this.kfPosition[r];
                return t && (this.kfPosition = this.kfPosition.filter((function(e) {
                    return e < t && (n = e), e >= t
                }))), n
            }
        }, {
            key: "clearBuffer",
            value: function() {
                if (this.options.clearBuffer && Date.now() - this.lastCleaningTime > 1e4) {
                    for (var e in this.bufferControllers) {
                        var t = this.getSafeClearOffsetOfBuffer(this.node.currentTime);
                        this.bufferControllers[e].initCleanup(t)
                    }
                    this.lastCleaningTime = Date.now()
                }
            }
        }, {
            key: "onBuffer",
            value: function(e) {
                this.options.readFpsFromTrack && void 0 !== e.fps && this.options.fps != e.fps && (this.options.fps = e.fps, this.frameDuration = Math.ceil(1e3 / e.fps), k("JMuxer changed FPS to ".concat(e.fps, " from track data"))), "browser" == this.env ? this.bufferControllers && this.bufferControllers[e.type] && this.bufferControllers[e.type].feed(e.payload) : this.stream && this.stream.push(e.payload), 0 === this.options.flushingTime && this.applyAndClearBuffer()
            }
        }, {
            key: "onMSEOpen",
            value: function() {
                this.mseReady = !0, URL.revokeObjectURL(this.url), "function" == typeof this.options.onReady && this.options.onReady.call(null, this.isReset)
            }
        }, {
            key: "onMSEClose",
            value: function() {
                this.mseReady = !1, this.videoStarted = !1
            }
        }, {
            key: "onBufferError",
            value: function(e) {
                if ("QuotaExceeded" == e.name) return k("JMuxer cleaning ".concat(e.type, " buffer due to QuotaExceeded error")), void this.bufferControllers[e.type].initCleanup(this.node.currentTime);
                "InvalidStateError" == e.name ? (k("JMuxer is reseting due to InvalidStateError"), this.reset()) : this.endMSE(), "function" == typeof this.options.onError && this.options.onError.call(null, e)
            }
        }], [{
            key: "isSupported",
            value: function(e) {
                return window.MediaSource && window.MediaSource.isTypeSupported(e)
            }
        }]), o
    }(U)
}));
