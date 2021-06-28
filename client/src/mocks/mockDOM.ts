export const mockDOM = () => {
	document.body.innerHTML = `
    <div class="root">
        <div class="settings">
          <select class='rows' autocomplete='off'>
            <option value="10">10 rows</option>
            <option value="20">20 rows</option>
            <option value="30">30 rows</option>
            <option value="40">40 rows</option>
            <option value="50">50 rows</option>
            <option value="60">60 rows</option>
            <option value="70">70 rows</option>
            <option value="80">80 rows</option>
            <option value="90">90 rows</option>
          </select>
          <select class='cols' autocomplete='off'>
            <option value="10">10 cols</option>
            <option value="20">20 cols</option>
            <option value="30">30 cols</option>
            <option value="40">40 cols</option>
            <option value="50">50 cols</option>
            <option value="60">60 cols</option>
            <option value="70">70 cols</option>
            <option value="80">80 cols</option>
            <option value="90">90 cols</option>
          </select>
          <select class='level' autocomplete='off'>
            <option value="0.9">level 1</option>
            <option value="0.8">level 2</option>
            <option value="0.7">level 3</option>
            <option value="0.6">level 4</option>
            <option value="0.5">level 5</option>
            <option value="0.4">level 6</option>
            <option value="0.3">level 7</option>
            <option value="0.2">level 8</option>
            <option value="0.1">level 9</option>
          </select>
          <button class='start'>start</button>
        </div>
        <div class="status">
          <p class='bomb-counter'></p>
          <p class='game-result'></p>
          <p class='time-counter'>0</p>
        </div>
      </div>
    `
}
