const elements = {
  itemForm: document.getElementById('item-form'),
  itemInput: document.getElementById('item-input'),
  itemList: document.getElementById('item-list'),
};

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function addItem(e) {
  e.preventDefault();

  const newItem = elements.itemInput.value;
  // Validate Input
  if (newItem.trim() === '') {
    alert('Please add an item');
    return;
  }
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  elements.itemList.appendChild(li);
  elements.itemInput.value = '';
}

// Event Listeners
elements.itemForm.addEventListener('submit', addItem);
