var arr =[2, 4, 4, 8, 9];
var flag = false; 

for (var i = 2; i < arr.length; i++) {
	if (arr[i] == arr[i - 1]) {
		flag = true; 
		break;
	}
}

if (flag === true) {
	alert('Yes');
} else 
{
	alert('No');
}