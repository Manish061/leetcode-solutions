#include <iostream>
#include <vector>
#include <assert.h>

class staircase
{
private:
    int xLength, N;

public:
    staircase();
    staircase(int xLength, int N);
    int jump(std::vector<int> &);
};

staircase::staircase() {}

staircase::staircase(int xLength, int N)
{
    staircase::xLength = xLength;
    staircase::N = N;
}

int staircase::jump(std::vector<int> &steps)
{
    assert(N > -1);

    int x = staircase::xLength;
    int N = staircase::N;
    std::vector<int> dp(N + 5, 0);
    dp[0] = 1;
    for (int len = 1; len <= N; len++)
    {
        for (int i = 0; i < x; i++)
        {
            dp[len] += (len - steps[i] >= 0 && dp[len - steps[i]] ? dp[len - steps[i]] : 0);
        }
    }
    return dp[N];
}

int main()
{
    int n, x;
    std::cin >> n >> x;
    std::vector<int> steps(x);

    for (int i = 0; i < x; i++)
    {
        std::cin >> steps[i];
    }

    staircase s(x, n);
    int res = s.jump(steps);
    std::cout << res << "\n";
}
