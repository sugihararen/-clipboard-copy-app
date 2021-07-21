import styles from '../styles/Home.module.css'

export default function Home() {
  const tableToText = () => {
    let text = "";
    const table = document.getElementById("tableArea");
    const tableRows = table.rows;

    for (var i = 0; i < tableRows.length; i++) {
      const cells = tableRows[i].cells;
      let cellText = "";

      for (var j = 0; j < cells.length; j++) {
        if (cellText != "") cellText += "\t";
        cellText += cells[j].innerText;
      }

      text += cellText + "\r\n";
    }

    return text;
  }

  const clipboardCopy = text => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copy = document.execCommand('copy');
    document.body.removeChild(textarea);

    return copy;
  }

  const onClickCopy = () => {
    const result = clipboardCopy(tableToText());

    result ? window.alert('保存に成功しました。') : window.alert('保存に失敗しました。')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <table id="tableArea">
          <thead>
            <tr>
              <th>見出し1</th><th>見出し2</th><th>見出し3</th><th>見出し4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>データ11</td><td>データ12</td><td>データ13</td><td>データ14</td>
            </tr>
            <tr>
              <td>データ21</td><td>データ22</td><td>データ23</td><td>データ24</td>
            </tr>
            <tr>
              <td>データ31</td><td>データ32</td><td>データ33</td><td>データ34</td>
            </tr>
            <tr>
              <td>データ41</td><td>データ42</td><td>データ43</td><td>データ44</td>
            </tr>
            <tr>
              <td>データ51</td><td>データ52</td><td>データ53</td><td>データ54</td>
            </tr>
          </tbody>
        </table>

        <button onClick={onClickCopy}>
          クリップボードに保存
        </button>
      </main>
    </div>
  )
}
