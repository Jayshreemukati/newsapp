import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import News from "./News";
import CancelIcon from "@mui/icons-material/Cancel";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import Ternary from "./Ternary";

export default function Home() {
  const [display, setDisplay] = useState("none");

  return (
    <div className="bk">
      <nav className="first-nav">
        <div>
          <marquee>
            अब एक सेशन में दो फुल-टाइम कोर्सेस कर सकेंगे छात्र, UGC के चेयरमैन
            का एलान, एक साथ मिलेंगी दो डिग्रियां
          </marquee>
        </div>
      </nav>

      <nav className="top-nav">
        <DehazeIcon
          className="menu-icon"
          onClick={() => {
            setDisplay("block");
          }}
        ></DehazeIcon>

        <div>
          <img
            className="logo"
            src="../logo.png"
            // src="data:image/jpeg;base64,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"
            // src="https://www.designevo.com/res/templates/thumb_small/red-letter-n.png"
            alt="News App"
          />
        </div>
      </nav>

      <div className="brknews">
        <div>
          <h1>BREAKING NEWS:</h1>
        </div>
        <div className="brknws">
          <marquee>
            अब केमेस्‍ट्री की क‍िताबों में नहीं पढ़ेंगे पीरियोडिक टेबल, NCERT ने
            फिर किया सिलेबस में बदलाव
          </marquee>
        </div>
      </div>

      <nav className="side-bar" style={{ display: display }}>
        <CancelIcon
          className="crossbtn"
          onClick={() => {
            setDisplay("none");
          }}
        >
          crossbutton
        </CancelIcon>
        <div>
          <Link to="">home</Link>
          {/* <a href="">Home</a> */}
        </div>
        <div>
          <a href="">category</a>
        </div>
        <div>
          <a href="">sub category</a>
        </div>
        <div>
          <a href="">post</a>
        </div>
      </nav>

      <News
        img="https://img.naidunia.com/naidunia/ndnimg/30052023/30_05_2023-moscow_drone_attack_n_.jpg"
        title="Russia: राजधानी मॉस्को पर हुआ ड्रोन अटैक, मेयर ने किया दावा, कई इमारतें क्षतिग्रस्त"
        discription=" Russia drone attack: रूस की राजधानी मॉस्को के मेयर सर्गेई सोबयानिन ने दावा किया है कि मंगलवार की सुबह शहर पर ड्रोन अटैक हुआ, जिसमें मॉस्को की कई इमारतें क्षतिग्रस्त हो गईं। वैसे यूएवी हमले के कारण इन इमारतों को मामूली क्षति हुई। सर्गेई सोबयानिन ने कहा कि घटना के दौरान कोई घायल नहीं हुआ और आपातकालीन सेवाएं घटना के संबंध में जांच कर रही हैं। रूसी संवाद एजेंसी TASS की रिपोर्ट में कहा गया है कि ड्रोन हमले के बाद कई निवासियों को बाहर निकाला गया। हमले की साइट पर विशेष सेवाओं का काम समाप्त होने के बाद निवासी अपने अपार्टमेंट में वापस जाने में सक्षम होंगे।"
      />
      <News
        img="https://img.naidunia.com/naidunia/ndnimg/08052023/08_05_2023-the_kerala_story_topic_page_.jpg"
        title="The Kerala Story (द केरल स्टोरी)"
        discription="विवादों के बीच घिरी द केरल स्टोरी फिल्म खूब सुर्खियां बटोर रही है। फिल्म 5 मई को सिनेमाघरों में रिलीज हो गई है। दर्शक काफी बेसब्री से इस फिल्‍म का इंतजार कर रहे थे। कई जगह फिल्‍म की रिलीज को बैन करने की मांग भी की गई है। हालांकि इसे खारिज कर दिया गया है। द केरल स्टोरी फिल्म केरल की 32 हजार महिलाओं के जबरन धर्मांतरण और उनके आईएसआईएस में शामिल करने की कहानी है। इस फिल्‍म में अदा शर्मा, योगिता बिहानी, सोनिया बलानी और सिद्धि इडनानी ने खास रोल निभाया है। फिल्म को सुदीप्तो सेन ने निर्देशित किया है। कर्नाटक दौरे में चुनावी रैली को संबोधित करते हुए प्रधानमंत्री नरेंद्र मोदी ने भी द केरल स्टोरी का जिक्र किया था। वहीं मध्य प्रदेश के सीएम शिवराज सिंह चौहान ने द केरल स्टोरी को अपने प्रदेश में टैक्स फ्री कर दिया है।"
      />
      <News
        img="https://img.naidunia.com/naidunia/ndnimg/30052023/30_05_2023-hdfcbankfdrateshike.jpg"
        title="HDFC Bank FD Interest Rate:"
        discription="देश में लोग सुरक्षित निवेश के लिए फिक्स्ड डिपॉजिट में निवेश करते हैं। एफडी में ग्राहकों को एक निश्चित दर पर ब्याज मिलता है। इस बीच एचडीएफसी बैंक ने उच्च ब्याज दरों पर दो विशेष एफडी शुरू की है। बैंक की वेबसाइट के अनुसार, स्पेशल एडिशन फिक्स्ड डिपॉजिट पेश की गई है। जिसमें 35 महीनों की अवधि के लिए 7.20 फीसदी और 55 महीनों की अवधि के लिए 7.25 फीसदी की दर से ब्याज मिलेगा। वहीं, सीनियर सिटीजन को 0.50 फीसदी अतिरिक्त लाभ मिलेगा।"
      />
      <News
        img="https://img.naidunia.com/naidunia/ndnimg/20042023/20_04_2023-summer_season_(1).jpg"
        title="Summer (गर्मी का मौसम)"
        discription="Summer Season । भारत में गर्मी आमतौर पर मार्च के अंत या अप्रैल की शुरुआत में शुरू होती है। इस दौरान देश के कुछ राज्यों में तापमान काफी चरम पर रहता है। जून या जुलाई की शुरुआत तक मानसून दस्तक दे देता है, तब तक देश में गर्मी के हालात रहते हैं। देश के कई हिस्सों में तापमान 40 डिग्री सेल्सियस से अधिक हो जाता है और ऐसे में स्वास्थ्य के प्रति भी अलर्ट रहने की जरूरत होती है। उत्तरी भारत में गर्मी के मौसम में शुष्क गर्मी, गर्म हवाएं और साफ आसमान होता है। दिल्ली, आगरा और जयपुर जैसे शहरों में तापमान 45 डिग्री सेल्सियस तक पहुंचने की संभावना रहती है। दक्षिण में तटीय क्षेत्रों जैसे कि केरल और गोवा में, उच्च आर्द्रता और कभी-कभी वर्षा होती हैं। अत्यधिक गर्मी के बावजूद भारत में गर्मी का मौसम भी उत्सव और उत्सव का समय है। कई क्षेत्रों में होली, बैसाखी और ईद जैसे धार्मिक त्यौहार आयोजित किए जाते हैं, जबकि अन्य क्षेत्रों में मेलों और त्योहारों का आयोजन होता है। इस समय के दौरान स्कूल और कॉलेज बंद रहते हैं और कई परिवार छुट्टी मनाने के लिए निकल जाते हैं।"
      />
{/* <Ternary/> */}
      <Dashboard />
      <Footer />
    </div>
  );
}
