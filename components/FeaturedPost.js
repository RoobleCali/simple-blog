import Image from "next/image";
import shakuur3 from "../components/shakuur/shakuur1.jpeg";
import shakuur1 from "../components/shakuur/278577873_739218143738897_6884632490859057962_n.jpeg";
import shakuur4 from "../components/shakuur/shakuur3.jpeg";

function FeaturedPost() {
  return (
    <div className="mt-10">
      {" "}
      <h1 className="text-2xl text-center">Featured Post</h1>
      {/* cards */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 h-max mt-14">
        <div className="flex flex-col items-center p-2 space-y-4 transition-all duration-300 border-2 border-blue-600 rounded-md cursor-pointer max-w-fit hover:border-gray-200">
          <Image src={shakuur3} alt="shakuur" className="w-full" />{" "}
          <h1 className="w-full text-lg font-bold ">Waa maxey react js</h1>
          <h1 className="w-full">
            "React (sidoo kale loo yaqaan React.js ama ReactJS) waa maktabad
            bilaash ah oo furan-dhamaadka-dhamaadka JavaScript [3] si loo dhiso
            is-dhexgal isticmaale oo ku salaysan qaybaha UI. Waxaa ilaaliya Meta
            (oo hore u ahaan jirtay Facebook) iyo bulsho ka kooban
            horumariyeyaal iyo shirkado.[4][5][6] React waxa loo isticmaali
            karaa saldhig ahaan horumarinta codsiyada hal bog ah, moobilka, ama
            server-ka la sameeyay oo leh qaab-dhismeedka sida Next.js. Si
            kastaba ha ahaatee, React kaliya waxay khusaysaa maamulka gobolka
            iyo u gudbinta gobolkaas DOM, sidaa darteed abuurista codsiyada
            React waxay caadi ahaan u baahan tahay adeegsiga maktabado dheeri ah
            oo marin ah, iyo sidoo kale qaar ka mid ah shaqeynta dhinaca
            macmiilka.[7][8] Virtual DOM Muuqaal kale oo xusid mudan ayaa ah
            adeegsiga Qaabka Shayga Dukumentiga ah, ama DOM-gaaban. React waxa
            ay abuurtaa kaydka qaab-dhismeedka xogta-xusuusta, waxa ay
            xisaabisaa kala duwanaanshaha ka dhashay, ka dibna waxa ay si hufan
            u cusboonaysiisaa browserka soo bandhigay DOM.[11] Habkan waxa loo
            yaqaan dib-u-heshiisiin. Tani waxay u oggolaanaysaa
            barnaamij-sameeyaha inuu u qoro kood sida haddii bogga oo dhan lagu
            sameeyay isbeddel kasta, halka maktabadaha React kaliya ay bixiyaan
            qaybo-hoosaadyo dhab ahaantii isbeddelaya. Xulashadan waxay bixisaa
            kor u qaadida waxqabadka weyn.[12] Waxay badbaadinaysaa dadaalka dib
            u xisaabinta qaabka CSS, qaabka bogga iyo u-bandhigista bogga oo
            dhan.[12]",
          </h1>
        </div>
        <div className="flex flex-col items-center p-2 space-y-4 transition-all duration-300 border-2 border-blue-600 rounded-md cursor-pointer max-w-fit hover:border-gray-200">
          <Image src={shakuur1} alt="shakuur" className="w-full" />{" "}
          <h1 className="w-full text-lg font-bold ">Waa next react js</h1>
          <h1 className="w-full">
            "Next.js waa qaab dhismeed horumarineed oo il furan oo uu sameeyay
            Vercel oo awood u siinaya codsiyada shabakada React-ku-salaysan ee
            leh samaynta dhinaca server-ka iyo abuurista mareegaha deg-degga ah.
            Dukumeenti ka falcelintu waxay sheegaysaa Next.js oo ka mid ah
            Qalabka lagu taliyay isagoo kula talinaya horumariyeyaasha sidii xal
            marka Dhismaha degelka server-ka ee Node.js[4] Meesha abka React-ka
            dhaqameed ay kaliya ka dhigi karaan nuxurkooda browserka-dhinaca
            macmiilka, Next.js waxay kordhisaa shaqadan si loogu daro codsiyada
            lagu sameeyay dhinaca server-ka. Xuquuqda daabacaadda iyo
            calaamadaha ganacsiga ee Next.js waxaa iska leh Vercel, [5] oo sidoo
            kale ilaalisa oo hogaamisa horumarkeeda il furan.[6]",
          </h1>
        </div>
        <div className="flex flex-col items-center p-2 space-y-4 transition-all duration-300 border-2 border-blue-600 rounded-md cursor-pointer max-w-fit hover:border-gray-200">
          <Image src={shakuur4} alt="shakuur" className="w-full" />{" "}
          <h1 className="w-full text-lg font-bold ">Waa next react js</h1>
          <h1 className="w-full">
            "Next.js waa qaab dhismeed horumarineed oo il furan oo uu sameeyay
            Vercel oo awood u siinaya codsiyada shabakada React-ku-salaysan ee
            leh samaynta dhinaca server-ka iyo abuurista mareegaha deg-degga ah.
            Dukumeenti ka falcelintu waxay sheegaysaa Next.js oo ka mid ah
            Qalabka lagu taliyay isagoo kula talinaya horumariyeyaasha sidii xal
            marka Dhismaha degelka server-ka ee Node.js[4] Meesha abka React-ka
            dhaqameed ay kaliya ka dhigi karaan nuxurkooda browserka-dhinaca
            macmiilka, Next.js waxay kordhisaa shaqadan si loogu daro codsiyada
            lagu sameeyay dhinaca server-ka. Xuquuqda daabacaadda iyo
            calaamadaha ganacsiga ee Next.js waxaa iska leh Vercel, [5] oo sidoo
            kale ilaalisa oo hogaamisa horumarkeeda il furan.[6]",
          </h1>
        </div>
      </div>
    </div>
  );
}
export default FeaturedPost;
