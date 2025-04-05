export function getIndex(nonetIndex: number, cellIndex: number): number {
  const nDiv = Math.floor(nonetIndex / 3);
    const nMod = Math.floor(nonetIndex % 3);
    const cDiv = Math.floor(cellIndex / 3);
    const cMod = Math.floor(cellIndex % 3);
    return (nDiv * 27) + (nMod * 3) + (9 * cDiv) + cMod;
}

export function getNonetIndexes(index: number): number[] {
  const nonetIndexes = [];
  const nonetRow = Math.floor(index / 27);
  const nonetCol = Math.floor((index % 9) / 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      nonetIndexes.push((nonetRow * 3 + i) * 9 + (nonetCol * 3 + j));
    }
  }
  return nonetIndexes;
}

export function getRowIndexes(index: number): number[] {
  const row = Math.floor(index / 9);
  const rowIndexes = [];
  for (let i = 0; i < 9; i++) {
    rowIndexes.push(row * 9 + i);
  }
  return rowIndexes;
}

export function getColumnIndexes(index: number): number[] {
  const col = index % 9;
  const colIndexes = [];
  for (let i = 0; i < 9; i++) {
    colIndexes.push(i * 9 + col);
  }
  return colIndexes;
}
