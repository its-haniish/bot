const puppeteer=require("puppeteer");

const messages=[
    "Bhosdi ke, ye kaisi confession hai? 🔥",
    "Chutiye, sach bolna seekh! 😎",
    "Teri maa ki, ye confession hai ya chutiyapa? 😊",
    "Bhenchod, confession likhne ki aukaat hai? 🤖",
    "Madarchod, itna bada jhoot kaise bol leta hai? 💻",
    "Lodu, sirf bakchodi karni hai ya asli confession bhi hai? 🚀",
    "Chutiya banane aaye ho ya koi serious baat hai? 🛠️",
    "Gaandu, ek bhi confession sahi likhna aata hai tujhe? 🤔",
    "Bhosdike, sach likhne ki himmat nahi hai? ❤️",
    "Hamesha gaand marwane wale confession mat bhej! 😃",
    "Bhadwe, tu doctor hai ya script writer? 😆",
    "Abe chutye, ye Reddit nahi hai! 🤡",
    "Bhen ke lode, kabhi asli confession bhi likh diya kar! 🤦‍♂️",
    "Oye madarchod, dil se likh, movie script nahi! 🎬",
    "Gaandu, sach bolna itna mushkil hai kya? 🧐",
    "Bhosdiwale, seedhe bol na kya kehna hai! 🤷‍♂️",
    "Teri gaand mein rocket ghusa du kya? 🚀",
    "Bakchod, ye confession hai ya masala news? 📰",
    "Bhosdike, kya tu Bollywood scriptwriter hai? 🎭",
    "Chutiya, dhang ka confession bhej, warna block! 🚫",
    "Bhen ke lawde, sharam kar thoda! 🙄",
    "Abe gaandu, ye ek aur fake kahani hai na? 😑",
    "Lodu, tu journalist ban ja, confession tere bas ka nahi! 📝",
    "Bhosdi ke, asli baat likh, chutiyapa nahi! 👊",
    "Madarchod, tere jhooth pe Amazon series ban sakti hai! 📺",
    "Bhen ke chode, confession likhna ek kala hai, jo tujhe nahi aata! 🎨",
    "Gaandu, kya tu Anurag Kashyap ka lost brother hai? 🎥",
    "Bhosdiwale, ye confession likhne se pehle apni zindagi dekh! 🔄",
    "Chutiyapa level 100! 🚀",
    "Bhenchod, sach likhne mein itna dukh kyu? 🤕",
    "Abe madarchod, sachai ka ek percent bhi hai isme? 📉",
    "Bhosdike, tujhe sach likhne se allergy hai kya? 🤧",
    "Chutiya, aur jhooth likh, bas Oscar lele ab! 🏆",
    "Oye lodu, confession likh raha hai ya fantasy novel? 📚",
    "Bhen ke lawde, itna overacting mat kar! 🎭",
    "Bhosdi ke, aise jhooth likhoge to log trust kaise karein? 🤥",
    "Chut ke dhakkan, kahani sunane aaye ho kya? 📖",
    "Bhen ke bhikhari, asli zindagi se bhi kuch seekh! 🏠",
    "Bhosdike, jab dil se likhega tab samajh aayega! 💖",
    "Madarchod, tere jhooth pe NASA research kar rahi hai! 🚀",
    "Chutiye, confession likhne se pehle dimag bhi laga liya kar! 🧠",
    "Bhen ke chode, school me essay likhna nahi sikha kya? ✍️",
    "Bhosdi ke, sach likhna itna bhi mushkil nahi! 😤",
    "Gaandu, tu writer hai ya pagal khane ka patient? 🤡",
    "Madarchod, ab bas kar, nahi to meme bana dunga! 😂",
    "Bhen ke lode, agar ye sach hai to duniya gol nahi hai! 🌍",
    "Chut ke dukan, ye confession likhne se pehle socha tha? 🤦‍♂️",
    "Abe bhosdi ke, tu joke likh raha hai kya? 🤣",
    "Bhen ke chode, ye confession hai ya trolling attempt? 🤔",
    "Madarchod, sach bol warna chappal padengi! 👞"
];

const getRandomMessage=() => messages[Math.floor(Math.random()*messages.length)];

const sendMessage=async () => {
    while (true) { // Infinite loop to keep sending messages
        try {
            console.log("Starting browser...");
            const browser=await puppeteer.launch({ headless: true }); // Open new browser every time
            const page=await browser.newPage();

            await page.goto("https://ngl.link/crssiet_confession28149", { waitUntil: "domcontentloaded" });

            const textAreaSelector="textarea#question";
            await page.waitForSelector(textAreaSelector);

            const message=getRandomMessage();
            await page.type(textAreaSelector, message);

            const submitButtonSelector="button.submit";
            await page.waitForSelector(submitButtonSelector);
            await page.click(submitButtonSelector);

            console.log(`✅ Message sent: "${message}"`);

            await page.close();
            await browser.close(); // Completely close the browser

            // Random delay between 30-60 seconds before restarting
            // const delay=100;
            // console.log(`⏳ Waiting ${delay/1000} seconds before next message...\n`);
            // await new Promise(resolve => setTimeout(resolve, delay));

        } catch (error) {
            console.error("❌ Error sending message:", error);
        }
    }
};

sendMessage();
