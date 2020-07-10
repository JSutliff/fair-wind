const pageTitleElem = document.getElementById("page-title");
const paragraph0 = document.getElementById("education-paragraph-0");
const paragraph1 = document.getElementById("education-paragraph-1");
const paragraph2 = document.getElementById("education-paragraph-2");
const img0 = document.getElementById("img-0");
const img1 = document.getElementById("img-1");

const coveringBtn = document.getElementById("covering-btn");
const attachmentBtn = document.getElementById("attachment-btn");

var pages = {
  covering: {
    title: "Roof Covering",
    paragraphs: [
      "All roof coverings over the main living area of the home are subject to inspection. If the covering(s) meets the 2001 Florida Building Code or the 1994 South Florida Building Code you are able to receive a discount.",
      "To determine if your roof meets these codes you must be able to show proof that your home or roof was constructed after 1994 and meets the SFB Code, or February 28, 2002  and meets the FBC Code. This can be done with receipts or contracts from roofers, types of covering installed on the roof, product approval numbers or a date of construction.",
      "Any shingles installed or roofs constructed after March 1, 2002 automatically meets the 2001 Florida Building Code and will qualify you for a discount. <span class='savings'>The minimum discount you may receive by meeting the 2001 FBC on Roof Covering is approximately 7%.</span>",
    ],
    images: ["../Website images/Roof Covering.gif"],
  },
  attachment: {
    title: "Roof Deck Attachment",
    paragraphs: [
      "When we look at the Roof Attachment we will be looking at four different items. The thickness and material of the roof as well as the nail size and spacing. We determine the thickness of the material by measuring it with a marked tool and the type of material by looking at the stamp on it. We determine the nail size by looking for one that has missed the truss and the spacing by measuring with a magnetic tool.",
      "To receive the best discount for this category you must have ½” plywood or OSB roof sheathing attached by 8d nails spaced at 6” apart, or batten decking supporting wood shakes or shingles. <span class='savings'>The minimum discount for meeting these qualifications approximately 9%.</span>",
    ],
    images: [
      "../Website images/Spacing.JPG",
      "../Website images/Deck Thickness Photo 1 Inch Boards.JPG",
    ],
  },
  roof: {
    title: "Roof To Wall Attachment",
    paragraphs: [
      "When looking at the Roof to Wall Attachment we hope to determine which types of connections your roof has to the wall it is sitting on. The most common type, which many homes have already have are clips. They can usually be seen in the attic or sometimes outside through the soffit.",
      "We need to verify that your home has these or another type of reinforcing tie down and you will be eligible for a discount. Other types include toe nails, single wraps, double wraps or structural connections such as anchor bolts.",
      "<i class='material-icons'>attach_money</i><span class='savings'>The minimum discount for clips, which most homes in this area have, is approximately 18%.</span><i class='material-icons'>attach_money</i>",
    ],
    images: ["../Website images/Clips.jpg"],
  },
  geometry: {
    title: "Roof Geometry",
    paragraphs: [
      "Roof Geometry is determined by the shape of your roof. Classifications are Hip, Flat, and Other. To achieve a Hip roof designation, 90% or more of the roof has to be hip in shape, like the photograph below. If you have a hip roof you are eligible for a significant discount. This is because the shape of your roof determines how wind flows around and over it. It has been proven that hip roofs carry these wind loads the best.",
      "If you have a hip roof you are eligible for a <span class='savings'>minimum discount of around 28%.</span>",
    ],
    images: ["../Website images/HipRoof2.jpg"],
  },
  water: {
    title: "Secondary Water Resistance",
    paragraphs: [
      "If you have a hip roof and Secondary Water Resistance installed on it you are able to receive a very large discount to the wind portion of your homeowners insurance. This is difficult to determine unless it is sealed from the inside by foam SWR barrier. You could also have proof of it being installed when your home was re-roofed such as bills or contracts from your roofer.",
      "A hip roof with SWR will receive <span class='savings'>approximately 32% discount</span> while any other roof shapes with SWR receive 6%.",
    ],
    images: ["../Website images/FoamSeal.JPG", "../Website images/SWR.JPG"],
  },
  opening: {
    title: "Opening Protection",
    paragraphs: [
      "The last category is Opening Protections. To be certified as having hurricane resistant opening protections all openings must be protected by impact resistant coverings. They must meet the requirements of the Miami-Dade County PA 201, 202 and 203, Florida Building Code 201, 202 and 203, ASTM 1886 and ASTM E 1996 (Missile Level C—9 lb). If you have hurricane shutters they should have these codes on them or have been supplied when you purchased them. If you meet these requirements you are eligible for a <span class='savings'>minimum 39% insurance reduction!</span>",
      "You can also receive a discount for having plywood shutters you can build yourself.  They must meet Section 1609 and Table 1609.1.2 of the 2007 Florida Building Code to be eligible for a discount. Click here for a video tutorial on how to build these yourself.",
    ],
    images: [
      "../Website images/Shutter.jpg",
      "../Website images/PlywoodShutter.JPG",
    ],
  },
  resources: {
    title: "Additional Resources",
    paragraphs: [
      '<strong>Check what strength your impact windows and hurricane shutters are: <br></strong> <a href="http://www.floridabuilding.org/pr/pr_app_srch.aspx">FBC Product Search</a> & <a href="http://www.miamidade.gov/building/pc-search_app.asp">Miami Dade Product Search</a><br><strong>Local Property Appraisers links:<br></strong> <a href="https://www.pascopa.com/">Hillsborough County</a><br><a href="https://www.hcpafl.org/x">Pasco County</a><br><strong>Find out what wind speeds your area/county can expect during a hurricane:<br></strong> <a href="http://www.floridabuilding.org/fbc/Wind_2010/Flyer_Wind_January2012.pdf">Wind Borne Debris Region Map</a>',
      '<strong>Hurricane evacuation zone links for pinellas, pasco, hillsborough and state of florida </strong> <a href="http://kyz.pinellascounty.org/">Pinellas County</a><br><a href="https://pascofloem.maps.arcgis.com/apps/webappviewer/index.html?id=9fa8f4cd8c4c4c2b943c4b4ec8f6fb84">Pasco County</a><br><a href="https://hillsborough.maps.arcgis.com/apps/webappviewer/index.html?id=04f1084467564dff88729f668caed40a">Hillsborough County</a><br><a href="https://www.floridadisaster.org/knowyourzone/">Florida Disaster</a>',
    ],
    images: [],
  },
};

document.addEventListener(
  "click",
  function (event) {
    if (!event.target.matches(".education-btn")) return;
    const currentDisplay = event.target.dataset.name;
    const { title, paragraphs, images } = pages[currentDisplay];

    if (currentDisplay === "opening") {
      document
        .getElementById("hurricane-video")
        .classList.remove("hide-content");
    } else {
      document.getElementById("hurricane-video").classList.add("hide-content");
    }

    if (currentDisplay === "resources") {
      document.getElementById("img-0").classList.add("hide-content");
    } else {
      document.getElementById("img-0").classList.remove("hide-content");
    }
    if (paragraphs.length < 3) {
      paragraph2.classList.add("hide-content");
    } else {
      paragraph2.classList.remove("hide-content");
    }
    if (images.length < 2) {
      img1.classList.add("hide-content");
    }

    pageTitleElem.textContent = title;

    for (let i = 0; i < paragraphs.length; i++) {
      document.getElementById("education-paragraph-" + i).innerHTML =
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

console.log("logged");
