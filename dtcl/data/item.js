var data_item = [
	{
		id: 1,
		name: 'Kiếm B.F',
		type: 'base',
		stat: '+20 sát thương',
		description: 'Tăng 20 sát thương đòn đánh',
		img : 'data/img/item/base_items/b1.png',
		citem: [9,16,18,20,33,36,40,42]
	},
	{
		id: 2,
		name: 'Giáp lưới',
		type: 'base',
		stat: '+20 giáp',
		description: 'Tăng 20 giáp',
		img : 'data/img/item/base_items/b2.png',
		citem: [15,16,22,23,26,29,35,37]
	},
	{
		id: 3,
		name: 'Đai khổng lồ',
		type: 'base',
		stat: '+200 máu',
		description: 'Tăng 200 máu',
		img : 'data/img/item/base_items/b3.png',
		citem: [14,25,29,30,38,39,42,43]
	},
	{
		id: 4,
		name: 'Gậy quá khổ',
		type: 'base',
		stat: '+20% sát thương kỹ năng',
		description: 'Tăng 20% sát thương kỹ năng',
		img : 'data/img/item/base_items/b4.png',
		citem: [17,18,21,23,24,25,27,41]
	},
	{
		id: 5,
		name: 'Áo choàng bạc',
		type: 'base',
		stat: '+20 kháng phép',
		description: 'Tăng 20 kháng phép',
		img : 'data/img/item/base_items/b5.png',
		citem: [9,10,12,19,21,31,35,43]
	},
	{
		id: 6,
		name: 'Cung gỗ',
		type: 'base',
		stat: '+15% tốc độ đánh',
		description: 'Tăng 15% tốc độ đánh',
		img : 'data/img/item/base_items/b6.png',
		citem: [8,10,17,26,28,34,36,28]
	},
	{
		id: 7,
		name: 'Siêu xẻng',
		type: 'base',
		stat: '',
		description: 'Có thể làm được điều gì đó ...',
		img : 'data/img/item/base_items/b7.png',
		citem: [8,11,13,14,22,31,40,41]
	},
	{
		id: 8,
		name: 'Nước mắt nữ thần',
		type: 'base',
		stat: '+20 năng lượng',
		description: 'Tăng 20 năng lượng',
		img : 'data/img/item/base_items/b8.png',
		citem: [11,15,19,24,30,32,33,34]
	},
	{
		id: 9,
		name: 'Gươm của vị vua vô danh',
		type: 'combinedItem',
		description: 'Người sử dụng cũng là một kiếm khách',
		bitem: [5,6],
		img : 'data/img/item/combined_items/c1.png',
	},
	{
		id: 10,
		name: 'Huyết kiếm',
		type: 'combinedItem',
		description: 'Hút máu 50%',
		bitem: [0,4],
		img : 'data/img/item/combined_items/c2.png',
	},
	{
		id: 11,
		name: 'Kiếm nguyền',
		type: 'combinedItem',
		description: 'Đòn đánh có tỉ lệ giảm sao tướng địch',
		bitem: [4,5],
		img : 'data/img/item/combined_items/c3.png',
	},
	{
		id: 12,
		name: 'Darkin',
		type: 'combinedItem',
		description: 'Người sử dụng cũng là một ác quỷ',
		bitem: [6,7],
		img : 'data/img/item/combined_items/c4.png',
	},
	{
		id: 13,
		name: 'Vuốt rồng',
		type: 'combinedItem',
		description: 'Nhận 83% kháng phép',
		bitem: [4,4],
		img : 'data/img/item/combined_items/c5.png',
	},
	{
		id: 14,
		name: 'Giáp thiên nhiên',
		type: 'combinedItem',
		description: 'Thêm một vị trí trống trong đội hình',
		bitem: [6,6],
		img : 'data/img/item/combined_items/c6.png',
	},
	{
		id: 15,
		name: 'Búa băng',
		type: 'combinedItem',
		description: 'Người sử dụng cũng là một băng tộc',
		bitem: [2,6],
		img : 'data/img/item/combined_items/c7.png',
	},
	{
		id: 16,
		name: 'Tim băng',
		type: 'combinedItem',
		description: 'Giảm 20% tốc độ đánh của kẻ địch xung quanh',
		bitem: [1,7],
		img : 'data/img/item/combined_items/c8.png',
	},
	{
		id: 17,
		name: 'Giáp thiên thần',
		type: 'combinedItem',
		description: 'Hồi sinh với 500 máu',
		bitem: [0,1],
		img : 'data/img/item/combined_items/c9.png',
	},
	{
		id: 18,
		name: 'Cuồng đao Guinsoo',
		type: 'combinedItem',
		description: 'Mỗi đòn đánh cộng thêm 3% tốc độ đánh, cộng dồn vô hạn',
		bitem: [3,5],
		img : 'data/img/item/combined_items/c10.png',
	},
	{
		id: 19,
		name: 'Kiếm súng hextech',
		type: 'combinedItem',
		description: 'Hồi máu bằng 25% mọi sát thương gây ra',
		bitem: [0,3],
		img : 'data/img/item/combined_items/c11.png',
	},
	{
		id: 20,
		name: 'Tĩnh lặng',
		type: 'combinedItem',
		description: 'Đòn đánh có tỉ lệ làm câm lặng đối thủ',
		bitem: [4,7],
		img : 'data/img/item/combined_items/c12.png',
	},
	{
		id: 21,
		name: 'Vô cực kiếm',
		type: 'combinedItem',
		description: 'Đòn chí mạng gây 100% sát thương',
		bitem: [0,0],
		img : 'data/img/item/combined_items/c13.png',
	},
	{
		id: 22,
		name: 'Cung sét',
		type: 'combinedItem',
		description: 'Gây 200 sát thương lên kẻ địch sử dụng kỹ năng',
		bitem: [3,4],
		img : 'data/img/item/combined_items/c14.png',
	},
	{
		id: 23,
		name: 'Lời thề hiệp sĩ',
		type: 'combinedItem',
		description: 'Người sử dụng cũng là một hiệp sĩ',
		bitem: [1,6],
		img : 'data/img/item/combined_items/c15.png',
	},
	{
		id: 24,
		name: 'Dây chuyền iron solari',
		type: 'combinedItem',
		description: 'Bắt đầu trận đấu tạo 1 lớp giáp có giá trị 200 cho đồng đội xung quanh',
		bitem: [1,3],
		img : 'data/img/item/combined_items/c16.png',
	},
	{
		id: 25,
		name: 'Vọng âm luden',
		type: 'combinedItem',
		description: 'Kỹ năng gây thêm 200 sát thương',
		bitem: [3,7],
		img : 'data/img/item/combined_items/c17.png',
	},
	{
		id: 26,
		name: 'Quỷ thư morello',
		type: 'combinedItem',
		description: 'Kỹ năng thiêu đốt 2,5% máu tối đa kẻ địch mỗi giây',
		bitem: [2,3],
		img : 'data/img/item/combined_items/c18.png',
	},
	{
		id: 27,
		name: 'Ma vũ song kiếm',
		type: 'combinedItem',
		description: 'Tránh tất cả đòn đánh chí mạng',
		bitem: [1,5],
		img : 'data/img/item/combined_items/c19.png',
	},
	{
		id: 28,
		name: 'Mũ phù thủy Rabadon',
		type: 'combinedItem',
		description: '+50% sát thương kỹ năng',
		bitem: [3,3],
		img : 'data/img/item/combined_items/c20.png',
	},
	{
		id: 29,
		name: 'Đại bác liên thanh',
		type: 'combinedItem',
		description: 'Đòn đánh không thể trượt, tăng gấp đôi tầm đánh',
		bitem: [5,5],
		img : 'data/img/item/combined_items/c21.png',
	},
	{
		id: 30,
		name: 'Bùa đỏ',
		type: 'combinedItem',
		description: 'Đòn đánh gây thêm hiệu ứng thiêu đốt bằng 2,5% sát thương',
		bitem: [1,2],
		img : 'data/img/item/combined_items/c22.png',
	},
	{
		id: 31,
		name: 'Dây chuyền chuộc tội',
		type: 'combinedItem',
		description: 'Khi chết hồi 1000 cho đồng đội trong phạm vi sử dụng',
		bitem: [2,7],
		img : 'data/img/item/combined_items/c23.png',
	},
	{
		id: 32,
		name: 'Cuồng cung Runaan',
		type: 'combinedItem',
		description: 'Đòn đánh tấn công thêm 2 mục tiêu, đòn đánh thêm gây 50% sát thương',
		bitem: [4,6],
		img : 'data/img/item/combined_items/c24.png',
	},
	{
		id: 33,
		name: 'Quyền trượng đại thiên sứ',
		type: 'combinedItem',
		description: 'Nhận 20 mana mỗi khi dùng kỹ năng',
		bitem: [7,7],
		img : 'data/img/item/combined_items/c25.png',
	},
	{
		id: 34,
		name: 'Ngọn giáo Shojin',
		type: 'combinedItem',
		description: 'Sau khi dùng kỹ năng đòn đánh thường hồi lại 15% năng lượng tối đa',
		bitem: [0,7],
		img : 'data/img/item/combined_items/c26.png',
	},
	{
		id: 35,
		name: 'Dao điện Statikk',
		type: 'combinedItem',
		description: 'Sau mỗi 3 đòn đánh gây 100 sát thương phép',
		bitem: [5,7],
		img : 'data/img/item/combined_items/c27.png',
	},
	{
		id: 36,
		name: 'Phá kiếm',
		type: 'combinedItem',
		description: 'Đòn đánh có tỉ lệ giải giới',
		bitem: [1,4],
		img : 'data/img/item/combined_items/c28.png',
	},
	{
		id: 37,
		name: 'Ỷ thiên kiếm',
		type: 'combinedItem',
		description: 'Mỗi giây có 5% tỉ lệ nhận được 100% tỉ lệ chí mạng',
		bitem: [0,5],
		img : 'data/img/item/combined_items/c29.png',
	},
	{
		id: 38,
		name: 'Giáp gai',
		type: 'combinedItem',
		description: 'Phản lại 35% sát thương từ đòn đánh thường',
		bitem: [1,1],
		img : 'data/img/item/combined_items/c30.png',
	},
	{
		id: 39,
		name: 'Rìu đại mãng xà',
		type: 'combinedItem',
		description: 'Đòn đánh gây thêm sát thương theo hình vòng cung bằng 10% máu tối đa',
		bitem: [2,5],
		img : 'data/img/item/combined_items/c31.png',
	},
	{
		id: 40,
		name: 'Giáp máu Warmog',
		type: 'combinedItem',
		description: 'Mỗi giây hồi 3% máu tối đa',
		bitem: [2,2],
		img : 'data/img/item/combined_items/c32.png',
	},
	{
		id: 41,
		name: 'Kiếm ma Youmuu',
		type: 'combinedItem',
		description: 'Người sử dụng cũng là 1 sát thủ',
		bitem: [0,6],
		img : 'data/img/item/combined_items/c33.png',
	},
	{
		id: 42,
		name: 'Yuumi',
		type: 'combinedItem',
		description: 'Người sử dụng cũng là 1 pháp sư',
		bitem: [3,6],
		img : 'data/img/item/combined_items/c34.png',
	},
	{
		id: 43,
		name: 'Cờ Zeke',
		type: 'combinedItem',
		description: 'Đồng đội xung quanh nhận thêm 10% tốc độ đánh',
		bitem: [0,2],
		img : 'data/img/item/combined_items/c35.png',
	},
	{
		id: 44,
		name: 'Phong kiếm',
		type: 'combinedItem',
		description: 'Khi bắt đầu trận đấu, loại bỏ 1 đối thủ trong vòng 5 giây',
		bitem: [2,4],
		img : 'data/img/item/combined_items/c36.png',
	},
]