# Class for Nodes
class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None

    def get_data(self):
        return self.value

    def set_data(self, val):
        self.value = val

    def get_next(self):
        return self.next

    def set_next(self, nxt):
        self.next = nxt


# Class for Linked List
class LinkedList(object):
    def __init__(self, head=None):
        self.head = head
        self.count = 0

    # Get number of Nodes in the List
    def get_count(self):
        return self.count

    # Insert new Node at Head of List
    def insert(self, data):
        new_node = Node(data)
        new_node.set_next(self.head)
        self.head = new_node
        self.count += 1

    # Find the Node with value = val
    def find(self, val):
        item = self.head
        while item is not None:
            if item.get_data() == val:
                return item
            else:
                item = item.get_next()
        return None

    # Delete Node at specified index = idx
    def delete_at(self, idx):
        # check if we have so many Nodes in the List
        if idx > self.count - 1:
            return
        # Check if we want to delete the root
        if idx == 0:
            self.head = self.head.get_next()
        else:
            # get to the previous Node from the one to be deleted
            temp_idx = 0
            temp_node = self.head
            while temp_idx < idx-1:
                temp_node = temp_node.get_next()
                temp_idx += 1
            # Set its next Node to the next-next Node
            temp_node.set_next(temp_node.get_next().get_next())
            # Decrement the count to show we have excluded/deleted a Node
            self.count -= 1

    # Dumping contents of List
    def dump_list(self):
        tempNode = self.head
        while tempNode is not None:
            print(f'Node value = {tempNode.get_data()}')
            tempNode = tempNode.get_next()


# create a linked list and insert some items
itemlist = LinkedList()
itemlist.insert(38)
itemlist.insert(49)
itemlist.insert(13)
itemlist.insert(15)
itemlist.dump_list()

# exercise the list
print("Item count: ", itemlist.get_count())
print("Finding item: ", itemlist.find(13))
print("Finding item: ", itemlist.find(78))

# delete an item
print("Item count: ", itemlist.get_count())
itemlist.delete_at(3)
print("Item count: ", itemlist.get_count())
print("Finding item: ", itemlist.find(38))
itemlist.dump_list()
