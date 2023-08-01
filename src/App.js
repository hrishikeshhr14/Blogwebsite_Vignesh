import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Vignesh",
      message:
        "Recently, India’s third moon mission, Chandrayaan-3, was successfully launched onboard a Launch Vehicle Mark-3 (LVM-3) rocket from the Satish Dhawan Space Centre in Sriharikota. This is India’s second attempt at soft-landing on the lunar surface after the failure of previous attempt, Chandrayaan-2, in 2019. So far, only three countries, the U.S., Russia and China, have successfully soft-landed on the moon. Chandrayaan-3 seeks to study moonquakes, composition of lunar surface and atmosphere, understand Earth’s life-like elements, how heat passes through the lunar surface and plasma environment on the Moon.",
      timestamp: new Date()
    },
    {
      username: "Hrishi",
      message:
        "Apple is committed to protecting user privacy on our platforms. We know that there are a small set of APIs that can be misused to collect data about users’ devices through fingerprinting, which is prohibited by our Developer Program License Agreement. To prevent the misuse of these APIs, we announced at WWDC23 that developers will need to declare the reasons for using these APIs in their app’s privacy manifest.",
      timestamp: new Date()
    },
    {
      username: "Sam",
      message:
        "'Natural' foods are trendy, and proponents claim that little or no processing helps preserve the food's inherent flavor. Research now shows that, at least for certain artisanal, bean-to-bar chocolates, this could indeed be the case. The team reports that unroasted, 'raw' chocolate features certain compounds responsible for fruity flavors and sour tastes that are lost when the cacao beans are processed at high temperatures.",
      timestamp: new Date()
    },
    {
      username: "Raja",
      message:
        "Rajaraja Cholan announces that his son Rajendra and the Chola army are helping the Vengai king Sakthivarman and his younger brother Vimalathithan recapture the kingdom from Satyasiriyan. Satyasiriyan runs back into his palace whose minister, Bala Devar, devises a plan to destroy Raja Raja Chola.",
      timestamp: new Date()
    }
  ]);
  return (
    <div>
      <Navbar />
      <h1>Welcome to my blog website!</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            message={post.message}
            timestamp={post.timestamp}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
