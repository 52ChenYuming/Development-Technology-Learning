# promise中的状态
pending
resolved
rejected

resolved()的执行会使得Promise内部的状态发生了改变
使得pending变为resolved

resolve() 一经执行，就会带动then的执行