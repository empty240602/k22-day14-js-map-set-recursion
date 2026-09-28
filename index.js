// Bài 1
const userA_searches = [
  "áo thun",
  "quần jeans",
  "áo khoác",
  "áo thun",
  "giày cừu",
];
const userB_searches = ["quần jeans", "mũ bảo hiểm", "giày cừu", "balo"];

const getUniqueTags = (arr) => {
  const newArr = [];
  // Cách 1
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!newArr.includes(arr[i])) {
  //       newArr.push(arr[i]);
  //     }
  //   }

  // Cách 2
  arr.forEach((tag) => {
    if (!newArr.includes(tag)) {
      newArr.push(tag);
    }
  });

  return newArr;
};

console.log(getUniqueTags(userA_searches));

const getCommonTags = (arr1, arr2) => {
  const newArr = [];
  // Cách 1
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr2.includes(arr1[i]) && !newArr.includes(arr1[i])) {
  //       newArr.push(arr1[i]);
  //     }
  //   }

  // Cách 2
  arr1.forEach((tag) => {
    if (arr2.includes(tag) && !newArr.includes(tag)) {
      newArr.push(tag);
    }
  });

  return newArr;
};
console.log(getCommonTags(userA_searches, userB_searches));
console.log(getCommonTags(["áo thun", "áo thun", "balo"], ["áo thun"]));
console.log(getCommonTags(["áo thun"], ["balo"]));
console.log(getUniqueTags([]));

// Bài 2
const cart = new Map();

const addToCart = (productId, productInfo) => {
  if (!cart.has(productId)) {
    cart.set(productId, { ...productInfo, quantity: 1 });
  } else {
    let product = cart.get(productId);
    const updatedProdct = { ...product, quantity: product.quantity + 1 };

    cart.set(productId, updatedProdct);
  }
};

const getTotalPrice = () => {
  let total = 0;

  for (let item of cart.values()) {
    total += item.price * item.quantity;
  }

  return total;
};

addToCart(101, { name: "Áo thun", price: 150000 });
addToCart(102, { name: "Quần jeans", price: 300000 });
addToCart(101, { name: "Áo thun", price: 150000 });

console.log(cart.size);
console.log(cart.get(101));
console.log(cart.get(102));

console.log(getTotalPrice());

const voucherMap = new Map([
  ["SALE10", 10],
  ["SALE20", 20],
]);

const applyVoucher = (voucherMap) => {
  let total = getTotalPrice();

  const voucherCode = prompt("Nhập mã voucher:");

  if (voucherMap.has(voucherCode)) {
    const discount = voucherMap.get(voucherCode);
    return total * (1 - discount / 100);
  }

  return total;
};

console.log(applyVoucher(voucherMap));

// Bài 3
const salesReport = {
  branch: "Hà Nội",
  revenue: 500,
  subBranches: [
    {
      branch: "Cầu Giấy",
      revenue: 200,
      subBranches: [{ branch: "Cầu Giấy 1", revenue: 50, subBranches: [] }],
    },
    {
      branch: "Đống Đa",
      revenue: 150,
      subBranches: [],
    },
  ],
};

const calculateTotalRevenue = (report) => {
  const revenue = report.revenue;

  if (Array.isArray(report.subBranches) && report.subBranches.length === 0) {
    return revenue;
  }
  const total = report.subBranches.reduce((acc, cur) => {
    return acc + calculateTotalRevenue(cur);
  }, revenue);

  return total;
};

console.log(calculateTotalRevenue(salesReport));

console.log(
  calculateTotalRevenue({
    branch: "Hải Phòng",
    revenue: 100,
    subBranches: [],
  }),
);
