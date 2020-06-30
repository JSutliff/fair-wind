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
      "Any shingles installed or roofs constructed after March 1, 2002 automatically meets the 2001 Florida Building Code and will qualify you for a discount. The minimum discount you may receive by meeting the 2001 FBC on Roof Covering is approximately 7%.",
    ],

    imgages: ["../images/pasco-wind-mitigation-education-covering.gif"],
  },
  attachment: {
    title: "Roof Deck Attachment",
    paragraphs: [
      "When we look at the Roof Attachment we will be looking at four different items. The thickness and material of the roof as well as the nail size and spacing. We determine the thickness of the material by measuring it with a marked tool and the type of material by looking at the stamp on it. We determine the nail size by looking for one that has missed the truss and the spacing by measuring with a magnetic tool.",
      "To receive the best discount for this category you must have ½” plywood or OSB roof sheathing attached by 8d nails spaced at 6” apart, or batten decking supporting wood shakes or shingles. The minimum discount for meeting these qualifications approximately 9%.",
    ],
    images: [
      "../images/clearwater-wind-mitigation-education.gif",
      "../images/clearwater-wind-mitigation-education.gif",
    ],
  },
  roof: {
    title: "Roof To Wall Attachment",
    paragraphs: [
      "When looking at the Roof to Wall Attachment we hope to determine which types of connections your roof has to the wall it is sitting on. The most common type, which many homes have already have are clips. They can usually be seen in the attic or sometimes outside through the soffit.",
      "We need to verify that your home has these or another type of reinforcing tie down and you will be eligible for a discount. Other types include toe nails, single wraps, double wraps or structural connections such as anchor bolts.",
      "The minimum discount for clips, which most homes in this area have, is approximately 18%.",
    ],
    images: [
      "../images/clearwater-wind-mitigation-education.gif",
      "../images/clearwater-wind-mitigation-education.gif",
    ],
  },
  geometry: {
    title: "Roof Geometry",
    paragraphs: [
      "Roof Geometry is determined by the shape of your roof. Classifications are Hip, Flat, and Other. To achieve a Hip roof designation, 90% or more of the roof has to be hip in shape, like the photograph below. If you have a hip roof you are eligible for a significant discount. This is because the shape of your roof determines how wind flows around and over it. It has been proven that hip roofs carry these wind loads the best.",
      "If you have a hip roof you are eligible for a minimum discount of around 28%.",
    ],
    images: [
      "../images/clearwater-wind-mitigation-education.gif",
      "../images/clearwater-wind-mitigation-education.gif",
    ],
  },
  water: {
    title: "Secondary Water Resistance",
    paragraphs: [
      "If you have a hip roof and Secondary Water Resistance installed on it you are able to receive a very large discount to the wind portion of your homeowners insurance. This is difficult to determine unless it is sealed from the inside by foam SWR barrier. You could also have proof of it being installed when your home was re-roofed such as bills or contracts from your roofer.",
      "A hip roof with SWR will receive approximately 32% discount while any other roof shapes with SWR receive 6%.",
    ],
    images: [
      "../images/clearwater-wind-mitigation-education.gif",
      "../images/clearwater-wind-mitigation-education.gif",
    ],
  },
  opening: {
    title: "Opening Protection",
    paragraphs: [
      "The last category is Opening Protections. To be certified as having hurricane resistant opening protections all openings must be protected by impact resistant coverings. They must meet the requirements of the Miami-Dade County PA 201, 202 and 203, Florida Building Code 201, 202 and 203, ASTM 1886 and ASTM E 1996 (Missile Level C—9 lb). If you have hurricane shutters they should have these codes on them or have been supplied when you purchased them. If you meet these requirements you are eligible for a minimum 39% insurance reduction!",
      "You can also receive a discount for having plywood shutters you can build yourself.  They must meet Section 1609 and Table 1609.1.2 of the 2007 Florida Building Code to be eligible for a discount. Click here for a video tutorial on how to build these yourself.",
    ],
    images: [
      "../images/clearwater-wind-mitigation-education.gif",
      "../images/clearwater-wind-mitigation-education.gif",
    ],
  },
};

function handleClick() {
  console.log(this);
}

document.addEventListener(
  "click",
  function (event) {
    // If the clicked element doesn't have the right selector
    if (!event.target.matches(".education-btn")) return;
    let currentDisplay = event.target.dataset.name;
    let { title, paragraphs, images } = pages[currentDisplay];
    //If paragraphs.length < 3
    //hide third paragraph from page
    if (paragraphs.length < 3) {
      paragraph2.classList.add("hide-content");
    } else {
      paragraph2.classList.remove("hide-content");
    }

    pageTitleElem.textContent = title;
    for (let i = 0; i < paragraphs.length; i++) {
      document.getElementById("education-paragraph-" + i).textContent =
        pages[currentDisplay].paragraphs[i];
    }
    console.log(currentDisplay);
  },
  false
);

// coveringBtn.addEventListener("click", handleClick);
// attachmentBtn.addEventListener("click", handleClick);

// $(".educational-btn").on("click", function () {
//   var currentObj = $(this).text().trim().toLowerCase();
//   console.log(currentObj.length);
//   console.log(pages[currentObj]);
//   $("#page-title").text(pages[currentObj].title);
//   $("#education-paragraph-0").text(pages[currentObj].paragraph0Text);
// });

// $("#inputBtn").on("click", function () {
//   console.log($("#getUser").val());
//   console.log($("#getUser").val(""));
// });
