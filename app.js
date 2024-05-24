const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div style="margin-left: auto;
    margin-right: auto;
    max-width: fit-content;">
    <p>name: Panupong Satianat</p>
    <p>id: 65130543</p>
    <div style="width:100%;">
    <img src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/318827619_9249124578438376_7638209387237165017_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHGJtfoDjRiOO1cgGG7yT4NShehpZdlAPZKF6Gll2UA9nokiqmnTQxHrnuk5-A04vbfHAb1TkjNFDfH29BJFXr1&_nc_ohc=fM_trEGpZTIQ7kNvgFG6YRY&_nc_ht=scontent.fbkk2-8.fna&oh=00_AYBMSpYO6wv0aFIv_gi-BazVJcoBTh5quM1l5O2Ktrdr_A&oe=665665DB" style="width:300px;height:300px;" >
    </div>
    
    <a href="/myresearch">MyResearch</a>
    <a href="/researchplan">My Research Plan</a>
    <a href="/rest/researchplan/">Rest My Research Plan</a>
    </div>
  `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
    <p>ในปัจจุบัน สังคมไทยมีการพัฒนาด้านความคิด สังคมนิยม ไลฟ์ไตล์ การดำรงชีวิตของคนในสังคมมีความทันสมัยอย่างต่อเนื่อง เกิดความเปลี่ยนแปลงทางเศรษฐกิจอย่างรวดเร็ว ส่งผลต่อการใช้ชีวิตของผู้คนในสังคม การเลือกใช้สินค้า รวมถึงการซื้อขายในตลาดออนไลน์ อาทิ สินค้าแบรนด์ต่าง ๆ ปัญหาสินค้าลอกเลียนแบบเป็นปัญหาทั่วโลก และมักเกิดขึ้นกับสินค้าที่ มีมูลค่าสูง โดยปัญหาดังกล่าวส่งผลกระทบกับธุรกิจการค้า อีกทั้ง การสร้างความไว้วางใจในตลาดออนไลน์ นอกจากนี้ยังมีผลกระทบต่อผู้ซื้อที่ต้องการสินค้าที่มีคุณภาพและถูกต้อง สินค้าแบรนด์ที่มักมีการปลอมแปลงมากที่สุด ได้แก่ รองเท้าสปอร์ตแบรนด์ยี่ห้อดัง เช่น ไนกี้ (Nike) ที่แพร่หลายในตลาดสินค้าแบรนด์ที่มีชื่อเสียง จะเห็นได้ว่าสินค้านี้มีอยู่จำนวนมาก ซึ่งสามารถตรวจสอบสินค้าได้เบื้องต้นจากบาร์โค้ด อย่างไรก็ตาม วิธีนี้ก็มีข้อจำกัด เช่น แท็กสามารถถูกลบ ปลอมแปลง ทำซ้ำได้ ส่วนวิธีตรวจสอบอื่น ๆ เช่น การตรวจสอบลักษณะภายนอกของสินค้า ซึ่งไม่สามารถบ่งบอกได้ชัดเจนว่าสินค้านี้เป็นสินค้าลอกเลียนแบบ เนื่องจากมีลักษณะที่เทียบเท่าสินค้าจริง
    ผู้วิจัยพบว่าปัญหาของผู้ซื้อสำหรับการซื้อขายรองเท้าสปอร์ตคือ ขาดความรู้ในการตรวจสอบจำแนกหรือเปรียบเทียบสินค้า อย่างไรก็ตาม ด้วยข้อจำกัดของหลักการตรวจสอบกระเป๋าของแท้และของปลอมในแต่ละรุ่นนั้น แตกต่างกัน ทำให้ยากต่อการตรวจสอบในแต่ละจุดของแต่ละรุ่น ซึ่งจุดสำคัญที่ตรงกันและเป็น เอกลักษณ์คือ วัสดุหลักของรองเท้าสปอร์ต (ผ้า และหนัง) งานวิจัยนี้จึงเลือกการตรวจสอบการ ปลอมแปลงจากวัสดุที่ใช้ทำรองเท้าสปอร์ต กล่าวคือ Inside Label , Tongue Label , Insole , Outsole , Interior , Sewing , Date Code , Heel , SHOE SUPPORT และBox Stamp โดยใช้เทคนิคการเรียนรู้เชิงลึก ได้แก่ โครงข่าย ประสาทคอนโวลูชัน (Convolutional Neural Networks) และการเรียนรู้ถ่ายโอน (Transfer Learning)   เพื่อจำแนกประเภทภาพวัสดุรองเท้าสปอร์ตแบรนด์ปลอมร่วมกับการสกัดคุณลักษณะสำคัญแบบ Local Binary Pattern (LBP) ทั้งนี้ จะประเมินสมรรถนะของแบบจำลองที่สร้างขึ้นด้วย ค่าตัววัด Accuracy, Precision, Recall และ F1-score.
    </p>
    <a href="/">MyHome</a>
  `);
});


app.get("/researchplan", (req, res) => {
  res.send(`
  <div>
    <h2>My_Research_Plan</h2>

    <table border="1">
      <tr>
        <th></th>
        <th colspan="8">เดือน</th>
      </tr>
      <tr>
        <th>ขั้นตอน</th>
        <th>ตุลาคม</th>
        <th>พฤศจิกายน</th>
        <th>ธันวาคม</th>
        <th>มกราคม</th>
        <th>กุมภาพันธ์</th>
        <th>มีนาคม</th>
        <th>เมษายน</th>
        <th>พฤษภาคม</th>
      </tr>
      <tr>
        <td>ศึกษากระบวนการและประยุกต์ใช้ Image classification โดย Deep learning </td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ศึกษาและทำความเข้าใจเกี่ยวกับกระบวนการชุบแข็งชิ้นงานและงานวิจัยที่เกี่ยวข้อง</td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ออกแบบโครงสร้าง การทดลอง ส่วนของ Model Deeplearning</td>
        <td></td>
        <td style="text-align: center;"></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Create Model Deep learning</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบ ความแม่มยำของ Model Deep learning</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ปรับแต่ง Model Deep learning </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ทดสอบการทำงานหลังปรับแต่ง Model Deep learning</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
        <td></td>
      </tr>
      <tr>
        <td>ประเมินผล และ สรุป</td>
        <td></td>
        <td></td>
        <td style="text-align: center;"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: center;">&#10004;</td>
      </tr>
    </table>  
    <a href="/">MyHome</a>
  </div>
  `);
});



app.get("/rest/researchplan/", (req, res) => {
  const researchPlan = [
    {
      id: 1,
      description: "ศึกษากระบวนการและประยุกต์ใช้ Image classification โดย Deep learning",
      startDate: "2023-10-01",
      endDate: "2023-10-31"
    },
    {
      id: 2,
      description: "ศึกษาและทำความเข้าใจเกี่ยวกับกระบวนการชุบแข็งชิ้นงานและงานวิจัยที่เกี่ยวข้อง",
      startDate: "2023-11-01",
      endDate: "2023-11-30"
    },
    {
      id: 3,
      description: "ออกแบบโครงสร้าง การทดลอง ส่วนของ Model Deeplearning",
      startDate: "2023-12-01",
      endDate: "2023-12-31"
    },
    {
      id: 4,
      description: "Create Model Deep learning",
      startDate: "2024-01-01",
      endDate: "2024-01-31"
    },
    {
      id: 5,
      description: "ทดสอบ ความแม่มยำของ Model Deep learning",
      startDate: "2024-02-01",
      endDate: "2024-02-15"
    },
    {
      id: 6,
      description: "ปรับแต่ง Model Deep learning",
      startDate: "2024-02-16",
      endDate: "2024-03-31"
    },
    {
      id: 7,
      description: "ทดสอบการทำงานหลังปรับแต่ง Model Deep learning",
      startDate: "2024-04-01",
      endDate: "2024-04-30"
    },
    {
      id: 8,
      description: "ประเมินผล และ สรุป",
      startDate: "2024-05-01",
      endDate: "2024-05-31"
    }
  ];

  res.json(researchPlan);
});

app.listen(8080);
