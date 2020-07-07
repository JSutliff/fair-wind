const pageTitleElem = document.getElementById("page-title");
const paragraph0 = document.getElementById("education-paragraph-0");
const paragraph1 = document.getElementById("education-paragraph-1");
const paragraph2 = document.getElementById("education-paragraph-2");
const img0 = document.getElementById("img-0");
const img1 = document.getElementById("img-1");

const coveringBtn = document.getElementById("covering-btn");
const attachmentBtn = document.getElementById("attachment-btn");

var pages = {
  section1: {
    title: "Roof Covering, Deck Attachment, Geometry",
    paragraphs: [
      "To meet Section 1, titled Building Code your home must be built after  March 1st, 2002. (In the Tampa Bay area) OR Sept 1, 1994 in the Miami-Dade County, South Florida area).",
      "To meet Section 2, titled Roof Covering, of the form your roof or the covering on your roof must meet the 2001 Florida Building Code. The only way to accomplish this is to have your roof replaced so that it can meet these newer codes. If you choose to have your roof redone you will also be eligible to meet Section 7 (Secondary Water Resistance) of the form. This is because most new roofs being constructed now are being installed with a Secondary Water Resistance system.",
      "To meet Section 3, titled Roof Deck Attachment, you must have your roof redone to meet the 2001 Florida Building Code. This would require taking off your current roof deck and having plywood or an OSB roof attached with a minimum of 6d nails spaced 6” on the edge and 12” in the field.",
      "To meet Section 5, titled Roof Geometry, you must have a hip roof. If you do not have a hip roof there is no other way to meet this category other than having a new roof put on your home. Which would be quite costly.",
      "See the Wind Mitigation Education section for more details about these features and exactly what is required to meet them.",
    ],
    images: [],
  },
  section4: {
    title: "Roof To Wall Attachment",
    paragraphs: [
      "To meet Section 4, titled Roof to Wall Attachment you must have one of five different categories of attachments installed.",
      `1) You must have a toe nail going through the truss into the top plate
       2) OR a clip on every truss nailed to one side with a minimum of 3 nails (Picture 2)
       3) OR a single metal wrap on every truss with 2 nails on one side and 1 nail on the other (Picture 3)
       4) OR a double metal wrap on every truss with 3 nails on one side and 1 nail on the other (Picture 4)
       5) OR anchor bolts, or a concrete roof (Picture 5)`,
    ],
    images: ["../Website images/Clip.JPG", "../Website images/Clips.jpg"],
  },
  section6: {
    title: "Secondary Water Resistance",
    paragraphs: [
      "To meet Section 8, titled Secondary Water Resistance (SWR), your home must have a self adhering polymer modified bitumen roofing underlayment applied directly to the sheathing. This would involve replacing your roof (See Section 2 & 3).",
      "Another, yet less commonly utilized way to meet the SWR Section is by having a foam SWR applied as a secondary means to water intrusion. This involves spraying foam at the point where the truss meets the roof deck. This is not hard to do but takes some time and should be done by a licensed contractor.",
    ],
    images: ["../Website images/FoamSeal.JPG", "../Website images/SWR.JPG"],
  },
  section7: {
    title: "Opening Protection",
    paragraphs: [
      "To meet Section 7, titled Opening Protection, you must have a system of protections for the openings on your home. These openings include doors, windows, garage  doors, doggie doors and attic vents. There are four different categories in this section.",
      "The first category is hurricane rated openings which are usually installed by professional contractors. These opening protections must meet the requirements of the Miami-Dade County PA 201, 202 and 203, or Florida Building Code 201, 202 and 203, or ASTM 1886 and ASTM E 1996 (Missile Level C—9 lb). To know if your storm shutters meet these ratings you should have your receipts or contracts from the installers who put them on, or you can sometimes look on the windows to see the rating codes etched in them.",
      "The second category is basic protection which are windows, doors or shutters that are rated to withstand a “Small Missile Impact”. Again, you should have information from the installers stating if your openings meet this criteria.",
      "The third category is for openings that are covered with anything that is not rated, such as non-rated shutters or products that cannot be identified.",
      "The fourth category is for wood panels that are quite easy to build and install. Homeowners with basic knowledge and tools can build wood panels to receive a discount. These panels must meet Section 1609 and Table 1609.1.4 of the 2007 Florida Building Code to be eligible for a discount. There is a tutorial video which can be seen here which teaches you how to build these. If you already have these they must be on site when we come to inspect your home to receive the discount.",
    ],
    images: [],
  },
  strengthening: {
    title: "Gable End Bracing",
    paragraphs: [
      "No longer on the new form as of Feb 1, 2012 Gable End Bracing is something you can do to strengthen the gable ends in your home. If you have gable ends and they are not braced this is a relatively easy upgrade that can be done to your home. Some homeowners with knowledge of construction and woodworking may even be able to do this themselves, although it is not recommended. Please contact myself, a licensed roofing contractor or general contractor to go into more detail about bracing gable ends. Here are some pictures of common types of gable end bracing.",
    ],
    images: ["../Website images/Xbrace.JPG", "../Website images/Xbrace2.JPG"],
  },
};

document.addEventListener(
  "click",
  function (event) {
    if (!event.target.matches(".education-btn")) return;
    const currentDisplay = event.target.dataset.name;
    const { title, paragraphs, images } = pages[currentDisplay];

    for (let i = 5; i > paragraphs.length; i--) {
      let educationParagraph = document.getElementById(
        "education-paragraph-" + (i - 1)
      );
      educationParagraph.classList.add("hide-content");
    }

    for (let i = 0; i < paragraphs.length; i++) {
      document
        .getElementById("education-paragraph-" + i)
        .classList.remove("hide-content");
    }

    if (images.length < 2) {
      img1.classList.add("hide-content");
    }
    pageTitleElem.textContent = title;
    for (let i = 0; i < paragraphs.length; i++) {
      document.getElementById("education-paragraph-" + i).textContent =
        pages[currentDisplay].paragraphs[i];
    }
    for (let i = 0; i < images.length; i++) {
      let currentImg = document.getElementById("img-" + i);
      currentImg.src = images[i];
      currentImg.classList.remove("hide-content");
      currentImg.classList.add("show-content");
    }
  },
  false
);
