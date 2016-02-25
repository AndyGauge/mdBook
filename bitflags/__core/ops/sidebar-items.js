initSidebarItems({"struct":[["Range","A (half-open) range which is bounded at both ends."],["RangeFrom","A range which is only bounded below."],["RangeFull","An unbounded range."],["RangeTo","A range which is only bounded above."]],"trait":[["Add","The `Add` trait is used to specify the functionality of `+`.ExamplesA trivial implementation of `Add`. When `Foo + Foo` happens, it ends up calling `add`, and therefore, `main` prints `Adding!`."],["AddAssign","The `AddAssign` trait is used to specify the functionality of `+=`.ExamplesA trivial implementation of `AddAssign`. When `Foo += Foo` happens, it ends up calling `add_assign`, and therefore, `main` prints `Adding!`."],["BitAnd","The `BitAnd` trait is used to specify the functionality of `&`.ExamplesA trivial implementation of `BitAnd`. When `Foo & Foo` happens, it ends up calling `bitand`, and therefore, `main` prints `Bitwise And-ing!`."],["BitAndAssign","The `BitAndAssign` trait is used to specify the functionality of `&=`.ExamplesA trivial implementation of `BitAndAssign`. When `Foo &= Foo` happens, it ends up calling `bitand_assign`, and therefore, `main` prints `Bitwise And-ing!`."],["BitOr","The `BitOr` trait is used to specify the functionality of `|`.ExamplesA trivial implementation of `BitOr`. When `Foo | Foo` happens, it ends up calling `bitor`, and therefore, `main` prints `Bitwise Or-ing!`."],["BitOrAssign","The `BitOrAssign` trait is used to specify the functionality of `|=`.ExamplesA trivial implementation of `BitOrAssign`. When `Foo |= Foo` happens, it ends up calling `bitor_assign`, and therefore, `main` prints `Bitwise Or-ing!`."],["BitXor","The `BitXor` trait is used to specify the functionality of `^`.ExamplesA trivial implementation of `BitXor`. When `Foo ^ Foo` happens, it ends up calling `bitxor`, and therefore, `main` prints `Bitwise Xor-ing!`."],["BitXorAssign","The `BitXorAssign` trait is used to specify the functionality of `^=`.ExamplesA trivial implementation of `BitXorAssign`. When `Foo ^= Foo` happens, it ends up calling `bitxor_assign`, and therefore, `main` prints `Bitwise Xor-ing!`."],["BoxPlace","Specialization of `Place` trait supporting `box EXPR`."],["Boxed","Core trait for the `box EXPR` form.`box EXPR` effectively desugars into:The type of `box EXPR` is supplied from its surrounding context; in the above expansion, the result type `T` is used to determine which implementation of `Boxed` to use, and that `<T as Boxed>` in turn dictates determines which implementation of `BoxPlace` to use, namely: `<<T as Boxed>::Place as BoxPlace>`."],["CoerceUnsized","Trait that indicates that this is a pointer or a wrapper for one, where unsizing can be performed on the pointee."],["Deref","The `Deref` trait is used to specify the functionality of dereferencing operations, like `*v`.`Deref` also enables '`Deref` coercions'.ExamplesA struct with a single field which is accessible via dereferencing the struct."],["DerefMut","The `DerefMut` trait is used to specify the functionality of dereferencing mutably like `*v = 1;``DerefMut` also enables '`Deref` coercions'.ExamplesA struct with a single field which is modifiable via dereferencing the struct."],["Div","The `Div` trait is used to specify the functionality of `/`.ExamplesA trivial implementation of `Div`. When `Foo / Foo` happens, it ends up calling `div`, and therefore, `main` prints `Dividing!`."],["DivAssign","The `DivAssign` trait is used to specify the functionality of `/=`.ExamplesA trivial implementation of `DivAssign`. When `Foo /= Foo` happens, it ends up calling `div_assign`, and therefore, `main` prints `Dividing!`."],["Drop","The `Drop` trait is used to run some code when a value goes out of scope. This is sometimes called a 'destructor'.ExamplesA trivial implementation of `Drop`. The `drop` method is called when `_x` goes out of scope, and therefore `main` prints `Dropping!`."],["Fn","A version of the call operator that takes an immutable receiver."],["FnMut","A version of the call operator that takes a mutable receiver."],["FnOnce","A version of the call operator that takes a by-value receiver."],["InPlace","Specialization of `Place` trait supporting `in (PLACE) EXPR`."],["Index","The `Index` trait is used to specify the functionality of indexing operations like `arr[idx]` when used in an immutable context.ExamplesA trivial implementation of `Index`. When `Foo[Bar]` happens, it ends up calling `index`, and therefore, `main` prints `Indexing!`."],["IndexMut","The `IndexMut` trait is used to specify the functionality of indexing operations like `arr[idx]`, when used in a mutable context.ExamplesA trivial implementation of `IndexMut`. When `Foo[Bar]` happens, it ends up calling `index_mut`, and therefore, `main` prints `Indexing!`."],["Mul","The `Mul` trait is used to specify the functionality of `*`.ExamplesA trivial implementation of `Mul`. When `Foo * Foo` happens, it ends up calling `mul`, and therefore, `main` prints `Multiplying!`."],["MulAssign","The `MulAssign` trait is used to specify the functionality of `*=`.ExamplesA trivial implementation of `MulAssign`. When `Foo *= Foo` happens, it ends up calling `mul_assign`, and therefore, `main` prints `Multiplying!`."],["Neg","The `Neg` trait is used to specify the functionality of unary `-`.ExamplesA trivial implementation of `Neg`. When `-Foo` happens, it ends up calling `neg`, and therefore, `main` prints `Negating!`."],["Not","The `Not` trait is used to specify the functionality of unary `!`.ExamplesA trivial implementation of `Not`. When `!Foo` happens, it ends up calling `not`, and therefore, `main` prints `Not-ing!`."],["Place","Both `in (PLACE) EXPR` and `box EXPR` desugar into expressions that allocate an intermediate \"place\" that holds uninitialized state.  The desugaring evaluates EXPR, and writes the result at the address returned by the `pointer` method of this trait.A `Place` can be thought of as a special representation for a hypothetical `&uninit` reference (which Rust cannot currently express directly). That is, it represents a pointer to uninitialized storage.The client is responsible for two steps: First, initializing the payload (it can access its address via `pointer`). Second, converting the agent to an instance of the owning pointer, via the appropriate `finalize` method (see the `InPlace`.If evaluating EXPR fails, then the destructor for the implementation of Place to clean up any intermediate state (e.g. deallocate box storage, pop a stack, etc)."],["Placer","Interface to implementations of  `in (PLACE) EXPR`.`in (PLACE) EXPR` effectively desugars into:The type of `in (PLACE) EXPR` is derived from the type of `PLACE`; if the type of `PLACE` is `P`, then the final type of the whole expression is `P::Place::Owner` (see the `InPlace` and `Boxed` traits).Values for types implementing this trait usually are transient intermediate values (e.g. the return value of `Vec::emplace_back`) or `Copy`, since the `make_place` method takes `self` by value."],["Rem","The `Rem` trait is used to specify the functionality of `%`.ExamplesA trivial implementation of `Rem`. When `Foo % Foo` happens, it ends up calling `rem`, and therefore, `main` prints `Remainder-ing!`."],["RemAssign","The `RemAssign` trait is used to specify the functionality of `%=`.ExamplesA trivial implementation of `RemAssign`. When `Foo %= Foo` happens, it ends up calling `rem_assign`, and therefore, `main` prints `Remainder-ing!`."],["Shl","The `Shl` trait is used to specify the functionality of `<<`.ExamplesA trivial implementation of `Shl`. When `Foo << Foo` happens, it ends up calling `shl`, and therefore, `main` prints `Shifting left!`."],["ShlAssign","The `ShlAssign` trait is used to specify the functionality of `<<=`.ExamplesA trivial implementation of `ShlAssign`. When `Foo <<= Foo` happens, it ends up calling `shl_assign`, and therefore, `main` prints `Shifting left!`."],["Shr","The `Shr` trait is used to specify the functionality of `>>`.ExamplesA trivial implementation of `Shr`. When `Foo >> Foo` happens, it ends up calling `shr`, and therefore, `main` prints `Shifting right!`."],["ShrAssign","The `ShrAssign` trait is used to specify the functionality of `>>=`.ExamplesA trivial implementation of `ShrAssign`. When `Foo >>= Foo` happens, it ends up calling `shr_assign`, and therefore, `main` prints `Shifting right!`."],["Sub","The `Sub` trait is used to specify the functionality of `-`.ExamplesA trivial implementation of `Sub`. When `Foo - Foo` happens, it ends up calling `sub`, and therefore, `main` prints `Subtracting!`."],["SubAssign","The `SubAssign` trait is used to specify the functionality of `-=`.ExamplesA trivial implementation of `SubAssign`. When `Foo -= Foo` happens, it ends up calling `sub_assign`, and therefore, `main` prints `Subtracting!`."]]});