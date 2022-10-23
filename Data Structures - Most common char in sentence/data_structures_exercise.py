sentence = "This is a common interview question"

#find most common character in sentence

#create a dictionary to store the characters and their counts
#iterate through the sentence and add each character to the dictionary if it is not already there
#iterate through the dictionary and find the character with the highest count and return it

def most_common_character(sentence):
    character_count = {}
    for character in sentence:
        if character not in character_count:                        
            character_count[character] = 1                        
        else:                        
            character_count[character] += 1                        
    most_common_character = ''                        
    most_common_character_count = 0

    for character, count in character_count.items():                        
        if count > most_common_character_count:                        
            most_common_character = character
            most_common_character_count = count                        
    return most_common_character

print(most_common_character(sentence))