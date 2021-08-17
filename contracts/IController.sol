// SPDX-FileCopyrightText: 2021 Livepeer <info@livepeer.org>

// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.4;

import "./utils/Pausable.sol";

abstract contract IController is Pausable {
    event SetContractInfo(bytes32 id, address contractAddress, bytes20 gitCommitHash);

    function setContractInfo(
        bytes32 _id,
        address _contractAddress,
        bytes20 _gitCommitHash
    ) external virtual;

    function updateController(bytes32 _id, address _controller) external virtual;

    function getContract(bytes32 _id) external view virtual returns (address);
}
