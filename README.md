# C_Cpp-Notebooks by Sagar Biswas

This repository is a complete study companion for learning C and C++ in a practical, student-friendly way. The goal of this README is simple: if you read this file fully, you should understand what every notebook and project contains, what topics are covered, and how to study them in the right order.

## Table of Contents

- [Who This Repository Is For](#who-this-repository-is-for)
- [Repository Contents](#repository-contents)
- [How to Use This Repository](#how-to-use-this-repository)
- [Main Notebook 1: C Programming Language](#main-notebook-1-c-programming-language)
- [Main Notebook 2: DataTypes in C++ - Data Structures](#main-notebook-2-datatypes-in-c---data-structures)
- [Header Files [C] (Separate Quick References)](#header-files-c-separate-quick-references)
- [Projects (All 7)](#projects-all-7)
- [Suggested Weekly Study Plan](#suggested-weekly-study-plan)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Who This Repository Is For

- Beginners starting C/C++ from zero.
- Students preparing for exams and interviews.
- Learners who want topic-by-topic revision notes.
- People who prefer notebook-style explanation with examples and practice.

## Repository Contents

### Main Notebooks

- `C Programming Language.pdf`
- `DataTypes_inCpp-DATA_STRUCTURES.pdf`

### Header Files [C] (Quick Reference PDFs)

- `Header Files [C]/ctype.h Header File in C.pdf`
- `Header Files [C]/string.h Header File in C.pdf`

### Other

- `LICENSE`
- `docs/` (GitHub Pages website)

## How to Use This Repository

1. Start with the C notebook and complete topics in order.
1. Practice each major concept by writing small console programs.
1. Build the two mini projects from the C notebook.
1. Move to the C++ notebook for data types and STL.
1. Use `ctype.h` and `string.h` PDFs as quick references while coding.
1. Explore the project section to see how these concepts are used in real CLI applications.

## Main Notebook 1: C Programming Language

PDF: [C Programming Language.pdf](C%20Programming%20Language.pdf)

This notebook builds C fundamentals from scratch and then moves into intermediate topics that matter for both academics and practical coding.

### Full Topic and Subtopic Coverage

1. Variables, Constants, and Keywords

- Variable naming rules and declaration patterns.
- Integer, floating, and character constants.
- Core C keywords and where they are used.
- Basic C program structure and compilation mindset.

1. Instructions and Operators

- Type declaration instructions.
- Arithmetic, assignment, relational, and logical operations.
- Type conversion and casting basics.
- Operator precedence and associativity.

1. Conditional Instructions

- `if`, `if-else`, and `else-if` ladder.
- Relational and logical operator usage.
- Ternary operator for compact decisions.
- `switch-case`, `break`, and nested decision flow.

1. Loop Control Instructions

- `while`, `do-while`, and `for` loops.
- Increment and decrement loop patterns.
- Nested loops for matrix and pattern logic.
- `break` and `continue` in real scenarios.

1. Functions and Recursion

- Function declaration, definition, and call flow.
- Parameters vs arguments.
- Return values and function design basics.
- Recursion, base case design, and trace thinking.

1. Pointers

- Address operator (`&`) and dereference operator (`*`).
- Pointer declaration and initialization.
- Pointer arithmetic basics.
- Pointer to pointer concept.
- Pointer-based function calls (call by reference style).

1. Arrays

- One-dimensional and two-dimensional arrays.
- Initialization and indexing patterns.
- Array memory layout intuition.
- Passing arrays to functions.

1. Strings

- Character arrays and null terminator (`\0`).
- Input/output approaches for strings.
- Common string operations.
- Safe string handling mindset.

1. Structures

- Declaring and using `struct`.
- Arrays of structures.
- Pointer to structure and `->` operator.
- Passing structures to functions.
- `typedef` for readable custom types.

1. File I/O

- Why files matter for persistent storage.
- `FILE *` and opening modes (`r`, `w`, `a`, binary variants).
- Reading and writing text/binary data.
- EOF handling and closing discipline.

1. Dynamic Memory Allocation

- Why dynamic memory is needed.
- `malloc`, `calloc`, `realloc`, and `free`.
- Leak prevention basics and pointer safety.

### Practice and Output From This Notebook

- Practice sets after each major part.
- Two mini projects:
  - Number Guessing Game.
  - Snake-Water-Gun.

### Skills You Gain After Completing It

- Build medium-sized C console applications.
- Use pointers confidently with arrays and functions.
- Work with file operations and dynamic memory safely.
- Solve exam-level and interview-level C programming tasks.

## Main Notebook 2: DataTypes in C++ - Data Structures

PDF: [DataTypes_inCpp-DATA_STRUCTURES.pdf](DataTypes_inCpp-DATA_STRUCTURES.pdf)

This notebook focuses on C++ data representation and practical STL choices with performance awareness.

### Full Topic and Subtopic Coverage

1. Storage Basics

- Bits, bytes, and storage hierarchy.
- `2^n` possibilities concept.
- Practical memory-capacity understanding.

1. Signed vs Unsigned

- Numeric ranges by bit-width.
- Overflow and underflow behavior.
- Correct use-cases for signed and unsigned values.

1. Primitive Data Types in C++

- `char`, `short`, `int`, `long`, `float`, `double`, `bool`.
- Size/range behavior and portability notes.
- Floating-point precision basics.

1. Non-Primitive Types and STL

- `string`, `vector`, `deque`, `list`, `array`.
- `map`, `unordered_map`, `set`, `unordered_set`.
- `stack`, `queue`, `priority_queue`.
- Ordering, duplication, access model, and memory style.
- Big-O perspective for practical container selection.

1. User-Defined Types

- `struct` and `class`.
- `enum`.
- `typedef` and `using`.
- Real-world data modeling using custom types.

### Practice and Output From This Notebook

- Text processing tasks.
- Scheduler and queue-based scenarios.
- Map/set lookup exercises.
- Container selection practice.

### Skills You Gain After Completing It

- Choose correct C++ data types for real tasks.
- Select STL containers based on speed and memory trade-offs.
- Understand ordered vs unordered container behavior.
- Build cleaner and faster C++ logic.

## Header Files [C] (Separate Quick References)

These two PDFs are intentionally separate from the main two notebooks. Use them as quick lookup sheets while coding in C.

### `ctype.h`

PDF: [ctype.h Header File in C.pdf](Header%20Files%20%5BC%5D/ctype.h%20Header%20File%20in%20C.pdf)

Main coverage:

- Character class checks: `isalnum`, `isalpha`, `isdigit`, `isxdigit`, `islower`, `isupper`, `isspace`, `ispunct`, `isprint`, `isgraph`, `iscntrl`.
- Case conversion: `tolower`, `toupper`.
- Input validation and cleaning patterns.

### `string.h`

PDF: [string.h Header File in C.pdf](Header%20Files%20%5BC%5D/string.h%20Header%20File%20in%20C.pdf)

Main coverage:

- Copy functions: `strcpy`, `strncpy`.
- Concatenation functions: `strcat`, `strncat`.
- Comparison functions: `strcmp`, `strncmp`.
- Safe workflow mindset for handling C strings.

## Projects (All 7)

These projects complement the notebooks and show practical implementation of C/C++ concepts in production-style CLI workflows.

### 1) SecureBank-CLI

- Repository: [SagarBiswas-MultiHAT/SecureBank-CLI](https://github.com/SagarBiswas-MultiHAT/SecureBank-CLI)
- Summary: A compact C++17 banking simulator with secure credential handling, atomic JSON/JSONL persistence, audited transactions, and safe defaults (no overdrafts).
- Highlights:
  - CMake build.
  - Unit tests and sanitizers.
  - Admin tooling.
  - Docker support.

### 2) Contact-Management-System

- Repository: [SagarBiswas-MultiHAT/Contact-Management-System](https://github.com/SagarBiswas-MultiHAT/Contact-Management-System)
- Summary: A production-grade C11 contact manager with SQLite storage and Argon2id password hashing.
- Highlights:
  - Interactive menu and full non-interactive CLI.
  - CSV import/export with dry-run support.
  - JSON output for automation scripts.
  - Backup flow and unit/integration testing.

### 3) CustomerSlip-CLI

- Repository: [SagarBiswas-MultiHAT/CustomerSlip-CLI](https://github.com/SagarBiswas-MultiHAT/CustomerSlip-CLI)
- Summary: A production-quality C++17 receipt and customer record CLI for POS-style workflows.
- Highlights:
  - Captures customer details and computes discounts/totals.
  - Prints a clean receipt.
  - Atomic CSV and JSONL persistence.
  - CMake, tests, and export utilities.

### 4) AirportDesk-Assistant

- Repository: [SagarBiswas-MultiHAT/AirportDesk-Assistant](https://github.com/SagarBiswas-MultiHAT/AirportDesk-Assistant)
- Summary: A compact C++ utility for validating and cleaning airport desk records.
- Highlights:
  - Time format, flight ID, and computer ID checks.
  - Guided input flow.
  - File analysis and CSV export of valid rows.

### 5) Impress-Crush-Cpp-ASCII

- Repository: [SagarBiswas-MultiHAT/Impress-Crush-Cpp-ASCII](https://github.com/SagarBiswas-MultiHAT/Impress-Crush-Cpp-ASCII)
- Summary: A C++ image-to-ASCII application with detailed character mapping.
- Highlights:
  - Gamma correction and filtering.
  - Multi-region shape matching.
  - Randomness and multithreading support.
  - Tuned for Windows terminals with raster fonts (8x12).

### 6) competitive_programming-codeforce

- Repository: [SagarBiswas-MultiHAT/competitive_programming-codeforce](https://github.com/SagarBiswas-MultiHAT/competitive_programming-codeforce)
- Summary: Beginner-focused Codeforces practice set with solved 800-rated C++ problems.
- Highlights:
  - Organized by problem number.
  - Statement screenshots.
  - Step-by-step solution explanations.

### 7) RandomPasswordGeneratorCpp

- Repository: [SagarBiswas-MultiHAT/RandomPasswordGeneratorCpp](https://github.com/SagarBiswas-MultiHAT/RandomPasswordGeneratorCpp)
- Summary: A simple and secure C++ CLI tool for random password generation.
- Highlights:
  - User-defined password length.
  - Mixed uppercase, lowercase, numbers, and special symbols.
  - Good beginner project for randomness and basic security concepts.

## Suggested Weekly Study Plan

### Week 1: Core C Foundation

- Program structure, variables, constants, operators, and conditionals.
- Daily practice: 6 to 8 small code snippets.

### Week 2: C Logic and Abstraction

- Loops, functions, recursion, arrays, and strings.
- Daily practice: 4 to 6 logic problems.

### Week 3: Memory and Data Modeling

- Pointers, structures, file I/O, dynamic memory.
- Daily practice: one mini utility using file persistence.

### Week 4: C++ Types and STL

- Storage model, primitive types, STL containers, and complexity.
- Daily practice: choose one problem and solve it with two different containers.

### Week 5: Project Implementation

- Build or review 2-3 projects from the project list.
- Focus on testing, input validation, and error handling.

## Common Mistakes to Avoid

- Forgetting null termination in C strings.
- Using `scanf` patterns that break on spaces without proper handling.
- Pointer misuse (uninitialized pointers, missing `free`).
- Choosing STL containers without considering complexity trade-offs.
- Skipping test coverage for CLI edge cases.

## How to Contribute

- Open an issue for corrections, topic requests, or broken links.
- Submit a pull request for content improvements.
- Keep explanations clear and beginner-friendly.

## License

This repository is licensed under the MIT License.
See [LICENSE](LICENSE).

## Final Note

These notes were written from a learner mindset: simple explanation first, then implementation. If you find any gap or want additional notebook coverage, feel free to open an issue or submit a pull request.
