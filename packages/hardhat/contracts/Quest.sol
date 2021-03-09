// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.8.0;

contract Quest {
    mapping(address => string) private userFiles;
    address public owner;

    modifier _ownerOnly() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function claim(address payable player, uint256 amount)
        public
        payable
        _ownerOnly
    {
        player.transfer(amount);
    }
}
