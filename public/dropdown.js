function getSubtitle(faqDrop) {
  const subtitle = faqDrop.children.item(0).children.item(0);
  return subtitle;
}

function getDescription(faqDrop) {
  const description = faqDrop.children.item(1);
  return description;
}

function getArrow(faqDrop) {
  const arrow = faqDrop.children.item(0).children.item(1);
  return arrow;
}

function getFaqDetails(faqDrop) {
  const subtitle = getSubtitle(faqDrop);
  const description = getDescription(faqDrop);
  const arrow = getArrow(faqDrop);
  return { subtitle, description, arrow };
}

function resetFaqDrop(faqDrop) {
  const { subtitle, description, arrow } = getFaqDetails(faqDrop);
  subtitle.style.fontWeight = "400";
  description.style.display = "none";
  arrow.style.transform = "rotate(0deg)";
}

function applyFaqDrop(faqDrop) {
  const { subtitle, description, arrow } = getFaqDetails(faqDrop);
  description.style.display = "block";
  subtitle.style.fontWeight = "700";
  arrow.style.transform = "rotate(180deg)";
}

function resetDrops(elementId) {
  const faqDrops = Array.from(document.getElementsByClassName("faq-drop"));
  faqDrops.forEach((faqDrop) => {
    const description = getDescription(faqDrop);
    if (faqDrop.id !== elementId && description.style.display === "block") {
      resetFaqDrop(faqDrop);
    }
  });
}

function dropDescription(elementId) {
  const faqDrop = document.getElementById(elementId);
  const description = getDescription(faqDrop);

  resetDrops(elementId);

  if (description.style.display === "block") {
    resetFaqDrop(faqDrop);
  } else {
    applyFaqDrop(faqDrop);
  }
}
