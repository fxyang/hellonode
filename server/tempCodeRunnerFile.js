function a() {
  throw "err in a";
}

function main() {
  try {
    a();
  } catch (error) {
    console.log(error);
  }
  console.log("hello new world");
}