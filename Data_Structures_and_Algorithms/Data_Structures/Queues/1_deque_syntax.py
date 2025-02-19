# Import the deque from Collections Module
from collections import deque

# Create a new deque Queue
printer_queue = deque()

# Add items in the Queue
printer_queue.append('TaylorSwiftTickets.pdf')
printer_queue.append('MarketingNotes.docx')
printer_queue.append('Proof.png')

'''
# Print first item from the Queue
document = printer_queue.popleft()
print(f'Printing {document}')
'''

while len(printer_queue) > 0:
    document = printer_queue.popleft()
    print(f'Printing {document}')
