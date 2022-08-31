"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/shakuur/me.png
/* harmony default export */ const me = ({"src":"/_next/static/media/me.1d86dc6a.png","height":600,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0klEQVR42mNwsDPXUFMqL82cObNr+bJp+3avWrpworGhNoOTvbmpkU5aWvSU6rS9KyZv2bhw0dxebW1VBgdbEycHCz1dzfoY91Mr+jeuntndUamtrcbgYGdiY2kYF+Wf42+3pa/02L5VUyY2KchJg3QYG6jmZCW4WRotm9J2dP/amVNbJCXFGawsjBkYGJoam48cPHRw3562urKWumJdoFFGRgZAiXlz5z24f3fr5o0uto6RIcHmxnoMmhrqQIlly1ZcvXJ56tQpHm5uvr7eWhrKAE5oTJHb+W9PAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Showcase.js





function Showcase() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col-reverse items-center justify-between md:flex-row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-6 text-center sm:text-left",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-3xl font-bold text-gray-800 ",
                        children: "Personal Blog"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xl text-gray-400 ",
                        children: [
                            "i am front-end developer with couple of experiance ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " i design websites convert into funtion web page"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-center space-x-4 text-2xl text-center transition-all cursor-pointer sm:justify-start ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://github.com/Shakuurally",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsGithub, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://instagram.com/abdishakuurally",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsInstagram, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://twitter.com/Shakuurally",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsTwitter, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "p-2 text-white duration-100 bg-blue-600 rounded-lg hover:-translate-y-1 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/Blog",
                            download: true,
                            children: "Browse all Blogs"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-10 w-80 sm:m-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: me,
                    alt: "",
                    className: "object-cover rounded-full "
                })
            })
        ]
    });
}
/* harmony default export */ const components_Showcase = (Showcase);

// EXTERNAL MODULE: ./components/shakuur/shakuur1.jpeg
var shakuur1 = __webpack_require__(8103);
// EXTERNAL MODULE: ./components/shakuur/278577873_739218143738897_6884632490859057962_n.jpeg
var _278577873_739218143738897_6884632490859057962_n = __webpack_require__(5362);
// EXTERNAL MODULE: ./components/shakuur/shakuur3.jpeg
var shakuur3 = __webpack_require__(4019);
;// CONCATENATED MODULE: ./components/FeaturedPost.js





function FeaturedPost() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-10",
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl text-center",
                children: "Featured Post"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 h-max mt-14",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center p-2 space-y-4 transition-all duration-300 border-2 border-blue-600 rounded-md cursor-pointer max-w-fit hover:border-gray-200",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: shakuur1/* default */.Z,
                                alt: "shakuur",
                                className: "w-full"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "w-full text-lg font-bold ",
                                children: "Waa maxey react js"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "w-full",
                                children: '"React (sidoo kale loo yaqaan React.js ama ReactJS) waa maktabad bilaash ah oo furan-dhamaadka-dhamaadka JavaScript [3] si loo dhiso is-dhexgal isticmaale oo ku salaysan qaybaha UI. Waxaa ilaaliya Meta (oo hore u ahaan jirtay Facebook) iyo bulsho ka kooban horumariyeyaal iyo shirkado.[4][5][6] React waxa loo isticmaali karaa saldhig ahaan horumarinta codsiyada hal bog ah, moobilka, ama server-ka la sameeyay oo leh qaab-dhismeedka sida Next.js. Si kastaba ha ahaatee, React kaliya waxay khusaysaa maamulka gobolka iyo u gudbinta gobolkaas DOM, sidaa darteed abuurista codsiyada React waxay caadi ahaan u baahan tahay adeegsiga maktabado dheeri ah oo marin ah, iyo sidoo kale qaar ka mid ah shaqeynta dhinaca macmiilka.[7][8] Virtual DOM Muuqaal kale oo xusid mudan ayaa ah adeegsiga Qaabka Shayga Dukumentiga ah, ama DOM-gaaban. React waxa ay abuurtaa kaydka qaab-dhismeedka xogta-xusuusta, waxa ay xisaabisaa kala duwanaanshaha ka dhashay, ka dibna waxa ay si hufan u cusboonaysiisaa browserka soo bandhigay DOM.[11] Habkan waxa loo yaqaan dib-u-heshiisiin. Tani waxay u oggolaanaysaa barnaamij-sameeyaha inuu u qoro kood sida haddii bogga oo dhan lagu sameeyay isbeddel kasta, halka maktabadaha React kaliya ay bixiyaan qaybo-hoosaadyo dhab ahaantii isbeddelaya. Xulashadan waxay bixisaa kor u qaadida waxqabadka weyn.[12] Waxay badbaadinaysaa dadaalka dib u xisaabinta qaabka CSS, qaabka bogga iyo u-bandhigista bogga oo dhan.[12]",'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center p-2 space-y-4 transition-all duration-300 border-2 border-blue-600 rounded-md cursor-pointer max-w-fit hover:border-gray-200",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: _278577873_739218143738897_6884632490859057962_n/* default */.Z,
                                alt: "shakuur",
                                className: "w-full"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "w-full text-lg font-bold ",
                                children: "Waa next react js"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "w-full",
                                children: '"Next.js waa qaab dhismeed horumarineed oo il furan oo uu sameeyay Vercel oo awood u siinaya codsiyada shabakada React-ku-salaysan ee leh samaynta dhinaca server-ka iyo abuurista mareegaha deg-degga ah. Dukumeenti ka falcelintu waxay sheegaysaa Next.js oo ka mid ah Qalabka lagu taliyay isagoo kula talinaya horumariyeyaasha sidii xal marka Dhismaha degelka server-ka ee Node.js[4] Meesha abka React-ka dhaqameed ay kaliya ka dhigi karaan nuxurkooda browserka-dhinaca macmiilka, Next.js waxay kordhisaa shaqadan si loogu daro codsiyada lagu sameeyay dhinaca server-ka. Xuquuqda daabacaadda iyo calaamadaha ganacsiga ee Next.js waxaa iska leh Vercel, [5] oo sidoo kale ilaalisa oo hogaamisa horumarkeeda il furan.[6]",'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center p-2 space-y-4 transition-all duration-300 border-2 border-blue-600 rounded-md cursor-pointer max-w-fit hover:border-gray-200",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: shakuur3/* default */.Z,
                                alt: "shakuur",
                                className: "w-full"
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "w-full text-lg font-bold ",
                                children: "Waa next react js"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "w-full",
                                children: '"Next.js waa qaab dhismeed horumarineed oo il furan oo uu sameeyay Vercel oo awood u siinaya codsiyada shabakada React-ku-salaysan ee leh samaynta dhinaca server-ka iyo abuurista mareegaha deg-degga ah. Dukumeenti ka falcelintu waxay sheegaysaa Next.js oo ka mid ah Qalabka lagu taliyay isagoo kula talinaya horumariyeyaasha sidii xal marka Dhismaha degelka server-ka ee Node.js[4] Meesha abka React-ka dhaqameed ay kaliya ka dhigi karaan nuxurkooda browserka-dhinaca macmiilka, Next.js waxay kordhisaa shaqadan si loogu daro codsiyada lagu sameeyay dhinaca server-ka. Xuquuqda daabacaadda iyo calaamadaha ganacsiga ee Next.js waxaa iska leh Vercel, [5] oo sidoo kale ilaalisa oo hogaamisa horumarkeeda il furan.[6]",'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_FeaturedPost = (FeaturedPost);

;// CONCATENATED MODULE: ./pages/index.js



function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-36",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Showcase, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_FeaturedPost, {})
        ]
    });
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,259], () => (__webpack_exec__(2265)));
module.exports = __webpack_exports__;

})();