function addBorder(picture: string[]): string[] {
    let border: string = '*'.repeat(picture[0].length);
    return [border, ...picture, border].map(str => `*${str}*`)
}

console.log(addBorder(["ab2", "ded", '134']));