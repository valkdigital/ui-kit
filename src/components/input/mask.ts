const mask = {
  date: (input: string, keyPress: string, caretPos: number): any => {
    if (keyPress === "Backspace" && (caretPos === 3 || caretPos === 6)) {
      if (input.length > caretPos - 1) {
        return mask.date(
          input.substring(0, caretPos - 2) + input.substring(caretPos - 1),
          "",
          caretPos - 1
        );
      }
      return input.slice(0, -1);
    }
    let result = "";
    let value = input.replace(/[^\d]/g, "");
    const datePattern = ["d", "m", "y"];
    const blocks = [2, 2, 4];

    blocks.forEach((length: number, index: number) => {
      if (value.length > 0) {
        let sub = value.slice(0, length);
        const sub0 = sub.slice(0, 1);
        const rest = value.slice(length);

        switch (datePattern[index]) {
          case "d":
            if (sub === "00") {
              sub = "01";
            } else if (parseInt(sub0, 10) > 3) {
              sub = "0" + sub0;
            } else if (parseInt(sub, 10) > 31) {
              sub = "31";
            }
            break;

          case "m":
            if (sub === "00") {
              sub = "01";
            } else if (parseInt(sub0, 10) > 1) {
              sub = "0" + sub0;
            } else if (parseInt(sub, 10) > 12) {
              sub = "12";
            }
            break;
        }

        result += sub;
        if (sub.length === length && index < blocks.length - 1) {
          result += "/";
        }

        // update remaining string
        value = rest;
      }
    });
    return result;
  },
  blocks: (
    input: string,
    keyPress: string,
    caretPos: number,
    setCursor: (pos?: number) => void
  ): any => {
    if (keyPress === "Backspace" && (caretPos === 3 || caretPos === 6)) {
      if (input.length > caretPos - 1) {
        setCursor(caretPos - 2);
        return mask.blocks(
          input.substring(0, caretPos - 2) + input.substring(caretPos - 1),
          "",
          caretPos - 1,
          setCursor
        );
      }
      setCursor(caretPos - 2);
      return input.slice(0, -1);
    }
    let result = "";
    let value = input.replace(/[^\d]/g, "");
    const blocks = [2, 2, 4];
    const delimiter = " ";
    let currentDelimiter = "";

    // no options, normal input
    if (blocks.length === 0) {
      return value;
    }

    blocks.forEach(function (length, index) {
      if (value.length > 0) {
        var sub = value.slice(0, length),
          rest = value.slice(length);

        currentDelimiter = delimiter;

        result += sub;
        if (sub.length === length && index < blocks.length - 1) {
          result += currentDelimiter;
        }

        // update remaining string
        value = rest;
      }
    });
    setCursor(caretPos);
    return result;
  },
};

export default mask;
