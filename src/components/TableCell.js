function TableCell(props) {
  let color;
  let cleared = false;
  if (props.isCleared !== cleared) {
    color = 'white';
    cleared = !cleared;
  }

  return (
    <td
      style={{ backgroundColor: color }}
      onClick={props.handleApplyColor}
    ></td>
  );
}

export default TableCell;
