export default function fromWhere (carReg) {
    if (carReg.startsWith("CY")) {
     return "Bellville";
    } else if (carReg.startsWith("CJ")) {
     return "Paarl";
    } else if (carReg.startsWith("CA")) {
     return "Cape Town";
    } else {
      return "Some other place!"
    }
    }
    console.log(fromWhere("CY 123")); 