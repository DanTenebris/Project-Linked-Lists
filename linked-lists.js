/* eslint-disable no-plusplus */

const linkedListFactory = () => {
  let list = {
    value: 1,
    nextNode: {
      value: "three",
      nextNode: {
        value: 5,
        nextNode: null,
      },
    },
  };

  const _nodeFactory = (value = null, nextNode = null) => ({ value, nextNode });

  const _checkListLenght = () => {
    const listKeys = Object.keys(list);
    return listKeys.length;
  };

  const append = (value) => {
    if (_checkListLenght()) {
      let listVal = list;
      while (listVal.nextNode !== null) {
        listVal = listVal.nextNode;
      }
      listVal.nextNode = _nodeFactory(value);
    } else {
      list = _nodeFactory(value);
    }
  };

  const prepend = (value) => {
    if (_checkListLenght()) {
      const listVal = list;
      list = _nodeFactory(value, listVal);
    } else {
      list = _nodeFactory(value);
    }
  };

  const size = () => {
    if (_checkListLenght()) {
      let depth = 1;
      let listVal = list;
      while (listVal.nextNode !== null) {
        listVal = listVal.nextNode;
        depth++;
      }

      return depth;
    }

    return 0;
  };

  const head = () => list;

  const tail = () => {
    if (_checkListLenght()) {
      let listVal = list;

      while (listVal.nextNode !== null) {
        listVal = listVal.nextNode;
      }

      return listVal;
    }

    return list;
  };

  const at = (index) => {
    if (_checkListLenght()) {
      let depth = 0;
      let listVal = list;

      while (depth !== index && listVal.nextNode !== null) {
        depth++;
        listVal = listVal.nextNode;
      }

      if (depth === index) {
        return listVal;
      }

      return "Node not found";
    }

    return "The list is empty";
  };

  const pop = () => {
    if (_checkListLenght()) {
      if (list.nextNode === null) {
        list = {};
      } else {
        let listVal = list;
        while (listVal.nextNode.nextNode !== null) {
          listVal = listVal.nextNode;
        }

        listVal.nextNode = null;
      }
    }
  };

  const contains = (value) => {
    if (_checkListLenght()) {
      let listVal = list;
      while (listVal.value !== value && listVal.nextNode !== null) {
        listVal = listVal.nextNode;
      }

      if (listVal.value === value) {
        return true;
      }
      return false;
    }

    return false;
  };

  const find = (value) => {
    if (_checkListLenght()) {
      let depth = 0;
      let listVal = list;
      while (listVal.value !== value && listVal.nextNode !== null) {
        depth++;
        listVal = listVal.nextNode;
      }

      if (listVal.value === value) {
        return depth;
      }

      return null;
    }

    return null;
  };

  const toString = () => {
    if (_checkListLenght()) {
      let listVal = list;
      let listString = "";
      while (listVal.nextNode !== null) {
        listString += `( ${listVal.value} ) -> `;
        listVal = listVal.nextNode;
      }
      listString += `( ${listVal.value} ) -> null`;

      return listString;
    }

    return "null";
  };

  const insertAt = (value, index) => {
    if (_checkListLenght()) {
      let depth = 0;
      let listVal = list;

      if (depth === index) {
        list = _nodeFactory(value, listVal);
      } else {
        depth++;
        while (depth !== index && listVal.nextNode !== null) {
          depth++;
          listVal = listVal.nextNode;
        }
        listVal.nextNode = _nodeFactory(value, listVal.nextNode);
      }
    } else {
      list = _nodeFactory(value);
    }
  };

  const removeAt = (index) => {
    if (_checkListLenght()) {
      let depth = 0;
      let listVal = list;

      if (depth === index) {
        list = listVal.nextNode;
      } else {
        let i = 0;
        while (i === 0) {
          depth++;
          if (listVal.nextNode === null) {
            i++;
            break;
          } else if (depth === index) {
            const newNode = listVal.nextNode.nextNode;
            listVal.nextNode = newNode;
            i++;
            break;
          }

          listVal = listVal.nextNode;
        }
      }
    }
  };

  return {
    list,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const listObj = linkedListFactory();
console.log(listObj.toString());
