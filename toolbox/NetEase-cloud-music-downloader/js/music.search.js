function MusicSearch(){
    // 获取搜索关键词
    var keyword = document.getElementById('searchInput').value;
    // 定义要获取数据的URLhttps://ilygfw-musicapi.voyage200.top/search?keywords=we
const url = 'https://ilygfw-musicapi.voyage200.top/search?keywords='+keyword;

// 获取下拉选择框的引用
const songSelector = document.getElementById('songSelector');

// 创建一个新的XMLHttpRequest对象
const xhr = new XMLHttpRequest();

// 配置请求类型和URL
xhr.open('GET', url, true);

// 设置请求完成后的回调函数
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // 解析响应为JSON
        const data = JSON.parse(xhr.responseText);
        console.log('Fetched JSON data:', data);

        // 清空下拉选择框的内容
        songSelector.innerHTML = '';

        const option = document.createElement('option');
            option.value = 0;
            option.textContent = "下拉选择歌曲"
            songSelector.appendChild(option);

        // 提取并添加歌曲信息到下拉选择框
        const songs = data.result.songs;
        songs.forEach(song => {
            const option = document.createElement('option');
            option.value = song.id;
            option.textContent = song.name + "作曲：" + song.artists[0].name;
            songSelector.appendChild(option);
        });
    } else {
        console.error('Request failed with status:', xhr.status);
        songSelector.innerHTML = '<option value="">Failed to load songs</option>';
    }
};

// 设置请求错误时的回调函数
xhr.onerror = function() {
    console.error('There was a problem with the request.');
    songSelector.innerHTML = '<option value="">Failed to load songs</option>';
};

// 发送请求
xhr.send();
songSelector.addEventListener('change', function() {
    const selectedId = songSelector.value;
    var music=document.getElementById("music-id").value=selectedId;
});
}