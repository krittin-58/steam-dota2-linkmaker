var r = document.getElementById('largeiteminfo_item_descriptors').getElementsByClassName('descriptor');
for (var i in r) {
	if (!r[i]) continue;
	var j = r[i];
	if (!j.innerText) continue;
	var t = j.innerText.trim();
	if (t.length === 0) continue;
	if (t.match(/[а-яА-Я\.\:\*]/gi) !== null) continue;
	var style = '';
	if (j.attributes.style)
		style = j.attributes.style.value ? j.attributes.style.value : '';
	j.innerHTML = '<a style="text-decoration:underline;' + style + '" href="http://steamcommunity.com/market/listings/570/' + encodeURIComponent(t) + '">' + t + '</a>';
}

var SteamExt = {
	getTradeInfo: function () {
		var priceEl = document.getElementById('searchResultsRows').getElementsByTagName('div')[2].getElementsByClassName('market_listing_right_cell market_listing_their_price')[0];

		var report = {
			name: document.getElementById('largeiteminfo_item_name').innerText,
			price: parseFloat(priceEl.innerText.replace(',', '.')).toString().replace('.', ','),
			type: document.getElementById('largeiteminfo_item_type').innerText
		};

		return report.name + "\t" + report.price + "\t" + report.type
	}
};

var newEl = document.createElement('pre');
newEl.innerHTML = SteamExt.getTradeInfo();

document.getElementById('largeiteminfo_content').appendChild(newEl);