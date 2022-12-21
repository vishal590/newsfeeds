//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract NewsFeed{

    uint256 totalFeeds;

    using Counters for Counters.Counter;
    Counters.Counter private _feedIds;
    
    constructor(){
        console.log("newsfeed deployed");
    }

    struct Feed {
        uint256 id;
        string title;
        string description;
        string location;
        string category;
        string coverImageHash;
        string date;
        address author;
    }

    event FeedCreated (
        uint256 id,
        string title,
        string description,
        string location,
        string category,
        string coverImageHash,
        string date,
        address author
    );

    Feed[] feeds;

    function getAllFeeds() public view returns (Feed[] memory){
        return feeds;
    }

    function getTotalFeeds() public view returns (uint256){
        return totalFeeds;
    }

    function getFeed(uint256 _id) public view returns (Feed memory){
        return feeds[_id];
    }

    function createFeed(
        string memory _title,
        string memory _description,
        string memory _location,
        string memory _category,
        string memory _coverImageHash,
        string memory _date
    ) public {
        require(bytes(_coverImageHash).length > 0);
        require(bytes(_title).length > 0);
        require(bytes(_description).length > 0);
        require(bytes(_location).length > 0);
        require(bytes(_category).length > 0);
        require(msg.sender != address(0));

        totalFeeds++;
        _feedIds.increment();

        feeds.push(
            Feed(
                _feedIds.current(),
                _title,
                _description,
                _location,
                _category,
                _coverImageHash,
                _date,
                msg.sender
            )
        );

    }


}