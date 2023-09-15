const VijaySelectorBtn = document.querySelector('#Vijay-selector');
const PriyaSelectorBtn = document.querySelector('#Priya-selector');
const utkarshSelectorBtn = document.querySelector('#utkarsh-selector');
const sauravSelectorBtn = document.querySelector('#saurav-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button');
const messages = JSON.parse(localStorage.getItem('messages')) || [];

const createChatMessageElement = (message) => `
  <div class="message ${message.sender === 'utkarsh' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
  </div>
`;

window.onload = () => {
  messages.forEach((message) => {
    chatMessages.innerHTML += createChatMessageElement(message);
  });
};

let messageSender = 'utkarsh';

const updateMessageSender = (name) => {
  messageSender = name;
  chatHeader.innerText = `${messageSender} chatting..`;
  chatInput.placeholder = `Type here, ${messageSender}...`;

  if (name === 'Vijay') {
    johnSelectorBtn.classList.add('active-person');
    janeSelectorBtn.classList.remove('active-person');
  } else if (name === 'utkarsh') {
    utkarshSelectorBtn.classList.add('active-person');
    sauravSelectorBtn.classList.remove('active-person');
  } else if (name === 'Priya') {
    janeSelectorBtn.classList.add('active-person');
    johnSelectorBtn.classList.remove('active-person');
  } else if (name === 'saurav') {
    sauravSelectorBtn.classList.add('active-person');
    utkarshSelectorBtn.classList.remove('active-person');
  }

  /* Auto-focus the input field */
  chatInput.focus();
};

VijaySelectorBtn.onclick = () => updateMessageSender('Vijay');
PriyaSelectorBtn.onclick = () => updateMessageSender('Priya');
utkarshSelectorBtn.onclick = () => updateMessageSender('utkarsh');
sauravSelectorBtn.onclick = () => updateMessageSender('saurav');

const sendMessage = (e) => {
  e.preventDefault();
  const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  };
  /* Save message to local storage */
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
  /* Add message to DOM */
  chatMessages.innerHTML += createChatMessageElement(message);
  /* Clear input field */
  chatInputForm.reset();
  /* Scroll to the bottom of chat messages */
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

chatInputForm.addEventListener('submit', sendMessage);
clearChatBtn.addEventListener('click', () => {
  localStorage.clear();
  chatMessages.innerHTML = '';
});
