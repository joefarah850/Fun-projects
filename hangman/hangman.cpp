#include <iostream>
#include <random>
#include <fstream>

// cd "/Users/joefarah/Desktop/Fun-projects/hangman/" && g++ hangman.cpp -o hangman && "/Users/joefarah/Desktop/Fun-projects/hangman/"hangman

using namespace std;

int wrong = 0;

void hangman();

int main() {
  ifstream file("words.txt");
  vector<string> words;
  
  string str = "";
  while (file >> str) {
    words.push_back(str);
  }

  string guessed = "";
  int correct = 0;

  random_device rd;
  mt19937 gen(rd());
  uniform_int_distribution<> distr(0, words.size());

  int random = distr(gen);
  string word = words[random];
  string letters;

  for (int i = 0; i < word.length(); ++i) {
    letters[i] = '_';
  }

  while (wrong < 10) {
    cout << "Word to guess: ";
    for (int i = 0; i < word.length(); ++i) {
      cout << letters[i] << " ";
    }
    cout << endl;

    cout << "\nGuess a letter: ";
    char guess;
    cin >> guess;
    guessed += guess;

    int count = 0;
    for (int i = 0; i < word.length(); ++i) {
      if (guess == word[i]) {
        letters[i] = guess;
        count++;
        correct++;
      }
    }

    if (count == 0) {
      wrong++;
      cout << "Wrong!\n\n";
      hangman();
      cout << endl;
    }
    else {
      cout << "Correct!\n\n";
      hangman();
      cout << endl;
    }

    for (int i = 0; i < 30; ++i)
      cout << "*";
    cout << "\n\n";

    if (correct == word.length()) {
      cout << "Congratulations! You guessed the word \"" << word << "\" correctly!\n\n";
      exit(1);
    }

    sort(guessed.begin(), guessed.end());
    cout << "Letters guessed: ";
    for (int i = 0; i < guessed.length(); ++i) {
    cout << guessed[i] << " ";
    }
    cout << "\n\n";

  }
  cout << "Unfortunatly you didn't guess the word!\nThe word was: \"" << word << "\"\n\n";
  return 0;
}

void hangman() {
  switch(wrong) {
    case 1:
      cout << "-----" << endl;
      break;
    case 2:
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "-----" << endl;
      break;
    case 3:
      cout << "  ------" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "-----" << endl;
      break;
    case 4:
      cout << "  ------" << endl;
      cout << "  |    |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "-----" << endl;
      break;
    case 5:
      cout << "  ------" << endl;
      cout << "  |    |" << endl;
      cout << "  |    O" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "-----" << endl;
      break;
    case 6:
      cout << "  ------" << endl;
      cout << "  |    |" << endl;
      cout << "  |    O" << endl;
      cout << "  |    |" << endl;
      cout << "  |    |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "-----" << endl;
      break;
    case 7:
      cout << "  ------" << endl;
      cout << "  |    |" << endl;
      cout << "  |    O" << endl;
      cout << "  |   /|" << endl;
      cout << "  |    |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "-----" << endl;
      break;
    case 8:
      cout << "  ------" << endl;
      cout << "  |    |" << endl;
      cout << "  |    O" << endl;
      cout << "  |   /|\\" << endl;
      cout << "  |    |" << endl;
      cout << "  |" << endl;
      cout << "  |" << endl;
      cout << "-----" << endl;
      break;
    case 9:
      cout << "  ------" << endl;
      cout << "  |    |" << endl;
      cout << "  |    O" << endl;
      cout << "  |   /|\\" << endl;
      cout << "  |    |" << endl;
      cout << "  |   /" << endl;
      cout << "  |" << endl;
      cout << "-----" << endl;
      break;
    case 10:
      cout << "  ------" << endl;
      cout << "  |    |" << endl;
      cout << "  |    O" << endl;
      cout << "  |   /|\\" << endl;
      cout << "  |    |" << endl;
      cout << "  |   / \\" << endl;
      cout << "  |" << endl;
      cout << "-----" << endl;
      break;
  }
}