export const GUESSINGGAME_ADDRESS = "0x9f62EE65a8395824Ee0821eF2Dc4C947a23F0f25";
export const GUESSINGGAME_ABI = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mysteryNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"displayedNumber","type":"uint256"}],"name":"PlayerLost","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mysteryNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"displayedNumber","type":"uint256"}],"name":"PlayerWon","type":"event"},{"inputs":[{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"uint256","name":"_display","type":"uint256"},{"internalType":"bool","name":"_guess","type":"bool"}],"name":"determineWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"online","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"players","outputs":[{"internalType":"uint256","name":"wins","type":"uint256"},{"internalType":"uint256","name":"losses","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_display","type":"uint256"},{"internalType":"bool","name":"_guess","type":"bool"}],"name":"winOrLose","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdrawBet","outputs":[],"stateMutability":"nonpayable","type":"function"}]