// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract GetSet{
    uint256 public value;
    function set(uint256 _value) public {
        value = _value;
    }
    function get() public view returns(uint256){
        return value;
    }
}