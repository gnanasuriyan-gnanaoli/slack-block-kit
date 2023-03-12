import { Preview } from "./preview.js";

export class SlackBlockKitBuilder{
  BLOCKS = {
    "plain-text": {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>"
      }
    },
    "divider": {
      "type": "divider"
    },
    "header": {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "This is a header block",
        "emoji": true
      }
    },
    "image": {
      "type": "image",
      "title": {
        "type": "plain_text",
        "text": "I Need a Marg",
        "emoji": true
      },
      "image_url": "https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg",
      "alt_text": "marg"
    },
    "context": {
      "type": "context",
      "elements": [
        {
          "type": "plain_text",
          "text": "Author: K A Applegate",
          "emoji": true
        }
      ]
    },
    "link-button": {
  		"type": "actions",
  		"elements": [
  			{
  				"type": "button",
  				"text": {
  					"type": "plain_text",
  					"text": "Click Me",
  					"emoji": true
  				},
  				"value": "click_me_123",
  				"url": "https://google.com",
  				"action_id": "actionId-0"
  			}
  		]
  	}
  }
  constructor() {
    this.outputBlocks = {
      "blocks": []
    }
  }

  blockIndexOf(id){
    return this.outputBlocks.blocks.findIndex(block => block.blockID === id)
  }
  
  updateBlock(id, value){
    this.outputBlocks.blocks[this.blockIndexOf(id)] = value;
    this.preview();
  }
  
  addBlock(type){
    var newBlock = {...this.BLOCKS[type]};
    newBlock.blockID = Math.random().toString(16).slice(2);
    this.outputBlocks.blocks.push(newBlock)
    this.preview();
  }

  preview(){
    new Preview({...this.outputBlocks}).call();
  }
  clearBlocks = function(){
    this.outputBlocks = {
      "blocks": []
    }
  }
}