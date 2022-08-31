Search.setIndex({"docnames": ["cmake-syntax", "cxx-fortran", "dependencies", "environment", "fetch-content", "guide", "hello-cmake", "hello-ctest", "index", "probing", "python-bindings", "quick-reference", "setup", "targets", "tips-and-tricks", "zbibliography"], "filenames": ["cmake-syntax.rst", "cxx-fortran.rst", "dependencies.rst", "environment.rst", "fetch-content.rst", "guide.rst", "hello-cmake.rst", "hello-ctest.rst", "index.rst", "probing.rst", "python-bindings.rst", "quick-reference.rst", "setup.rst", "targets.rst", "tips-and-tricks.rst", "zbibliography.rst"], "titles": ["CMake syntax", "Mixing C++ and Fortran", "Finding and using dependencies", "Detecting your environment", "Automated dependency handling with <code class=\"docutils literal notranslate\"><span class=\"pre\">FetchContent</span></code>", "Instructor\u2019s guide", "From sources to executables", "Creating and running tests with CTest", "CMake hands-on workshop", "Probing compilation, linking, and execution", "Mixing Python and compiled languages", "Quick Reference", "Setting up your system", "Target-based build systems with CMake", "Using CMake: tips and tricks", "Bibliography"], "terms": {"how": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13], "can": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14], "we": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14], "achiev": [0, 3, 6, 9, 10, 13], "more": [0, 1, 3, 6, 9, 10, 13, 14], "over": [0, 5, 13, 14], "system": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 14], "gener": [0, 1, 3, 6, 7, 9, 10, 13], "i": [0, 1, 2, 3, 4, 5, 7, 9, 10, 12, 13, 14], "possibl": [0, 2, 7, 10, 14], "let": [0, 3, 4, 6, 7, 9, 13], "decid": [0, 1, 5, 13, 14], "what": [0, 2, 3, 4, 5, 7, 13, 14], "learn": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 13, 14], "defin": [0, 1, 2, 7, 8, 10, 13, 14], "us": [0, 3, 4, 5, 6, 8, 9, 13], "them": [0, 2, 3, 4, 6, 7, 9, 10, 13], "oper": 0, "elseif": 0, "els": [0, 3, 14], "endif": [0, 2, 3, 14], "structur": [0, 6, 8, 13, 14], "artifact": [0, 2, 3, 6, 9, 13], "handl": [0, 3, 5, 6, 7, 8, 10, 13], "role": 0, "cach": [0, 13], "offer": [0, 2, 4, 6, 9, 10, 12], "domain": [0, 6, 8, 13], "specif": [0, 2, 3, 6, 8, 9, 13], "languag": [0, 1, 3, 4, 5, 6, 7, 8, 13], "describ": [0, 2, 6, 8], "nativ": [0, 1, 2, 4, 6], "platform": [0, 2, 5, 6, 8], "you": [0, 1, 2, 3, 4, 7, 8, 9, 10, 12, 13, 14], "might": [0, 2, 3, 7, 8, 12], "run": [0, 3, 4, 5, 6, 8, 10, 12, 13], "In": [0, 1, 2, 3, 4, 6, 7, 9, 12, 13, 14], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14], "episod": [0, 1, 2, 3, 4, 5, 7, 8, 9, 14], "get": [0, 1, 2, 6, 10, 13, 14], "acquaint": [0, 2, 6], "its": [0, 2, 3, 4, 6, 7, 13], "rememb": [0, 1, 7, 13], "case": [0, 1, 2, 5, 6, 9, 13, 14], "insensit": [0, 1, 6], "now": [0, 6, 7, 12, 14], "have": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14], "look": [0, 7, 9], "main": [0, 2, 6, 7, 9, 13], "element": [0, 8, 13], "These": [0, 1, 2, 7, 8, 9, 12, 13, 14], "ar": [0, 1, 2, 3, 4, 7, 8, 9, 10, 12, 13, 14], "either": [0, 1, 3, 6, 13, 14], "obtain": [0, 1, 2, 4, 6, 9], "list": [0, 1, 2, 3, 4, 6, 7, 13], "creat": [0, 1, 4, 5, 6, 8, 9, 10, 13], "new": [0, 7, 12, 14], "valu": [0, 3, 7, 13, 14], "parent_scop": 0, "alwai": [0, 1, 6, 14], "string": [0, 3, 6, 9], "type": [0, 1, 6, 8, 12], "certain": [0, 9], "interpret": [0, 7, 10], "other": [0, 1, 2, 8, 9, 12, 13], "If": [0, 1, 2, 4, 7, 8, 9, 10, 12, 13, 14], "want": [0, 1, 2, 3, 4, 7, 8, 9, 10, 13, 14], "declar": [0, 1, 4, 6, 7, 10, 13, 14], "provid": [0, 1, 2, 6, 8, 9, 10, 12], "separ": [0, 5, 6, 8, 13, 14], "manipul": [0, 7], "famili": [0, 2, 6, 13], "inspect": [0, 1, 9], "ani": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "dereferenc": 0, "bash": [0, 7], "shell": 0, "For": [0, 2, 3, 6, 7, 8, 13], "exampl": [0, 1, 2, 3, 6, 9, 13, 14], "follow": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13], "snippet": [0, 9], "content": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13], "hello": [0, 2, 3, 7, 8, 13], "world": [0, 2, 9, 13], "two": [0, 1, 2, 4, 7], "thing": [0, 6, 14], "note": [0, 2, 4, 6, 7, 8, 9, 13], "about": [0, 1, 3, 6, 10, 14], "within": [0, 1, 2, 4, 6, 7, 10, 13], "an": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 13, 14], "empti": [0, 13], "nest": [0, 13], "outer_": 0, "inner_vari": 0, "_variabl": 0, "thei": [0, 1, 2, 6, 8, 9, 13, 14], "evalu": 0, "from": [0, 1, 2, 3, 4, 5, 7, 8, 9, 13, 14], "insid": [0, 12, 14], "out": [0, 1, 2, 3, 4, 7, 13, 14], "One": [0, 10], "most": [0, 3, 4, 7, 8, 9, 13], "confus": 0, "aspect": 0, "scope": [0, 13, 14], "There": [0, 4, 6, 7, 8, 13], "three": 0, "function": [0, 1, 4, 6, 8, 9, 10], "effect": [0, 5, 6, 8, 13], "when": [0, 1, 2, 3, 4, 6, 7, 9, 13, 14], "visibl": [0, 1], "outsid": [0, 2, 14], "directori": [0, 2, 3, 6, 9, 13], "process": [0, 6, 9], "cmakelist": [0, 1, 3, 7, 9, 10, 13, 14], "txt": [0, 1, 3, 7, 9, 10, 13, 14], "parent": [0, 14], "folder": [0, 1, 2, 3, 4, 6, 7, 9, 10, 14], "avail": [0, 4, 6, 7, 8, 9, 10], "current": [0, 13], "propag": [0, 6, 13, 14], "persist": 0, "across": [0, 13, 14], "call": [0, 1, 2, 4, 6, 7, 9, 14], "all": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 14], "project": [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15], "modifi": [0, 1, 3, 9, 13, 14], "requir": [0, 1, 2, 6, 7, 8, 9, 10, 12, 13, 14], "special": [0, 2, 3, 6, 10], "form": [0, 8, 10], "docstr": 0, "forc": 0, "here": [0, 6, 10, 12, 13], "few": [0, 1, 2, 3, 6, 7, 8, 10, 12, 13, 14], "project_binary_dir": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "project_source_dir": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "locat": [0, 4, 7, 10, 13], "root": [0, 6, 10, 13], "cmake_current_list_dir": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "being": [0, 6], "built": [0, 1, 2, 3, 4, 6, 13, 14], "essenti": [0, 7], "block": [0, 8], "allow": [0, 3, 6, 7, 10, 14], "includ": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "construct": [0, 2], "target_": [0, 6, 13], "find": [0, 1, 3, 5, 6, 7, 8, 10, 13, 14], "complet": [0, 1, 2, 3, 7, 10, 13], "macro": [0, 1], "top": [0, 6, 12, 14], "basic": [0, 1, 6, 13, 14], "prove": [0, 14], "avoid": [0, 7, 10, 13, 14], "repetit": [0, 14], "your": [0, 1, 2, 4, 5, 8, 10, 13, 14], "script": [0, 6, 9, 10, 13, 14], "differ": [0, 1, 3, 4, 5, 6, 8, 13, 14], "between": [0, 1, 6, 8, 10, 13, 14], "own": [0, 2, 4, 8, 9, 12, 13, 14], "back": [0, 14], "caller": [0, 14], "do": [0, 1, 2, 3, 4, 6, 8, 9, 12, 14], "target_link_librari": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15], "collect": [0, 6, 13, 14], "come": [0, 1, 3, 4, 9, 14], "rich": [0, 2, 14], "ecosystem": [0, 2, 14], "probabl": [0, 14], "write": [0, 1, 3, 5, 6, 8, 10, 14], "encapul": 0, "frequent": [0, 14], "full": [0, 2, 6, 7, 8], "sure": [0, 2, 8, 9], "familiar": [0, 8, 14], "program": [0, 1, 2, 3, 6, 7, 8, 10], "sinc": [0, 3, 4, 10, 13], "appear": [0, 8], "variant": 0, "repeat": [0, 7], "truth": 0, "determin": [0, 13], "boolean": 0, "true": [0, 1, 7], "express": [0, 6, 7, 13], "1": [0, 1, 2, 3, 5, 7, 9, 10, 13, 14], "ON": [0, 7, 14], "ye": [0, 13], "y": 0, "fals": 0, "0": [0, 1, 2, 6, 8, 9, 13], "off": [0, 7, 14], "NO": [0, 13], "n": [0, 1, 7, 13], "ignor": [0, 6, 8], "notfound": 0, "comparison": 0, "strequal": 0, "equal": 0, "version": [0, 2, 3, 4, 7, 8, 10], "version_equ": 0, "expand": 0, "befor": [0, 4, 8, 13], "see": [0, 12, 13, 14], "offici": [0, 1, 4, 8, 14], "document": [0, 2, 4, 7, 8, 9, 10, 12, 14], "further": [0, 1, 13], "detail": [0, 1, 8, 13], "previou": [0, 3, 5, 7, 8], "static": [0, 2, 6, 8, 9, 13], "share": [0, 1, 2, 6, 8, 13], "librari": [0, 2, 4, 5, 7, 8, 9, 10, 13], "depend": [0, 1, 5, 6, 8, 9, 10, 12, 14], "make_shared_librari": 0, "check": [0, 1, 2, 4, 5, 7, 13, 14], "each": [0, 1, 4, 5, 6, 7, 8, 13], "branch": [0, 4], "add_librari": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15], "appropri": [0, 1, 2, 3, 6, 7, 8], "c": [0, 2, 4, 5, 6, 7, 8, 9, 13], "fortran": [0, 2, 5, 6, 8, 9, 13, 14], "scaffold": [0, 1, 2, 3, 4, 6, 7, 9, 10, 13], "dai": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 13, 14], "02_condit": 0, "cxx": [0, 1, 2, 6, 7, 8, 9, 13], "A": [0, 2, 3, 4, 7, 8, 9, 10, 12, 13, 14], "work": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14], "solut": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 13, 14], "subfold": [0, 1, 2, 3, 4, 6, 7, 9, 10, 13], "f": [0, 2, 6, 9, 12, 13], "perform": [0, 1, 3, 7, 9, 10, 14], "same": [0, 4, 6, 9, 10, 14], "item": [0, 6, 13], "loop_var": 0, "endforeach": 0, "space": 0, "break": [0, 5], "continu": 0, "also": [0, 1, 2, 4, 6, 7, 9, 12, 13, 14], "typealong": [0, 3], "show": [0, 1, 2, 3, 4, 5, 6, 10, 12], "03_loop": 0, "goal": [0, 1, 9, 10, 13], "compil": [0, 1, 2, 5, 7, 8, 12, 13], "bunch": 0, "sourc": [0, 1, 2, 4, 5, 8, 9, 10, 13], "file": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "some": [0, 1, 7, 8, 9, 10, 14], "o3": 0, "optim": [0, 14], "level": [0, 1, 4, 10], "while": [0, 7, 10], "o2": 0, "flag": [0, 2, 3, 7, 13, 14], "properti": [0, 2, 3], "target": [0, 1, 2, 3, 4, 5, 8, 10], "discuss": [0, 4, 6, 9, 13, 14], "greater": 0, "length": [0, 13], "base": [0, 1, 3, 4, 5, 6, 8, 12, 14], "It": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10], "instruct": [0, 2, 12], "brows": [0, 8, 12], "tree": [0, 1, 10], "l": [0, 7, 12], "cmakecach": 0, "cmakefil": [0, 9], "3": [0, 4, 6, 7, 8, 10, 12, 13], "18": [0, 6, 7, 8], "check_cach": 0, "cmakedirectoryinform": 0, "cmakeoutput": 0, "log": 0, "cmaketmp": 0, "comput": [0, 8, 12, 13], "area": 0, "dir": [0, 7, 9, 13], "geometri": 0, "makefile2": 0, "makefil": [0, 2, 6], "progress": [0, 6], "mark": [0, 6, 7, 8], "targetdirectori": 0, "cmake_instal": 0, "libgeometri": 0, "wa": [0, 1, 2, 5, 6], "configur": [0, 2, 4, 6, 7, 10, 14], "plain": [0, 6], "text": [0, 6, 9, 12], "everi": [0, 4, 7, 14], "under": [0, 5, 8, 9], "intermedi": 0, "store": [0, 1, 6, 13], "togeth": [0, 6, 13], "link": [0, 1, 2, 4, 5, 6, 8, 12, 13], "line": [0, 1, 2, 3, 9], "like": [0, 2, 6, 7, 12, 14], "engag": 0, "debug": [0, 7], "one": [0, 1, 3, 4, 6, 9, 12, 13, 14], "point": [0, 2, 13, 14], "anoth": [0, 3, 6, 7, 9, 14], "wai": [0, 1, 2, 4, 7, 8, 12, 13, 14], "so": [0, 1, 2, 4, 6, 8, 13, 14], "workhors": [0, 1, 2], "mode": 0, "displai": [0, 12], "statu": [0, 2, 14], "incident": 0, "inform": [0, 3, 13], "fatal_error": [0, 6, 8], "report": [0, 3, 7], "error": [0, 2, 6, 8, 9], "prevent": 0, "bit": 0, "awkward": 0, "especi": [0, 6, 7], "name": [0, 1, 2, 3, 4, 6, 7, 9, 13], "make": [0, 2, 4, 6, 8, 9, 13], "life": 0, "easier": [0, 14], "var1": 0, "var2": 0, "varn": 0, "accept": [0, 1, 3, 4, 7, 13], "arbitrari": [0, 9], "number": [0, 1, 2, 3, 6, 7, 13], "standard": [0, 1, 2, 4, 6, 8, 9], "output": [0, 1, 3, 6, 7, 9, 10, 13], "cmake_c_compil": 0, "cmake_major_vers": 0, "does_not_exist": 0, "give": [0, 4, 6, 7, 8, 14], "usr": 0, "bin": [0, 13], "gcc": 0, "mention": [0, 8, 9, 14], "earlier": [0, 14], "d": [0, 2, 6, 7], "switch": [0, 6], "interfac": [0, 1, 2, 3, 10, 13], "cli": [0, 7], "pass": [0, 1, 2, 3, 6, 7, 9, 13], "our": [0, 2, 4, 6, 7, 9, 10, 13, 14], "That": [0, 1], "where": [0, 1, 6, 8, 12, 13], "plai": [0, 1, 7], "help_text": 0, "With": [0, 7, 8, 13], "toggl": [0, 8], "By": [0, 6, 7], "import": [0, 2, 9], "onli": [0, 2, 3, 4, 6, 7, 9, 10, 13], "relev": [0, 6, 13], "alreadi": [0, 2, 8, 10], "use_foo": 0, "foo": 0, "use_bar": 0, "NOT": 0, "use_zot": 0, "present": [0, 8], "default": [0, 1, 3, 6, 14], "realiz": 0, "whether": [0, 1, 2, 9, 14], "should": [0, 1, 2, 3, 4, 7, 8, 9, 10, 12, 13], "add": [0, 1, 3, 4, 5, 6, 7, 9, 10, 13, 14], "use_librari": 0, "make_static_librari": 0, "orchestr": 0, "04_option": 0, "fledg": 0, "which": [0, 1, 2, 3, 4, 6, 7, 8, 9, 12, 13], "empow": 0, "complex": [0, 6, 10, 13], "rule": [0, 2, 6], "mirror": [0, 1, 6, 13], "cmake_minimum_requir": [0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15], "add_subdirectori": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "add_execut": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15], "target_sourc": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "find_packag": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "find_fil": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "find_path": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "find_librari": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "find_program": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "target_include_directori": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "target_compile_opt": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "target_compile_definit": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "cmake_host_system_inform": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "configure_fil": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "execute_process": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "add_custom_command": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "try_compil": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "try_run": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "add_test": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15], "set_tests_properti": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15], "get_properti": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "set_properti": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "get_target_properti": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "set_target_properti": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "add_custom_target": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "cmake_current_source_dir": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "check_cxx_source_compil": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "check_cxx_compiler_flag": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "check_c_source_run": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "pkg_search_modul": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "fetchcontent_declar": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "fetchcontent_makeavail": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "fortrancinterface_verifi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "fortrancinterface_head": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "build": [1, 2, 3, 4, 5, 6, 7, 8, 10, 14], "ha": [1, 2, 4, 6, 7, 8, 10, 13], "support": [1, 6, 8, 14], "mani": [1, 4, 6, 7, 8, 9, 10, 13], "At": [1, 4, 6], "time": [1, 3, 4, 5, 6, 7, 10, 14], "cuda": 1, "ispc": 1, "asm": 1, "applic": [1, 8, 10], "scientif": 1, "context": 1, "often": [1, 4], "compon": [1, 2, 4, 10, 14], "written": [1, 10], "mostli": 1, "becaus": [1, 3], "legaci": 1, "tri": 1, "extrem": [1, 4, 7], "hard": [1, 12], "replac": [1, 3], "non": [1, 7], "profession": [1, 8], "programm": [1, 8], "order": [1, 7, 12, 13], "multipl": [1, 7, 8], "command": [1, 4, 10, 14], "my": [1, 2], "later": [1, 9], "invoc": [1, 6, 7, 13], "enable_languag": 1, "specifi": [1, 6, 7, 13], "given": [1, 2, 3, 6, 7, 8, 9, 13], "resolv": [1, 2], "extens": [1, 10], "f90": [1, 6, 10, 13], "without": [1, 13, 14], "preprocessor": 1, "through": [1, 2, 4, 6, 9], "highest": 1, "prioriti": 1, "linker": [1, 9, 13], "honor": 1, "The": [1, 2, 3, 5, 8, 9, 10, 12, 14], "viceversa": 1, "abl": [1, 4, 7, 9], "talk": 1, "fortran2003": 1, "beyond": [1, 10, 13], "fairli": 1, "straightforward": [1, 9], "emploi": 1, "iso_c_bind": 1, "inde": 1, "mandat": 1, "committe": 1, "start": [1, 6, 7, 12], "2003": 1, "edit": 1, "de": [1, 8], "facto": [1, 8], "lingua": 1, "franca": 1, "delv": 1, "suffic": [1, 4], "sai": 1, "interoper": [1, 10], "datatyp": 1, "pointer": [1, 9], "convent": 1, "nowadai": [1, 7, 8], "well": [1, 4, 6, 7], "establish": 1, "backtrac": 1, "final": [1, 6, 7], "bt": 1, "randomgen": 1, "print": [1, 3, 6, 7, 9, 13], "random": 1, "integ": [1, 7], "produc": [1, 3, 5, 7, 8, 9, 10, 13], "sampl": [1, 2, 8, 10], "20": [1, 8], "13": [1, 4, 5], "30": [1, 5, 8, 13], "40": [1, 5, 8, 13], "31": 1, "33": 1, "28": 1, "11": [1, 4, 5, 6, 10], "7": 1, "5": [1, 2, 13], "27": 1, "4": [1, 2, 4, 6, 8], "39": 1, "38": 1, "src": [1, 13, 14], "0x401316": 1, "0x401369": 1, "nix": 1, "a3syww9igm49zdzq3ibzw9m8ccvsgxla": 1, "glibc": 1, "2": [1, 2, 4, 5, 6, 8, 10, 13, 14], "32": 1, "lib": [1, 13], "libc": 1, "6": [1, 6, 8, 10], "__libc_start_main": 1, "0xed": 1, "0x7f87aa2b1dbd": 1, "0x40110a": 1, "24_fortran": 1, "interface_backtrac": 1, "interface_randomgen": 1, "cpp": [1, 3, 4, 6, 7, 9, 10, 13, 14], "util": [1, 2], "util_str": 1, "necessari": [1, 3, 8, 12], "enabl": [1, 4, 7, 10, 14], "bewar": [1, 4, 7], "need": [1, 2, 3, 4, 6, 7, 9, 12, 13, 14], "correspond": [1, 3, 7, 10], "public": [1, 2, 3, 6, 8, 13], "forget": [1, 4], "verifi": 1, "compat": [1, 2], "try": [1, 3, 4, 7, 14], "whenev": [1, 6, 10], "awar": 1, "fundament": 1, "arrai": 1, "column": 1, "major": [1, 2, 6, 13], "argument": [1, 6, 7, 9, 13], "mangl": 1, "usual": [1, 7], "ad": [1, 4, 14], "underscor": 1, "end": [1, 6, 7, 14], "fortran90": 1, "introduc": [1, 2, 7, 8], "modern": [1, 10, 13], "featur": [1, 4, 7, 9], "overload": 1, "user": [1, 2, 4, 14], "complic": [1, 14], "As": [1, 7, 9, 14], "vendor": 1, "fortun": [1, 6, 7], "rescu": 1, "header": [1, 3, 4, 5, 10, 13], "macro_namespac": 1, "symbol_namespac": 1, "symbol": 1, "fortrancinterface_glob": 1, "fortrancinterface_global_": 1, "fortrancinterface_modul": 1, "mod": [1, 13], "fortrancinterface_module_": 1, "global": [1, 13, 14], "contain": [1, 2, 3, 6, 13], "option": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "fortrancinterface_": 1, "prefix": 1, "namespac": 1, "automat": [1, 4, 6, 9, 10, 13], "definit": [1, 2, 7, 10, 13, 14], "bla": 1, "lapack": 1, "linear": 1, "algebra": 1, "scale": 1, "vector": 1, "dscal": 1, "solv": 1, "dgesv": 1, "assum": [1, 8], "mean": 1, "dimens": 1, "squar": 1, "matrix": 1, "input": [1, 3], "1000": 1, "c_dscal": 1, "done": [1, 14], "c_dgesv": 1, "info": [1, 3], "80085e": 1, "12": [1, 5], "25_cxx": 1, "readm": [1, 12], "md": 1, "math": [1, 13], "cxxbla": 1, "hpp": [1, 6, 10, 13], "cxxlapack": 1, "fc_mangl": 1, "h": [1, 3, 9, 10], "part": [1, 4, 7], "particular": [1, 6, 8], "hint": [1, 7, 9], "conveni": [1, 3, 7, 10, 12], "autogener": 1, "footnot": [1, 2, 13, 14], "gnu": [1, 6], "manual": [1, 6], "messag": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "foreach": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "set": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 14, 15], "cmake_print_vari": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "cmake_dependent_opt": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "detect": [2, 5, 6, 7, 8, 9], "exist": [2, 4, 14], "vast": [2, 13], "softwar": [2, 4, 6, 12], "happen": [2, 4, 7], "vacuum": 2, "framework": [2, 4, 10], "good": [2, 4, 6], "ensur": [2, 5, 8, 10], "satisfi": [2, 4, 6, 8, 10], "environ": [2, 4, 5, 6, 8, 9, 10], "place": [2, 14], "precondit": 2, "met": 2, "correctli": [2, 9], "instal": [2, 7, 8, 9, 13], "retriev": 2, "path": [2, 3, 7, 13], "load": [2, 12], "extern": [2, 4, 5, 8, 13, 14], "execut": [2, 3, 4, 5, 7, 8, 13], "discoveri": 2, "cover": [2, 5, 12], "almost": 2, "packagenam": 2, "exact": [2, 4], "quiet": 2, "modul": [2, 6, 10, 13], "optional_compon": 2, "no_policy_scop": 2, "attempt": [2, 9], "packag": 2, "search": [2, 7], "predefin": 2, "ask": [2, 14], "minimum": [2, 6, 8, 10, 13], "fail": [2, 3, 7], "trigger": 2, "fatal": [2, 6, 8], "just": [2, 7], "hand": [2, 14], "cannot": [2, 8, 14], "stress": [2, 4], "enough": 2, "find_": 2, "veri": [2, 3, 4, 7], "narrow": 2, "circumst": 2, "why": [2, 14], "larg": [2, 7, 8, 10], "select": [2, 7, 12], "common": [2, 3, 7, 8], "ship": [2, 3], "flawlessli": 2, "maintain": [2, 6, 10, 14], "develop": [2, 4, 6, 7, 8, 10, 14], "lift": 2, "burden": 2, "trick": [2, 5, 8], "up": [2, 3, 4, 5, 7, 8], "usag": [2, 4, 7], "simplifi": [2, 7, 10, 14], "enorm": 2, "consist": [2, 13], "multi": [2, 6, 10, 13], "found": [2, 3, 4, 8, 12], "grep": [2, 13, 14], "adapt": [2, 3, 5, 8, 14], "www": 2, "wp": 2, "upload": 2, "pdf": 2, "page": [2, 3, 8, 12], "85": 2, "cstdlib": [2, 6], "iostream": [2, 6], "void": 2, "long_running_task": 2, "someth": 2, "cout": [2, 6], "endl": [2, 6], "loop_bodi": 2, "int": [2, 6, 9], "j": [2, 7], "parallel_work": 2, "pragma": 2, "omp": 2, "taskgroup": 2, "task": 2, "concurr": 2, "taskloop": 2, "privat": [2, 3, 6, 7, 13], "grainsiz": 2, "500": 2, "nogroup": 2, "100": 2, "return": [2, 3, 6, 7, 9], "exit_success": [2, 6], "suitabl": 2, "least": [2, 10], "findopenmp": 2, "less": [2, 3, 7, 10, 13, 14], "openmp_cxx": 2, "success": [2, 9], "thu": [2, 9, 10, 13], "loop": [2, 7], "verbos": [2, 7], "notic": 2, "properli": [2, 9], "22_taskloop": 2, "findmpi": 2, "variabl": [2, 3, 4, 6, 7, 9, 10, 13], "23_mpi": 2, "against": [2, 9, 14], "invok": [2, 3, 6, 9, 10, 13], "observ": [2, 7], "prepar": 2, "made": [2, 8], "_dir": 2, "": [2, 3, 4, 6, 7, 14], "bbuild": [2, 6, 7, 14], "pc": 2, "unix": [2, 3, 6], "leverag": 2, "pkgconfig": [2, 9], "uuid": [2, 9], "imported_target": 2, "libuuid": 2, "strategi": 2, "adopt": [2, 4, 8], "probe": [2, 5, 8], "test": [2, 5, 6, 8, 10, 13], "classic": 2, "tool": [2, 6, 7, 8, 12, 14], "robust": [2, 13], "ninja": [2, 6], "v": 2, "doe": [3, 6, 7, 13, 14], "interact": 3, "characterist": 3, "pre": 3, "sane": 3, "multitud": 3, "notabl": 3, "front": [3, 7], "curiou": 3, "kind": [3, 6], "introspect": 3, "custom": [3, 7, 10, 13], "creation": 3, "fly": [3, 4], "none": [3, 6], "interest": 3, "independ": 3, "12_o": 3, "appli": [3, 4, 7, 8], "gain": 3, "result": [3, 6, 9], "queri": 3, "kei": 3, "onc": [3, 10, 12], "again": 3, "13_processor": 3, "14_host_system_inform": 3, "open": [3, 12], "browser": 3, "extend": [3, 7], "sometim": [3, 9], "constant": 3, "ifdef": 3, "is_window": 3, "window": [3, 8], "elif": 3, "is_linux": 3, "linux": [3, 6, 8], "is_maco": 3, "maco": 3, "unknown": 3, "combin": 3, "15_sys_preproc": 3, "items1": [3, 13], "items2": [3, 13], "singl": [3, 4, 6], "rather": [3, 4, 7, 10, 13], "than": [3, 4, 6, 7, 10, 13, 14], "after": [3, 5, 12, 14], "copyonli": 3, "escape_quot": 3, "newline_styl": 3, "win32": [3, 6], "lf": 3, "crlf": 3, "copi": [3, 8, 14], "placehold": 3, "rel": [3, 13], "treat": 3, "respect": [3, 7, 9], "cmake_current_binary_dir": 3, "revisit": [3, 9], "save": [3, 7, 9, 12], "16_configur": 3, "config": [3, 6, 7], "u": [3, 4, 6, 14], "physic": 3, "core": 3, "total": 3, "memori": 3, "o": [3, 13], "past": 3, "anywher": 3, "yet": [3, 9], "e": [3, 6, 8, 9, 14], "too": [3, 4], "fix": 3, "thereof": 3, "download": [4, 10], "fetch": 4, "miss": 4, "externalproject": 4, "step": [4, 7, 9, 10, 13], "rewrit": 4, "whole": [4, 6, 12], "superbuild": 4, "manag": [4, 5, 6, 12], "delimit": 4, "chang": [4, 6, 7, 8, 10, 14], "both": [4, 9, 13], "power": [4, 12, 13], "mechan": [4, 7, 9], "care": 4, "comprehens": 4, "successfulli": [4, 9], "To": [4, 6, 12, 13], "been": [4, 13], "steadili": 4, "improv": 4, "workflow": 4, "tarbal": [4, 10], "local": [4, 14], "remot": 4, "control": [4, 13], "repositori": [4, 8], "git": 4, "svn": 4, "etc": [4, 12], "contentopt": 4, "would": [4, 7, 9, 14], "externalproject_add": 4, "updat": [4, 9], "patch": [4, 6], "git_repositori": 4, "git_tag": 4, "revis": 4, "tag": 4, "commit": 4, "hash": 4, "wherea": 4, "url": [4, 6], "onlin": [4, 7, 8], "popul": 4, "name1": 4, "name2": 4, "valuabl": [4, 7], "techniqu": 4, "engin": [4, 8], "identifi": [4, 7], "regress": 4, "fine": [4, 9], "meant": 4, "isol": [4, 8, 12], "codebas": [4, 6, 8, 10], "equip": 4, "integr": [4, 6, 7, 10], "practic": [4, 5, 6, 7, 8], "slightli": [4, 10], "approach": 4, "peculiar": 4, "popular": 4, "emphas": 4, "driven": 4, "distribut": 4, "appeal": 4, "easili": [4, 7], "github": [4, 5, 8, 12], "26_more": 4, "14": [4, 7], "sum_integ": [4, 7], "sum_up": [4, 7], "v2": 4, "cpp_test": [4, 7], "issu": [4, 7], "ones": 4, "toolbox": 4, "durat": 4, "stage": [4, 6, 7, 9], "balloon": 4, "cmake": [5, 10, 12], "code": [5, 12, 14], "ctest": [5, 6, 8, 13], "safe": [5, 8, 14], "mix": [5, 8], "python": [5, 8, 12], "move": [5, 7, 13], "addit": [5, 8, 13], "topic": [5, 8], "had": [5, 7, 8], "skip": 5, "due": 5, "lack": 5, "thursdai": 5, "septemb": 5, "2022": 5, "9": 5, "00": 5, "10": 5, "welcom": 5, "introduct": 5, "train": [5, 8], "cours": [5, 6], "45": 5, "25": 5, "syntax": [5, 7, 8, 10], "35": [5, 8], "15": 5, "05": 5, "wrap": [5, 6], "fridai": 5, "did": [5, 6], "yesterdai": 5, "50": 5, "autom": [5, 6, 8, 10], "fetchcont": [5, 8, 10], "tip": [5, 8], "section": 5, "summar": 5, "best": 5, "coderefineri": [5, 8, 14], "fork": 5, "lesson": [5, 8, 14], "http": [5, 12], "io": [5, 12, 13, 14], "workshop": [5, 6, 12], "grow": [5, 14], "mondai": 5, "29": 5, "novemb": 5, "2021": 5, "flow": 5, "great": 5, "fact": 5, "robertodr": 5, "doubl": 5, "carefulli": [5, 13], "rearrang": 5, "exercis": [5, 12], "next": [5, 6], "55": 5, "tuesdai": 5, "februari": 5, "wednesdai": 5, "alloc": [5, 8, 9], "minut": [5, 12], "short": [5, 7, 10], "dure": [5, 8], "breakout": 5, "room": 5, "spill": 5, "suit": [6, 7], "simpl": [6, 7, 13], "distinguish": 6, "everywher": 6, "piec": 6, "anyth": [6, 8], "calendar": 6, "app": 6, "computation": 6, "intens": 6, "involv": 6, "transform": [6, 8], "binari": [6, 9, 12], "could": [6, 7], "devic": 6, "dsl": [6, 13], "agnost": [6, 8], "reus": [6, 8, 13], "On": [6, 9], "abstract": [6, 13], "awai": 6, "bring": [6, 12, 14], "closer": 6, "id": 6, "track": [6, 14], "proce": 6, "choos": 6, "favorit": [6, 8], "along": [6, 8], "00_hello": 6, "pure": 6, "say_hello": 6, "implicit": [6, 14], "charact": 6, "len": 6, "hello_world": 6, "read": [6, 9, 10, 13], "first": [6, 9, 12, 13], "readi": 6, "And": 6, "min": [6, 8], "max": [6, 8], "maximum": [6, 8], "rais": [6, 8], "constraint": [6, 8], "minor": 6, "tweak": 6, "descript": [6, 8], "homepage_url": 6, "matter": [6, 7, 14], "howev": [6, 7, 10, 13], "pars": [6, 10], "must": [6, 8], "unsurprisingli": 6, "macosx_bundl": 6, "exclude_from_al": [6, 13], "source1": 6, "source2": 6, "relat": [6, 14], "evolv": [6, 9], "idea": 6, "contrari": 6, "g": [6, 8, 14], "quit": [6, 7, 10], "screen": [6, 7, 13], "analyz": 6, "last": [6, 9], "green": 6, "hill": 6, "experiment": 6, "watcom": 6, "wmake": 6, "codeblock": 6, "codelit": 6, "sublim": 6, "kate": 6, "eclips": 6, "cdt4": 6, "cdt": 6, "terminologi": 6, "scan": 6, "alongsid": [6, 7], "keep": [6, 9, 13], "b": [6, 7], "minim": [6, 14], "gninja": 6, "dcmake_cxx_compil": 6, "clang": 6, "access": [6, 8, 12], "inquir": [6, 13], "cmake_gener": 6, "cycl": [6, 7], "deploy": 6, "seen": [6, 7, 13, 14], "itself": [6, 10], "lifetim": 6, "figur": [6, 13], "reproduc": 6, "cookbook": [6, 8], "licens": [6, 8], "cc": [6, 8], "BY": [6, 8], "sa": 6, "encount": 6, "repeatedli": 6, "atom": 6, "organ": [6, 8, 13], "think": [6, 13], "mutual": 6, "chain": 6, "much": [6, 7, 13, 14], "state": [6, 7, 14], "clarifi": 6, "concept": 6, "01_librari": 6, "explicitli": [6, 7, 9, 14], "activ": [7, 8, 12], "design": [7, 10, 14], "bug": 7, "facilit": 7, "onboard": 7, "runner": 7, "exit": 7, "realli": 7, "long": [7, 8], "zero": 7, "classifi": 7, "succeed": 7, "enable_test": 7, "take": [7, 12], "arg": [7, 9], "working_directori": [7, 9, 10], "command_expand_list": 7, "mandatori": 7, "former": 7, "latter": 7, "sum": 7, "05_hello": 7, "cmake_cxx_standard": 7, "cmake_cxx_extens": 7, "cmake_cxx_standard_requir": 7, "target_fil": 7, "gen": 7, "exp": 7, "cd": [7, 13], "06_bash": 7, "sh": 7, "bash_execut": 7, "equival": [7, 13], "absolut": [7, 13], "07_python": 7, "py": [7, 9, 10], "python_execut": [7, 10], "demonstr": 7, "failur": 7, "subset": 7, "r": 7, "regex": 7, "whose": 7, "captur": 7, "re": [7, 12], "exclud": 7, "le": 7, "stride": 7, "rerun": 7, "parallel": [7, 14], "guarante": [7, 14], "interdepend": [7, 13], "uniqu": 7, "filter": 7, "group": 7, "principl": 7, "suffix": 7, "belong": 7, "situat": 7, "among": 7, "test1": [7, 13], "test2": 7, "prop1": 7, "value1": [7, 13], "prop2": 7, "value2": 7, "categori": 7, "quick": [7, 8], "benchmark": 7, "longer": 7, "08_ctest": 7, "bonu": [7, 13], "six": 7, "everyth": 7, "expect": 7, "filenam": 7, "highlight": 7, "will_fail": 7, "subsequ": 7, "longest": [7, 10], "influenc": 7, "behavior": [7, 14], "explicit": 7, "toler": 7, "variat": 7, "around": 7, "09_ctest": 7, "10_ctest": 7, "11_ctest": 7, "visit": 7, "cross": 8, "reliabl": [8, 14], "deploi": 8, "attend": 8, "pleas": 8, "recent": 8, "supercomput": 8, "snic": 8, "question": 8, "hpc": [8, 12], "resourc": 8, "direct": 8, "desk": 8, "recommend": [8, 12, 14], "conda": [8, 12], "subsystem": [8, 12], "wsl": [8, 12], "bibliographi": 8, "instructor": 8, "guid": [8, 12], "student": 8, "research": 8, "heard": 8, "experi": 8, "commonli": 8, "choic": [8, 10], "particip": 8, "prior": 8, "knowledg": 8, "expertis": 8, "eurocc": 8, "nation": 8, "compet": 8, "center": 8, "sweden": 8, "encc": [8, 12], "taught": 8, "aim": 8, "exposur": 8, "clearli": 8, "object": 8, "therefor": 8, "self": 8, "wish": 8, "teach": 8, "advic": [8, 14], "signatur": [8, 9], "shown": 8, "wrench": 8, "emoji": 8, "hidden": 8, "click": [8, 12], "box": 8, "laptop": 8, "keyboard": 8, "16": 8, "free": [8, 12], "regard": 8, "tutori": 8, "hep": 8, "foundat": 8, "consult": 8, "book": 8, "craig": 8, "scott": 8, "radovan": 8, "bast": 8, "roberto": 8, "di": 8, "remigio": 8, "accompani": 8, "layout": 8, "inspir": 8, "deriv": 8, "mit": 8, "creativ": 8, "attribut": 8, "human": 8, "readabl": 8, "summari": 8, "substitut": 8, "legal": 8, "redistribut": 8, "medium": 8, "format": 8, "remix": 8, "upon": 8, "purpos": [8, 9], "even": [8, 10, 14], "commerci": 8, "licensor": 8, "revok": 8, "freedom": 8, "copyright": 8, "se": 8, "indic": 8, "were": 8, "mai": [8, 14], "reason": [8, 14], "manner": 8, "suggest": [8, 13], "endors": 8, "No": 8, "restrict": 8, "technolog": 8, "measur": 8, "permit": 8, "understand": 8, "compli": 8, "except": 8, "limit": 8, "warranti": 8, "permiss": [8, 14], "intend": [8, 9], "right": [8, 12], "privaci": 8, "moral": 8, "otherwis": 8, "osi": 8, "approv": 8, "lifecycl": 9, "grain": 9, "method": 9, "child": 9, "cmd1": 9, "args1": 9, "cmd2": 9, "args2": 9, "timeout": 9, "second": 9, "result_vari": 9, "results_vari": 9, "output_vari": 9, "error_vari": 9, "input_fil": 9, "output_fil": 9, "error_fil": 9, "output_quiet": 9, "error_quiet": 9, "output_strip_trailing_whitespac": 9, "error_strip_trailing_whitespac": 9, "encod": 9, "stream": 9, "record": 9, "reli": [9, 10, 13], "ll": 9, "cffi": 9, "__version__": 9, "replic": 9, "17_find_cffi": 9, "abov": [9, 10, 13], "dedic": 9, "convention": 9, "findpython": [9, 10], "problem": [9, 14], "viabl": 9, "altern": 9, "action": 9, "real": [9, 13], "instanc": 9, "pre_build": 9, "pre_link": 9, "post_build": 9, "command1": 9, "command2": 9, "byproduct": 9, "comment": 9, "verbatim": 9, "uses_termin": 9, "echo": 9, "size": 9, "18_pre_post": 9, "mind": 9, "gave": 9, "Or": 9, "lang": 9, "compilerflag": 9, "check_": 9, "_compiler_flag": 9, "valid": 9, "sourcecompil": 9, "_source_compil": 9, "sourcerun": 9, "_source_run": 9, "remov": [9, 14], "face": [9, 13], "19_check_compiler_flag": 9, "implement": [9, 13], "asan": 9, "address": 9, "sanit": 9, "fsanit": 9, "fno": 9, "omit": 9, "frame": 9, "cmakecxxcompilerflag": 9, "those": [9, 14], "20_check_source_run": 9, "argc": 9, "char": 9, "argv": 9, "uuid_t": 9, "uuid_gener": 9, "checkcsourcerun": 9, "bind": 10, "flexibl": 10, "dynam": 10, "penalti": 10, "inher": 10, "bridg": 10, "gap": 10, "swig": 10, "possibli": 10, "histori": 10, "cython": 10, "lot": 10, "effort": 10, "boost": 10, "tailor": 10, "templat": 10, "metaprogram": 10, "philosophi": 10, "easi": 10, "compact": 10, "won": 10, "t": [10, 12, 13], "excess": 10, "excel": 10, "wrapper": 10, "small": 10, "simul": [10, 13], "account": [10, 13], "27_cxx": 10, "request": 10, "keyword": 10, "refer": 10, "help": [10, 14], "fixm": 10, "prompt": 10, "releas": 10, "pybind11_add_modul": 10, "foreign": 10, "low": 10, "straightforwardli": 10, "api": 10, "accomplish": 10, "cffi_build": 10, "_pyaccount": 10, "pair": 10, "main_depend": 10, "pyaccount": 10, "builder": 10, "regener": [10, 14], "python_add_librari": 10, "add_depend": 10, "28_fortran": 10, "__init__": 10, "28_cxx": 10, "c_cpp_interfac": 10, "cluster": 12, "prerequisit": 12, "cloud": 12, "via": 12, "enviro": 12, "strongli": 12, "com": 12, "kapsakcj": 12, "win10": 12, "termin": 12, "below": 12, "simpli": 12, "miniconda": 12, "doc": 12, "en": 12, "latest": 12, "html": 12, "macosx": 12, "yml": 12, "drive": 12, "navig": 12, "env": 12, "mybind": 12, "customiz": 12, "launch": 12, "button": 12, "notebook": 12, "don": 12, "despair": 12, "jupyt": 12, "dashboard": 12, "editor": 12, "prefer": [12, 14], "nano": 12, "vim": 12, "emac": 12, "exactli": 13, "compris": 13, "hundr": 13, "sprawl": 13, "advent": 13, "known": 13, "signific": 13, "shift": 13, "convei": 13, "broad": 13, "map": 13, "tgta": 13, "tgtb": 13, "tgtc": 13, "tgtd": 13, "pseudo": 13, "consum": 13, "five": 13, "littl": 13, "29_visibl": 13, "bank": 13, "ffast": 13, "throughout": 13, "instead": [13, 14], "know": [13, 14], "tabl": 13, "who": [13, 14], "far": 13, "Their": 13, "leaf": 13, "entri": 13, "target_directori": 13, "brief_doc": 13, "full_doc": 13, "target1": 13, "src1": 13, "file1": 13, "entry1": 13, "append": 13, "append_str": 13, "leav": 13, "evolut": [13, 14], "initi": [13, 14], "parser": [13, 14], "source_dir": 13, "binary_dir": 13, "typic": 13, "necessarili": 13, "higher": 13, "elementari": 13, "automaton": 13, "21_automata": 13, "convers": 13, "ancestor": 13, "impos": [13, 14], "intervent": 13, "cmake_runtime_output_directori": 13, "cmake_archive_output_directori": 13, "cmake_library_output_directori": 13, "cmake_fortran_module_directori": 13, "visual": 13, "graphviz": 13, "dot": 13, "svg": 13, "granular": 13, "recogn": 14, "pattern": 14, "corner": 14, "contribut": 14, "overse": 14, "entir": 14, "coupl": 14, "larger": 14, "patter": 14, "tempt": 14, "correct": 14, "modif": 14, "colleagu": 14, "enable_mpi": 14, "mpi": 14, "denable_mpi": 14, "encapsul": 14, "todai": 14, "cmakeprinthelp": 14, "my_lengthy_cod": 14, "concern": 14, "motiv": 14, "portion": 14, "risk": 14, "high": 14, "somebodi": 14, "reorder": 14, "sub": 14, "better": 14, "carri": 14, "closest": 14, "mainten": 14, "renam": 14, "close": 14, "never": 14, "quot": 14, "explan": 14, "subcommand": 14, "configure_depend": 14, "futur": 14, "stuck": 14, "still": 14, "cost": 14, "rebuild": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"cmake": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13, 14], "syntax": 0, "question": [0, 1, 2, 3, 4, 6, 7, 9, 10, 13], "object": [0, 1, 2, 3, 4, 6, 7, 9, 10, 13, 14], "The": [0, 4, 6, 7, 13], "dsl": 0, "variabl": [0, 14], "class": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "refer": [0, 1, 2, 3, 4, 6, 7, 8, 9, 11, 13], "intern": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "href": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "http": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "org": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "help": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "latest": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "command": [0, 2, 3, 6, 7, 8, 9, 13], "set": [0, 7, 12, 13], "html": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "span": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "xref": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "std": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "term": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "code": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 13], "docutil": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "liter": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "notransl": [0, 1, 2, 3, 4, 6, 7, 8, 9, 13], "modul": [0, 1, 4, 9, 14], "flow": [0, 14], "control": [0, 6, 14], "expans": 0, "condit": [0, 3], "exercis": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 13], "2": 0, "foreach": 0, "loop": 0, "print": 0, "messag": 0, "paramet": [0, 1, 3, 6, 8], "cmakeprinthelp": 0, "cmake_print_vari": 0, "build": [0, 9, 13], "option": [0, 14], "cmakedependentopt": 0, "cmake_dependent_opt": 0, "4": 0, "user": [0, 12], "face": 0, "keypoint": [0, 1, 2, 3, 4, 6, 7, 9, 10, 13], "mix": [1, 10], "c": [1, 10], "fortran": [1, 10], "us": [1, 2, 7, 10, 12, 14], "24": 1, "A": [1, 6], "execut": [1, 6, 9], "librari": [1, 6], "fortrancinterfac": 1, "fortrancinterface_head": 1, "25": 1, "find": [2, 9], "depend": [2, 3, 4, 13], "find_packag": 2, "openmp": 2, "23": 2, "mpi": 2, "altern": 2, "config": 2, "script": [2, 7], "pkg": 2, "detect": 3, "your": [3, 6, 7, 9, 12], "environ": [3, 12], "discov": 3, "oper": 3, "system": [3, 12, 13], "processor": 3, "cmake_host_system_inform": 3, "discoveri": 3, "14": 3, "get": 3, "know": 3, "host": 3, "platform": 3, "compil": [3, 6, 9, 10], "sourc": [3, 6, 14], "preprocessor": 3, "definit": 3, "target_compile_definit": [3, 13], "configure_fil": 3, "16": 3, "configur": [3, 9], "file": [3, 14], "autom": 4, "handl": 4, "fetchcont": 4, "fetchcontent_declar": 4, "fetchcontent_makeavail": 4, "unit": 4, "test": [4, 7, 9, 14], "catch2": 4, "26": 4, "reload": 4, "instructor": 5, "": [5, 8, 13], "guid": 5, "learn": 5, "outcom": 5, "third": 5, "iter": 5, "second": 5, "first": [5, 7], "from": 6, "what": 6, "i": [6, 8], "why": 6, "should": 6, "you": 6, "care": 6, "hello": 6, "world": 6, "cmake_minimum_requir": [6, 8], "project": [6, 7], "add_execut": 6, "put": 6, "cmakelist": 6, "txt": 6, "under": 6, "version": 6, "line": [6, 7], "interfac": [6, 7], "complet": 6, "toolchain": 6, "produc": 6, "add_librari": 6, "target_link_librari": [6, 13], "ar": 6, "target": [6, 9, 13, 14], "1": 6, "creat": [7, 12], "run": [7, 9], "ctest": 7, "ad": 7, "add_test": 7, "6": 7, "through": 7, "shell": 7, "7": 7, "python": [7, 9, 10], "how": 7, "effect": [7, 14], "properti": [7, 13], "label": 7, "timeout": 7, "cost": 7, "set_tests_properti": 7, "8": 7, "9": 7, "10": [7, 8], "11": 7, "more": 7, "hand": 8, "workshop": 8, "prerequisit": 8, "who": 8, "cours": 8, "about": [8, 13], "graphic": 8, "text": 8, "convent": 8, "let": 8, "look": 8, "an": [8, 12], "exampl": 8, "see": 8, "also": 8, "credit": 8, "instruct": 8, "materi": 8, "softwar": 8, "probe": 9, "link": 9, "custom": 9, "time": 9, "execute_process": 9, "17": 9, "add_custom_command": 9, "18": 9, "befor": 9, "after": 9, "19": 9, "check": 9, "accept": 9, "flag": 9, "20": 9, "runtim": 9, "capabl": 9, "languag": 10, "pybind11": 10, "27": 10, "bank": 10, "cffi": 10, "28": 10, "quick": 11, "up": 12, "For": 12, "window": 12, "maco": 12, "linux": 12, "instal": 12, "packag": 12, "binder": 12, "base": 13, "It": 13, "all": 13, "target_sourc": 13, "target_compile_opt": 13, "target_include_directori": 13, "understand": 13, "visibl": 13, "level": 13, "rule": 13, "thumb": 13, "get_properti": 13, "set_properti": 13, "multipl": 13, "folder": 13, "add_subdirectori": 13, "21": 13, "cellular": 13, "automata": 13, "tree": 13, "tip": 14, "trick": 14, "list": 14, "glob": 14, "them": 14, "organ": 14, "v": 14, "function": 14, "macro": 14, "where": 14, "order": 14, "side": 14, "keep": 14, "gener": 14, "bibliographi": 15}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinxcontrib.bibtex": 9, "sphinx.ext.todo": 2, "sphinx": 56}})