const falcuty = {
  "INTANIA": true,
  "MDCU": true,
  "ECON": true,
  "SCCU": true,
  "PSYCHO": true,
  "EDU": true,
  "VETER": true,
  "SINGHDAM": true,
  "BANSHI": true,
  "AKSORN": true,
  "ARCH": true,
  "NITADE": true,
  "PHARM": true,
  "LAW": true,
  "DENT": true,
  "SINGUM": true,
  "SAHAVATE": true,
  "SPSC": true,
  "BASCII": true,
  "SAR": true
}

const falcuty_color = {
  "INTANIA": ["rgb(170, 1, 1)","rgb(252, 212, 212)"],
  "MDCU": ["rgb(44, 105, 62)","rgb(165, 246, 175)"],
  "ECON": ["rgb(121, 125, 28)","rgb(246, 255, 204)"],
  "SCCU": ["rgb(209, 214, 47)","rgb(248, 255, 217)"],
  "PSYCHO": ["rgb(49, 17, 189)","rgb(182, 179, 240)"],
  "EDU": ["rgb(246, 127, 22)","rgb(245, 212, 185)"],
  "VETER": ["rgb(37, 171, 181)","rgb(185, 244, 245)"],
  "SINGHDAM": ["rgb(0, 0, 0)","rgb(190, 190, 190)"],
  "BANSHI": ["rgb(21, 231, 231)","rgb(191, 252, 255)"],
  "AKSORN": ["rgb(61, 61, 61)","rgb(203, 203, 203)"],
  "ARCH": ["rgb(62, 36, 8)","rgb(158, 133, 106)"],
  "NITADE": ["rgb(16, 23, 242)","rgb(180, 193, 231)"],
  "PHARM": ["rgb(59, 71, 45)","rgb(172, 207, 132)"],
  "LAW": ["rgb(144, 144, 144)","rgb(255, 255, 255)"],
  "DENT": ["rgb(157, 42, 245)","rgb(206, 167, 236)"],
  "SINGUM": ["rgb(253, 38, 38)","rgb(255, 189, 189)"],
  "SAHAVATE": ["rgb(110, 53, 254)","rgb(204, 185, 252)"],
  "SPSC": ["rgb(242, 113, 0)","rgb(242, 212, 188)"],
  "BASCII": ["rgb(154, 149, 0)","rgb(210, 209, 175)"],
  "SAR": ["rgb(224, 69, 123)","rgb(240, 212, 221)"]
}

let topic = "EDU"

for(let i=0;i<Object.keys(falcuty).length;i++)
{
  color_tag(Object.keys(falcuty)[i])
}

function change_page()
{
  let topEdu = document.querySelector(".topic-education")
  let topOff = document.querySelector(".topic-offtopic")
  let fakbokbutton = document.querySelector(".post-fakbok")
  let c0 = document.querySelector(".background-circle0")
  let c1 = document.querySelector(".background-circle1")
  let c10 = document.querySelector(".background-circle10")
  let c2 = document.querySelector(".background-circle2")
  let c3 = document.querySelector(".background-circle3")
  let c30 = document.querySelector(".background-circle30")
  let c4 = document.querySelector(".background-circle4")

  if(topic === "EDU")
  {
    topEdu.style.background = "white"
    topEdu.children[0].src = "./IMGs/ICON_education_on.png"
    topEdu.children[1].style.color = "red"

    topOff.style.background = "transparent"
    topOff.children[0].src = "./IMGs/ICON_offtopic_off.png"
    topOff.children[1].style.color = "black"
    fakbokbutton.style.background = "#FC5A36"
    c0.style.bottom = "-104px"
    c0.style.left = "-174px"
    c0.style.backgroundColor = "rgb(255, 46, 0, 0.5)"

    c1.style.bottom = "-160px"
    c1.style.left = "100px"
    c1.style.backgroundColor = "rgb(252, 125, 54, 0.5)"
    c10.style.bottom = "-160px"
    c10.style.left = "100px"

    c2.style.top = "16vh"
    c2.style.backgroundColor = "rgb(255, 77, 0, 0.5)"

    c3.style.top = "55vh"
    c3.style.backgroundColor = "rgb(252, 125, 54, 0.5)"
    c30.style.top = "55vh"

    c4.style.left = "-150px"
    c4.style.top = "-70px"
    c4.style.backgroundColor = "rgb(255, 107, 0, 0.5)"
  }
  else
  {
    topEdu.style.background = "transparent"
    topEdu.children[0].src = "./IMGs/ICON_education_off.png"
    topEdu.children[1].style.color = "black"

    topOff.style.background = "white"
    topOff.children[0].src = "./IMGs/ICON_offtopic_on.png"
    topOff.children[1].style.color = "blue"
    fakbokbutton.style.background = "#136EF1"

    c0.style.bottom = "-244px"
    c0.style.left = "-74px"
    c0.style.backgroundColor = "rgba(2, 58, 242, 0.5)"

    c1.style.bottom = "70px"
    c1.style.left = "-150px"
    c1.style.backgroundColor = "rgba(98, 245, 223, 0.5)"
    c10.style.bottom = "70px"
    c10.style.left = "-150px"

    c2.style.top = "20vh"
    c2.style.backgroundColor = "rgba(2, 58, 242, 0.5)"

    c3.style.top = "16vh"
    c3.style.backgroundColor = "rgba(84, 255, 238, 0.5)"
    c30.style.top = "16vh"

    c4.style.left = "-100px"
    c4.style.top = "-140px"
    c4.style.backgroundColor = "rgba(36, 100, 251, 0.5)"
  }
}

function change_topic(top)
{
  topic = top
  change_page()
}

function color_tag(tag_name)
{
  tag = document.getElementById("tag" + tag_name)
  tag.children[0].style.backgroundColor = falcuty_color[tag_name][0]
  tag.style.borderColor = falcuty_color[tag_name][0]
  tag.style.backgroundColor = falcuty_color[tag_name][1]
}

function click_tag(tag_name)
{
  tag = document.getElementById("tag" + tag_name)
  falcuty[tag_name] = !falcuty[tag_name]
  console.log(tag)
  if(falcuty[tag_name])
  {
    tag.children[0].style.rigth = "4px"
    tag.children[0].style.left = "auto"
    tag.style.paddingLeft = "10px"
    tag.style.paddingRight = "28px"
    color_tag(tag_name)
  }
  else
  {
    tag.children[0].style.rigth = "auto"
    tag.children[0].style.left = "4px"
    tag.style.paddingLeft = "28px"
    tag.style.paddingRight = "10px"
    tag.children[0].style.backgroundColor = "grey"
    tag.style.borderColor = "darkgrey"
    tag.style.backgroundColor = "lightgrey"
  }
}